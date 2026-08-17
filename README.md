# Double-Entry Table Generator

Generates a double-entry table from a set of nodes (letters) and the distances between them. Node letters and their routes are defined in `floyd.js`, and the table renders in the browser as an HTML page.

## How it works

- Nodes are labeled with letters (`A`, `B`, `C`, ...).
- Routes are defined as `{ from, to, dist }` objects, each meaning "from node `from` to node `to`, distance `dist`".
- On load, the script builds a `Node` for each letter, attaches its outgoing routes, then fills a matrix (`Table`) where row/column intersections hold the distance between two nodes (`*` when there's no direct route).
- The matrix renders into an HTML table (`archivo.html`), and a distance log prints below it.

## Usage

1. Open `archivo.html` in a browser.
2. Edit the `letters` and `destinations` arrays at the top of `floyd.js` to change the nodes and routes.
3. Reload the page to see the updated table.

## Files

- `floyd.js` — core logic: builds the node graph and renders the table.
- `archivo.html` — page markup (Bootstrap 4) that hosts the table.
- `package.json` — project metadata.
