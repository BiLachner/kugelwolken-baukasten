# Änderungen am Kugelwolken-Baukasten

## Version 0.11.0 (13.11.2026)

Übernommen aus einer Testversion von Birgit Lachner.

### Neu

- **Atomkugel** (Anzeige → „Atomkugel“, Taste U): schaltet zwischen *aus*, *durchsichtig* und *undurchsichtig* um. Die durchsichtige Kugel zeigt, dass die Wolken innerhalb des Atoms liegen. Die undurchsichtige Kugel hat die üblichen Elementfarben (H weiß, C grau, N blau, O rot, Cl grün …) und dient nur zum Betrachten: Bindungen lassen sich dann nicht bilden, ändern oder lösen. Bei eingeschalteter Kugel sind die Auswahlkreise aus.
- **Schatten** (Anzeige → „Schatten“, Taste B, standardmäßig an): Jedes Atom wirft einen weichen Schatten auf das Bodengitter. Je höher es schwebt, desto größer und blasser ist der Schatten. Im gespeicherten Bild (PNG) fehlt er.
- **Gewähltes Atom:** Das Elementsymbol hat einen blauen statt eines schwarzen Rands.

### Geändert

- **Seitenleiste rechts** mit den Reitern „Anzeige“ und „Elemente“. Die Anzeige-Schalter stehen dort statt im Menü der Werkzeugleiste, das Periodensystem statt in der Leiste unter der Fläche. Es ist höchstens ein Bereich offen. Hilfe- und Aufgabenkarte stehen links.
- **Ruhigere Oberfläche:** kompaktere Knöpfe, weniger Fettdruck, flachere Schatten, hellere Rahmen. Aktive Knöpfe sind getönt statt schwarz gefüllt. Tastenkürzel stehen in kleinen Kästchen. Im Periodensystem steht nur das Symbol, der Name erscheint als Tooltip.
- **Auswahl per Klick:** Ein Klick auf Symbol oder Kern wählt immer das Atom, auch ein H, das ganz in der Bindungswolke steckt. Sonst zählt, was unter dem Zeiger vorne sichtbar ist. So trifft man eine Bindung überall auf ihrer Wolke.

## Version 0.10.1 (11.11.2026)

### Verbessert

- **Freie H- und He-Atome:** Die einzige Wolke liegt jetzt kugelsymmetrisch um den Kern, das Elementsymbol steht in der Mitte. Bisher saß der Kern am Rand der Wolke, als gäbe es schon eine Bindungsrichtung. Sobald H eine Bindung eingeht, sieht alles aus wie bisher. Löst man die Bindung, liegt die Wolke wieder mittig.
- **Li⁺ und Be²⁺:** Die verbleibende Heliumschale liegt ebenfalls mittig um den Kern. Dadurch rücken diese Ionen in Ionenverbindungen etwas näher an ihre Partner. Na⁺, Mg²⁺ und Al³⁺ (Neonschale mit vier Wolken) bleiben unverändert.
- Ein freies H-Atom kann aus jeder Richtung an einen Partner herangezogen werden.

## Version 0.10.0 (22.10.2026)

### Neu: erweiterte Funktionen

Alle neuen Werkzeuge sind ausgeblendet, bis man sie unter **„Anzeige“ → „Erweitert“** einschaltet. Für den Einstieg bleibt die App unverändert.

- **Protonen:** „H⁺ Proton“ neben dem Periodensystem. Ein Proton bindet an ein freies Elektronenpaar (H₃O⁺, NH₄⁺). „H⁺ abspalten“ in der Bindungsleiste gibt aus einer X–H-Bindung ein Proton ab, das Elektronenpaar bleibt beim Partner (HCl → Cl⁻, H₂O → OH⁻). Ladungen und formale Ladungen erscheinen in Infokarte und Lewis-Formel.
- **Wasserstoffbrücken:** Schalter „H-Brücken“ unter „Anzeige“. Eine Punktlinie zeigt Brücken zwischen H an N/O/F und einem freien Elektronenpaar von N/O/F eines anderen Moleküls.
- **Konformation:** Drehen um Einfachbindungen in 15°-Schritten (↺ ↻), Anzeige „gestaffelt“ oder „ekliptisch“, Newman-Projektion in der Bindungsleiste, Knopf „Blick entlang“. Um Mehrfachbindungen lässt sich nicht drehen.
- **Beispiele:** neue Kategorie „Geladene Teilchen“ (H₃O⁺, NH₄⁺, OH⁻).
- **Aufgaben:** neues Set „Erweitert: Protonen, H-Brücken, Konformation“ mit vier Bauaufgaben (Oxonium-Ion, Ammonium-Ion, Protolyse HCl + H₂O, Hydroxid-Ion) und drei Diskussionskarten. Eine solche Aufgabe schaltet „Erweitert“ beim Start selbst ein, auch wenn sie über einen Code oder Link geteilt wurde. Selbst erstellte Aufgaben können eine Ladung verlangen.

### Verbessert

- Eine gewählte Bindung bleibt gewählt, während man ihr Molekül verschiebt oder dreht.
- Handy: Die Bindungsleiste nutzt die volle Breite, statt die Knöpfe untereinander zu stapeln. Die Kopfzeile zeigt die Knöpfe als Symbole, damit der Titel ganz sichtbar bleibt.
- Durchgehend „du“ als Anrede.
- „gesättigt“ ersetzt durch „keine offene Bindungsstelle“.
- Hinweise zu geplanten Funktionen aus der Hilfe entfernt (siehe Entwicklungsplan.md).

### Lizenz

- Eigene Bestandteile stehen jetzt unter CC BY-NC-ND 4.0 statt MIT. Eingebettete Bibliotheken und Schriften behalten ihre Lizenzen.

## Version 0.9.0

- Ausgangsstand.
