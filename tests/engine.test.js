// Engine-Test: lädt three.js, Engine, Lewis und Aufgaben aus der HTML-Datei und prüft die Chemie.
// Aufruf: node tests/engine.test.js [Pfad zur HTML-Datei]
const fs = require('fs'), vm = require('vm'), path = require('path');
const html = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const ctx = { console, Math, JSON, Object, Array, String, Number, Error, Promise, Uint8Array, TextEncoder, TextDecoder, setTimeout };
ctx.window = ctx; ctx.globalThis = ctx; ctx.self = ctx; ctx.global = ctx;
vm.createContext(ctx);
[0, 2, 3, 4].forEach(i => vm.runInContext(scripts[i], ctx));
const T = ctx.THREE, K = ctx.KWM;
let fails = 0;
function ok(cond, msg) { if (!cond) { fails++; console.log('FEHLER:', msg); } else console.log('ok:', msg); }

function oldCharge(atom) { let q = 0; atom.clouds.forEach(c => { if (c.ion === 'gone') q++; else if (c.ion === 'gain') q--; }); return q; }

// 1. Ladungen aller Beispiele unverändert
{
  let same = true;
  K.EXAMPLES.filter(ex => ex.cat !== 'charged').forEach(ex => {
    const w = new K.World(); w.buildMolecule(ex.spec, new T.Vector3());
    w.atoms.forEach(a => { if (w.chargeOf(a) !== oldCharge(a)) { same = false; console.log('  abweichend', ex.id, a.sym, w.chargeOf(a), oldCharge(a)); } });
  });
  ok(same, 'Ladungen aller Beispiele wie bisher');
}

function build(w, id) { const ex = K.EXAMPLES.find(e => e.id === id); return w.buildMolecule(ex.spec, new T.Vector3()); }
function attachProton(w, acceptor) {
  const lp = w.freePairs(acceptor)[0];
  const pos = w.cloudCenter(acceptor, lp).add(w.cloudDir(acceptor, lp).multiplyScalar(0.3));
  const p = w.addProton(pos, new T.Quaternion());
  const ov = w.findOverlaps([p], K.REACH);
  const ch = w.chooseBond(ov);
  if (!ch) return null;
  const r = w.makeBond(ch.a, ch.b, ch.pairs);
  w.applyPlan(w.planAlign(r.bond, ch.a));
  return p;
}

// 2. H2O + H+ -> H3O+
{
  const w = new K.World(); const at = build(w, 'h2o'); const O = at[0];
  const p = attachProton(w, O);
  ok(!!p, 'Proton bindet an freies Elektronenpaar von O');
  const d = w.describe(w.component(O));
  ok(d.formula === 'H₃O⁺' && d.name === 'Oxonium-Ion', 'H₃O⁺ erkannt: ' + d.formula + ' ' + d.name);
  ok(d.charge === 1 && w.chargeOf(O) === 1 && w.chargeOf(p) === 0, 'Ladung +1 formal am O');
  ok(w.geometryOf(O).name === 'trigonal-pyramidal', 'H₃O⁺ trigonal-pyramidal');
  ok(d.complete, 'H₃O⁺ ohne offene Bindungsstelle');
  const lens = w.bondsOf(O).map(b => w.atom(b.a).pos.distanceTo(w.atom(b.b).pos).toFixed(3));
  ok(new Set(lens).size === 1, 'alle O–H gleich lang: ' + lens.join(', '));
  const lw = K.lewis(w, w.component(O));
  ok(lw && lw.svg.indexOf('+') > 0 && lw.svg.indexOf('class="br"') < 0, 'Lewis H₃O⁺ mit Ladung am O ohne Klammer');
  // Rundreise
  const w2 = new K.World(); w2.load(JSON.parse(JSON.stringify(w.serialize())));
  const d2 = w2.describe(w2.atoms);
  ok(d2.formula === 'H₃O⁺', 'H₃O⁺ übersteht Speichern/Laden');
  // Lösen der Proton-Bindung gibt wieder H2O + H+
  const b = w2.bondsOf(w2.atom(p.id))[0]; w2.breakBond(b);
  ok(w2.isProton(w2.atom(p.id)) && w2.describe(w2.component(w2.atom(O.id))).formula === 'H₂O', 'Lösen gibt H₂O + H⁺');
}

// 3. NH3 + H+ -> NH4+
{
  const w = new K.World(); const at = build(w, 'nh3'); const N = at[0];
  attachProton(w, N);
  const d = w.describe(w.component(N));
  ok(d.formula === 'NH₄⁺' && w.geometryOf(N).name === 'tetraedrisch', 'NH₄⁺ tetraedrisch: ' + d.formula);
}

// 4. HCl gibt Proton ab -> Cl- + H+
{
  const w = new K.World(); const at = build(w, 'hcl'); const Cl = at[0];
  const r = w.releaseProton(w.bonds[0]); w.applyPlan(r.plan);
  const d = w.describe([Cl]);
  ok(r.ok && d.formula === 'Cl⁻' && d.name === 'Chlorid-Ion' && d.charge === -1, 'HCl → Cl⁻: ' + d.formula);
  ok(w.ionConfig(Cl) && w.ionConfig(Cl).config === 'Argon', 'Cl⁻ mit Argonkonfiguration');
  const H = at[1];
  ok(w.isProton(H) && w.describe([H]).formula === 'H⁺', 'H wird zum Proton');
  ok(w.findOverlaps([H], K.REACH).length === 0, 'Proton liegt nach dem Abspalten nicht mehr am Cl');
  // H+ an H2O
  const W = build(w, 'h2o'); W.forEach(a => a.pos.add(new T.Vector3(10, 0, 0)));
  const O = W[0]; const lp = w.freePairs(O)[0];
  H.pos.copy(w.cloudCenter(O, lp));
  const ch = w.chooseBond(w.findOverlaps([H], K.REACH));
  ok(ch && w.makeBond(ch.a, ch.b, ch.pairs).ok && w.describe(w.component(O)).formula === 'H₃O⁺', 'Protolyse HCl + H₂O → Cl⁻ + H₃O⁺');
}

// 5. H2O gibt Proton ab -> OH-; OH- + H+ -> H2O
{
  const w = new K.World(); const at = build(w, 'h2o'); const O = at[0];
  const r = w.releaseProton(w.bonds[0]); w.applyPlan(r.plan);
  const d = w.describe(w.component(O));
  ok(d.formula === 'OH⁻' && d.name === 'Hydroxid-Ion' && d.complete, 'H₂O → OH⁻: ' + d.formula);
  const w2 = new K.World(); w2.load(JSON.parse(JSON.stringify(w.serialize())));
  ok(w2.describe(w2.component(w2.atom(O.id))).formula === 'OH⁻', 'OH⁻ übersteht Speichern/Laden');
  const p = attachProton(w, O);
  ok(p && w.describe(w.component(O)).formula === 'H₂O' && w.chargeOf(O) === 0, 'OH⁻ + H⁺ → H₂O');
}

// 6. Proton bindet nicht an CH4, Edelgas, Proton; whyNot erklärt
{
  const w = new K.World(); const at = build(w, 'ch4');
  const p = w.addProton(at[1].pos.clone().add(new T.Vector3(0.5, 0, 0)), new T.Quaternion());
  ok(w.findOverlaps([p], K.REACH).length === 0, 'kein Bindungspartner am CH₄');
  ok(/freies Elektronenpaar/.test(w.whyNot(p, at[1])), 'whyNot Proton/H: ' + w.whyNot(p, at[1]));
  const ne = w.addAtom('Ne', new T.Vector3(20, 0, 0));
  const p2 = w.addProton(new T.Vector3(20.6, 0, 0), new T.Quaternion());
  ok(w.findOverlaps([p2], K.REACH).length === 0 && /Edelgas/.test(w.whyNot(p2, ne)), 'kein Proton an Neon');
  const p3 = w.addProton(new T.Vector3(20.6, 0.3, 0), new T.Quaternion());
  ok(/abstoßen|stoßen/.test(w.whyNot(p2, p3)), 'zwei Protonen');
  // NaCl: kein Proton ans Ionengitter
  const w3 = new K.World(); const n = build(w3, 'nacl'); const cl = n[1];
  const p4 = w3.addProton(cl.pos.clone().add(new T.Vector3(0, 0.8, 0)), new T.Quaternion());
  ok(w3.findOverlaps([p4], K.REACH).length === 0, 'kein Proton an Cl⁻ im Ionengitter');
  // normale Bindungen unverändert
  const w4 = new K.World(); const o = w4.addAtom('O', new T.Vector3()); const h = w4.addAtom('H', w4.cloudCenter(o, 3).multiplyScalar(1.6));
  ok(w4.findOverlaps([h], K.REACH).length > 0, 'H• bindet weiterhin an einfach besetzte O-Wolke');
}

// 7. Konformation Ethan
{
  const w = new K.World(); const at = build(w, 'c2h6'); const cc = w.bonds.find(b => w.atom(b.a).sym === 'C' && w.atom(b.b).sym === 'C');
  const before = w.atoms.map(a => a.pos.clone());
  const c0 = w.conformation(cc);
  ok(c0 && c0.name, 'Ethan-Konformation: ' + c0.name + ' ' + c0.min + '°');
  const lens = () => w.bonds.map(b => w.atom(b.a).pos.distanceTo(w.atom(b.b).pos).toFixed(4)).join();
  const L0 = lens();
  const seen = new Set();
  for (let i = 0; i < 8; i++) { ok(w.rotateBond(cc, 1).ok, 'Drehung ' + (i + 1)); const c = w.conformation(cc); seen.add(c.name + ':' + c.min); }
  console.log('  gesehen:', [...seen].join(' | '));
  ok([...seen].some(s => s.startsWith('ekliptisch:0')) && [...seen].some(s => s.startsWith('gestaffelt:60')), 'gestaffelt 60° und ekliptisch 0° erreichbar');
  ok(lens() === L0, 'Bindungslängen bleiben beim Drehen');
  // Wolken der gedrehten Seite zeigen weiter auf ihre Partner
  let aligned = true;
  w.bonds.forEach(b => { const A = w.atom(b.a), B = w.atom(b.b); const d = w.cloudDir(A, b.ca[0]); const e = B.pos.clone().sub(A.pos).normalize(); if (d.dot(e) < 0.99) aligned = false; });
  ok(aligned, 'Bindungswolken bleiben ausgerichtet');
  // Ethen: keine Drehung
  const w2 = new K.World(); build(w2, 'c2h4'); const db = w2.bonds.find(b => b.order === 2);
  const r = w2.rotateBond(db, 1);
  ok(!r.ok && /Mehrfachbindung/.test(r.reason), 'Ethen: ' + r.reason);
  // Wasser O-H: nichts zu drehen
  const w3 = new K.World(); build(w3, 'h2o');
  ok(w3.conformation(w3.bonds[0]) === null, 'O–H im Wasser: keine Konformation');
}

// 8. Wasserstoffbrücke zwischen zwei Wassermolekülen
{
  const w = new K.World(); const A = build(w, 'h2o'); const B = build(w, 'h2o');
  const O1 = A[0], H1 = A[1], O2 = B[0];
  ok(w.hydrogenBonds().length === 0, 'übereinander gebaute Moleküle: Ausgangslage geprüft (' + w.hydrogenBonds().length + ')');
  const axis = H1.pos.clone().sub(O1.pos).normalize();
  const lp = w.freePairs(O2)[0];
  const q = new T.Quaternion().setFromUnitVectors(w.cloudDir(O2, lp), axis.clone().negate());
  B.forEach(a => { a.pos.sub(O2.pos).applyQuaternion(q).add(O2.pos); a.quat.premultiply(q); });
  const shift = H1.pos.clone().add(axis.clone().multiplyScalar(1.2)).sub(w.cloudCenter(O2, lp));
  B.forEach(a => a.pos.add(shift));
  const hb = w.hydrogenBonds();
  ok(hb.length === 1 && hb[0].h === H1 && hb[0].acceptor === O2, 'eine Wasserstoffbrücke O–H···O');
  B.forEach(a => a.pos.add(axis.clone().multiplyScalar(2)));
  ok(w.hydrogenBonds().length === 0, 'bei großem Abstand keine Brücke');
  // CH4 neben Wasser: keine Brücke
  const w2 = new K.World(); const M = build(w2, 'ch4'); const W2 = build(w2, 'h2o');
  const hC = M[1], ax2 = hC.pos.clone().sub(M[0].pos).normalize();
  const lp2 = w2.freePairs(W2[0])[0];
  const q2 = new T.Quaternion().setFromUnitVectors(w2.cloudDir(W2[0], lp2), ax2.clone().negate());
  W2.forEach(a => { a.pos.sub(W2[0].pos).applyQuaternion(q2).add(W2[0].pos); a.quat.premultiply(q2); });
  const s2 = hC.pos.clone().add(ax2.clone().multiplyScalar(1.2)).sub(w2.cloudCenter(W2[0], lp2));
  W2.forEach(a => a.pos.add(s2));
  ok(w2.hydrogenBonds().filter(h => h.h === hC).length === 0, 'C–H bildet keine Wasserstoffbrücke');
}

// 9. Aufgaben mit Ladung
{
  const Tk = K.Tasks;
  const w = new K.World(); const at = build(w, 'h2o'); attachProton(w, at[0]);
  const fb = Tk.fromBoard(w, w.atoms, {});
  ok(fb.goal.q === 1, 'Aufgabenziel speichert Ladung');
  const t = Tk.sanitize({ title: 'Oxonium', goal: fb.goal, start: ['O', 'H', 'H', 'H+'] });
  ok(t && t.goal.q === 1 && t.start.indexOf('H+') >= 0, 'sanitize behält Ladung und Startproton');
  ok(Tk.check(w, t).ok, 'H₃O⁺ löst die Aufgabe');
  const w2 = new K.World(); build(w2, 'h2o'); w2.addAtom('H', new T.Vector3(9, 0, 0));
  ok(!Tk.check(w2, t).ok, 'H₂O + H löst sie nicht');
  const tn = Tk.sanitize({ title: 'Wasser', goal: Tk.fromBoard(w2, w2.component(w2.atoms[0]), {}).goal });
  ok(tn.goal.q === undefined, 'neutrale Aufgaben ohne Ladungsfeld');
}

// 10. Beispiele für geladene Teilchen
{
  [['h3o', 'H₃O⁺', 1, 'trigonal-pyramidal'], ['nh4', 'NH₄⁺', 1, 'tetraedrisch'], ['oh', 'OH⁻', -1, null]].forEach(([id, formula, q, geo]) => {
    const w = new K.World(); const at = build(w, id); const d = w.describe(at);
    ok(d.formula === formula && d.charge === q && d.complete && (!geo || w.geometryOf(at[0]).name === geo), 'Beispiel ' + id + ': ' + d.formula + ', Ladung ' + d.charge);
  });
}

// 11. Eingebaute Aufgaben: Beispiel-IDs gültig, erweiterte Aufgaben lösbar
{
  const Tk = K.Tasks;
  const ids = new Set(K.EXAMPLES.map(e => e.id));
  ok(Tk.DISCUSS.every(t => !t.example || ids.has(t.example)), 'alle Diskussionskarten verweisen auf vorhandene Beispiele');
  ok(Tk.BUILTIN.concat(Tk.DISCUSS).every(t => Tk.sanitize(t)), 'alle eingebauten Aufgaben überstehen sanitize');
  const adv = Tk.BUILTIN.filter(t => t.adv);
  ok(adv.length === 4 && Tk.DISCUSS.filter(t => t.adv).length === 3, 'vier erweiterte Aufgaben, drei erweiterte Diskussionskarten');
  const solve = { 'Oxonium-Ion bauen': 'h3o', 'Ammonium-Ion bauen': 'nh4', 'Protolyse: HCl und Wasser': 'h3o', 'Hydroxid-Ion': 'oh' };
  adv.forEach(t => {
    const w = new K.World(); build(w, solve[t.title]);
    if (t.title.startsWith('Protolyse')) { const c = build(w, 'hcl'); c.forEach(a => a.pos.x += 8); w.releaseProton(w.bondsOf(c[0])[0]); }
    ok(Tk.check(w, t).ok, 'Aufgabe „' + t.title + '“ lösbar');
    const w2 = new K.World(); build(w2, t.goal.q > 0 ? (t.goal.c.N ? 'nh3' : 'h2o') : 'h2o');
    ok(!Tk.check(w2, t).ok, 'Aufgabe „' + t.title + '“ nicht durch das neutrale Molekül gelöst');
  });
}

console.log(fails ? fails + ' Fehler' : 'Alle Tests bestanden');
process.exit(fails ? 1 : 0);
