# Tests

Zwei Testskripte prüfen die App direkt aus der HTML-Datei. Sie laufen aus dem Projektordner.

## Chemie (Engine)

```
node tests/engine.test.js
```

Lädt three.js, Regel-Engine, Lewis-Formel und Aufgaben aus der HTML-Datei und prüft unter anderem Ladungen, Ionen, Protonen, Konformation, Wasserstoffbrücken und die eingebauten Aufgaben. Braucht nur Node.js.

## Oberfläche (Browser)

```
node tests/ui.test.js [HTML-Datei] [Ordner für Screenshots]
```

Bedient die App in einem Headless-Chromium: Schalter, Knöpfe, Maus-Ziehen, Aufgaben, Speichern über Neuladen, Handybreite. Ohne Screenshot-Ordner werden keine Bilder gespeichert.

Benötigt [Playwright](https://playwright.dev) mit Chromium. Ist Playwright nicht normal installiert, gibt `PLAYWRIGHT_MODULE` den Pfad zum Modul an:

```
PLAYWRIGHT_MODULE=/pfad/zu/node_modules/playwright node tests/ui.test.js
```

Playwright verlangt Node.js 20 oder neuer. Mit Node.js 18 lässt sich die Versionsprüfung so umgehen (bisher ohne Probleme):

```
node -e "Object.defineProperty(process.versions,'node',{value:'20.0.0'}); process.argv.splice(1,0,'x'); require('./tests/ui.test.js')"
```

Beide Skripte geben jede Prüfung als `ok:` oder `FEHLER:` aus und enden mit Exit-Code 0, wenn alles bestanden ist.
