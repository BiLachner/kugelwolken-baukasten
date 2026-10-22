# Entwicklungsplan Kugelwolken-Baukasten

Stand: Version 0.10.0, 22.10.2026 (Änderungen im Einzelnen: CHANGELOG.md)

## Umgesetzt (unter „Anzeige“ → „Erweitert“)

- [x] **Protonen:** H⁺ bindet an ein freies Elektronenpaar (H₃O⁺, NH₄⁺); „H⁺ abspalten“ bei X–H-Bindungen (HCl → Cl⁻, H₂O → OH⁻); Aufgaben können eine Ladung verlangen
- [x] **Wasserstoffbrücken:** Punktlinie zwischen H an N/O/F und einem freien Elektronenpaar von N/O/F eines anderen Moleküls
- [x] **Konformation:** Drehung um Einfachbindungen in 15°-Schritten, Anzeige gestaffelt/ekliptisch, Newman-Projektion, „Blick entlang“; Mehrfachbindungen sind gesperrt
- [x] **Unterrichtsmaterial dazu:** Beispiele „Geladene Teilchen“, Aufgabenset mit vier Aufgaben und drei Diskussionskarten
- [x] **Automatische Tests** in `tests/` (Chemie in Node, Oberfläche im Browser)

## Geplant

- [ ] **Realer Bindungswinkel:** in der Infokarte neben dem Modellwinkel (z. B. H₂O: Modell 109,5°, gemessen 104,5°)
- [ ] **Ringe:** ringförmige Moleküle schließen, z. B. Cyclohexan; Benzol als Modellgrenze (Diskussionskarte)
- [ ] **Perioden 4 und 5, nur Hauptgruppen:** z. B. K, Ca, Br, I
- [ ] **Metallbindung:** Darstellung im Modell; bisher meldet die App nur, dass sie nicht darstellbar ist
