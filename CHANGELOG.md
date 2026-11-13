# Änderungen am Kugelwolken-Baukasten

## Unveröffentlicht

### Modelltreue (Abgleich mit der Rostocker Beschreibung des KWM)

- **Winkel in der Infokarte so, wie das Modell sie baut:** Die Wolken bleiben auch bei Mehrfachbindungen tetraedrisch. Bei Ethen steht deshalb jetzt „H–C–H 109,5°, C–C–H 125,3°“ statt „120°“. Wasser, Methan, CO₂ und Ethin sind unverändert.
- **Bindungswolken bleiben Kugelwolken** (Beitrag von Birgit Lachner): Eine Bindungswolke hat die Dicke der beiden einfach besetzten Wolken, aus denen sie entsteht, und umschließt beide. Bisher war sie lang und schmal und reichte über beide Kerne hinaus. Doppel- und Dreifachbindungen bestehen aus zwei bzw. drei solchen Wolken dort, wo sich die tetraedrischen Wolken der Atome treffen. In den Schulquellen zum KWM sind alle Wolken kugelförmig, gebogene Bananenbindungen stammen aus dem Orbitalmodell.
- **H steckt in der Bindungswolke:** Bei einer Bindung mit H reicht die Wolke vom Partner bis knapp über den H-Kern hinaus. Das H sitzt im äußeren Ende der Wolke.
- **H-Atomkugel kleiner:** Ein gebundenes H hatte als Atomkugel fast die Größe eines C-Atoms. Jetzt sind Atomkugel, Auswahlkreis und Schatten bei H, He, Li⁺ und Be²⁺ immer gleich groß, gebunden wie frei (H : C etwa 0,57). Bei undurchsichtiger Atomkugel sind die Bindungswolken ausgeblendet.
- **Atomkugel standardmäßig durchsichtig:** Die Hülle der äußeren Energiestufe ist von Anfang an zu sehen, wie in der Rostocker Darstellung („jede Energiestufe umschließt die tieferen“). Gespeicherte Einstellungen bleiben erhalten.
- **Ziehen an einer Bindungswolke bewegt das Molekül** (bzw. dreht oder hebt es, je nach Modus). Bisher drehte sich dabei die Ansicht, obwohl „Bewegen“ gewählt war. Weil ein Molekül im KWM großteils aus Bindungswolken besteht, passierte das sehr oft. Antippen ohne Ziehen wählt die Bindung wie bisher, die Ansicht dreht man auf der freien Fläche.
- Die Hilfe erklärt unter „Farben“ die durchsichtige Hülle und die Mehrfachbindungen. Die inneren Stufen bleiben bewusst gelb (Rostock nennt Grün als optionale Konvention).

### Seitenleiste und Bedienung

- Der Reiter „Elemente“ der Seitenleiste heißt jetzt **„Atome“**, sein Bereich „Atome hinzufügen“. Der Tooltip lautet „Periodensystem: Atome hinzufügen“. So ist klar, dass man dort Atome holt. Die Hinweise bei leerer Fläche verweisen auf den neuen Reiter statt auf eine Leiste „unten“.
- Der Reiter „Anzeige“ heißt jetzt **„Darstellung“** und hat ein Auge als Symbol. So ist er nicht mehr mit dem Menü „Ansicht“ zu verwechseln.
- **Neuer Reiter „Erweitert“** unter „Atome“. Er enthält den Schalter „Erweiterte Funktionen“ mit einer kurzen Erklärung, dazu „H⁺ Proton hinzufügen“ und „H-Brücken“. Diese beiden sind immer zu sehen und werden erst mit dem Schalter nutzbar. Der Schalter steuert wie bisher auch die Bindungsleiste sowie die Beispiele und Aufgaben zu geladenen Teilchen. Der Eintrag „Drehen um Einfachbindungen“ klappt eine kurze Anleitung zur Newman-Projektion auf. „Mit Ethan ausprobieren“ holt Ethan, wählt die C–C-Bindung und schaltet die erweiterten Funktionen bei Bedarf selbst ein.
- „Kreisen“ heißt jetzt **„Ansicht kreisen lassen“** und steht im Menü „Ansicht“, weil es die Kamera bewegt.
- **Ein/Aus-Einträge mit Kippschalter:** Ob ein Eintrag eingeschaltet ist, zeigt jetzt ein Kippschalter und nicht mehr ein leicht getönter Hintergrund.
- **Atomkugel** als Umschalter mit drei Stellungen (aus | durchsichtig | undurchsichtig). Die Taste U schaltet weiter der Reihe nach um.
- **Einheitliche Pfeile zum Ein- und Ausklappen:** Infokarte und Aufgabenkarte haben denselben Pfeilknopf. Er zeigt nach unten, wenn die Karte offen ist, und nach rechts, wenn sie zu ist.
- Die eingeklappte Infokarte zeigt „Nichts ausgewählt.“ bzw. „Die Fläche ist leer.“ und ist nicht mehr leer.

- **Start immer mit dem Wasser-Set:** Jeder neue Aufruf beginnt mit einem O und zwei H, die gut sichtbar zwischen Hilfekarte und Periodensystem liegen (auch auf dem Tablet). Die Fläche kommt nur beim Neuladen im selben Tab zurück, sonst blieben alte Versuche auf der Fläche liegen, auch nach dem Leeren des Browser-Caches. Einstellungen wie Atomkugel und Elektronen bleiben wie bisher gespeichert.
- **Atomkern als dunkler Punkt mit „+“** (aus der Testversion von Birgit Lachner): Der Kern ist als positiv geladen zu erkennen und unterscheidet sich klar von den Elektronen. Er ist etwas kleiner als bisher und liegt in den Wolken.
- **Elektronen als dunkle Kügelchen in der Wolke** (wie in der Testversion von Birgit Lachner): Die Wolke liegt halbdurchsichtig darüber und tönt sie, Atome davor verdecken sie. Bisher waren es weiße Kringel, die über allem lagen. Bei einem freien H-Atom sitzt das Elektron neben dem Kern und nicht mehr auf dem Symbol.
- **Mauszeiger zeigt den Modus:** Über einem Atom oder einer Bindung und beim Ziehen daran zeigt der Zeiger, was passiert: vier Pfeile bei „Bewegen“, ein Drehpfeil bei „Drehen“, ein Hoch-runter-Pfeil bei „Höhe“ (auch mit rechter Maustaste bzw. Umschalttaste). Auf der freien Fläche bleibt die Hand zum Drehen der Ansicht.

### Layout

- **Keine Überdeckung mit der Bindungsleiste:** Die Seitenleiste endet über der Bindungsleiste, ein langer Bereich scrollt.
- **Handy:** Ein Bereich der Seitenleiste öffnet sich als Blatt von unten. Werkzeugleiste und Reiter bleiben frei.
- **Werkzeugleiste:** „Bewegen“, „Drehen“ und „Höhe“ bilden eine Gruppe, in der genau einer aktiv ist. „Einrasten“ zeigt seinen Zustand mit einem Punkt. So wirkt es nicht mehr wie ein zweiter aktiver Modus. Die Untermenüs „Löschen“ und „Ansicht“ nutzen denselben Pfeil wie die Karten.
- **Hinweiszeile unten mittig:** Sie steht über Bindungsleiste, Infokarte bzw. offenem Blatt und wird nicht mehr von Menüs verdeckt.
- **Neue Atome und Beispiele** landen um die Blickmitte herum, möglichst sichtbar und nicht hinter Karten oder Leisten.
- Reste des früheren Periodensystem-Docks unter der Fläche („Ausblenden“) entfernt.

## Version 0.11.1 (13.11.2026)

- **Neue Lizenz: CC BY-NC-SA 4.0** statt CC BY-NC-ND 4.0. Veränderte Fassungen dürfen jetzt weitergegeben werden, wenn sie nicht kommerziell sind und unter derselben Lizenz stehen.
- Der Baukasten wird ab jetzt in einem eigenen, öffentlichen Repository entwickelt.

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
