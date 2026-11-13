<p align="center">
  <img src="public/logo.svg" alt="Boxline logo" width="72" height="72">
</p>

<h1 align="center">Boxline</h1>

<p align="center">
  <strong>Make UML class and ER diagrams with a click and a drag.</strong><br>
  Free, open source and private by design. No sign-up, no side panels and no shortcuts to learn.
</p>

<p align="center">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-0b5ed7"></a>
  <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-16202b">
  <img alt="TypeScript 6" src="https://img.shields.io/badge/TypeScript-6-16202b">
  <img alt="Pull requests welcome" src="https://img.shields.io/badge/PRs-welcome-0b5ed7">
</p>

<p align="center">
  <a href="https://boxline-app.vercel.app"><strong>Try Boxline</strong></a>
</p>

<p align="center">
  <img src="docs/demo.gif" alt="Animated demo: a cursor starts a class diagram, chooses to save it, adds and types into boxes, moves a box, edits a row, connects two boxes, then starts an ER diagram" width="800">
</p>

## About

Many diagram tools make simple work slow. You drag shapes from a panel, double-click to type and memorize shortcuts. Boxline removes those steps, so you click where you want a box and start typing.

## Features

### Start a diagram

Pick a UML class or ER diagram, then choose whether to save it. Each new diagram asks once.

<img src="public/guides/start-a-diagram.gif" alt="A cursor presses New class diagram, then Yes, save it, and the editor opens" width="640">

### Add and type

Click an empty spot to add a box with the cursor ready. Press Enter for each row, and on an empty row to finish.

<img src="public/guides/add-and-type.gif" alt="A cursor clicks the canvas, and a Customer box is typed with two rows" width="640">

### Move and edit

Drag a box from anywhere to move it, and click any text once to change it. Boxes grow to fit their text, and blank boxes remove themselves.

<img src="public/guides/move-and-edit.gif" alt="A cursor drags an Order box, then changes one of its rows" width="640">

### Connect boxes

Drag from a box's edge to another box, or to an empty spot to make a new connected box. Lines choose their own route and follow when you move a box.

When one box has several lines, each line leaves from its own spot along the side, ordered by where the other box is, so lines don't pile on top of each other. Boxes above or below connect through their top and bottom, and boxes side by side connect through their sides.

<img src="public/guides/connect-boxes.gif" alt="A cursor drags a line from Customer to Order, then drags another line to an empty spot to create an Address box" width="640">

### Line types and labels

Click a line to choose association, inheritance, implementation, dependency, aggregation or composition. Add labels such as `1`, `places` and `0..*`. Type `+`, `-`, `#` or `~` before a row, and rows with `()` move into a methods section.

<img src="public/guides/line-types.gif" alt="A line between Dog and Animal is changed to inheritance, then composition, and given an end label" width="640">

### Keys and relationships

In ER diagrams, type `PK` or `FK` after a column to mark its key. Click a line to choose exactly one, zero or one, one or many, or zero or many at each end.

<img src="public/guides/er-keys.gif" alt="A customers table is typed with a primary key, then the line to orders is set to zero or many" width="640">

### Auto-sync to your file

After you save, every change syncs to your file about a second after you stop. You can see the file in File Explorer, and a browser backup protects recent changes.

<img src="public/guides/auto-sync.gif" alt="A row is edited, and the top bar changes from Syncing to Synced" width="640">

### Come back later

Press **Continue** on the landing page to reopen your last diagram, or **Open a saved file** to open another one.

<img src="public/guides/come-back.gif" alt="A cursor presses Continue on the landing page, and the saved diagram opens" width="640">

### Rename a diagram

Click the name in the top bar and type a new one. A save window asks you to confirm it, and warns you if that name is already taken.

<img src="public/guides/rename.gif" alt="A cursor changes the diagram name in the top bar to Shop classes" width="640">

### Export an image

Press **Export** and choose a PNG or SVG image. Exports always use the light theme with a white background, and leave out editing handles.

<img src="public/guides/export.gif" alt="A cursor presses Export, then PNG image, and the exported picture of two connected boxes appears" width="640">

### Undo, align and tidy

Press **Ctrl+Z** to undo and **Ctrl+Y** to redo, or use the buttons in the top bar. Boxes snap into line as you drag them, and the zoom bar shows the zoom level and fits the diagram to the screen.

**Tidy up** arranges the whole diagram in one click, with even spacing between layers:

- Parent classes go above their children for inheritance and implementation.
- For other lines, the box you drew from goes above the box you drew to, so a class with many relationships sits on top like a tree.
- In ER diagrams, the table you drew from goes above the table you drew to.

You can undo a tidy-up with **Ctrl+Z**.

<img src="public/guides/undo-and-tidy.gif" alt="A cursor presses Tidy up to arrange three boxes, then undoes and redoes it" width="640">

### Also included

- **Built-in help:** a short guide appears before your first diagram, and the **Help** button reopens it at any time.
- **Outside changes:** Boxline reloads a file that changes elsewhere, and asks which version to keep if you've changed it too.
- **Light and dark themes:** the theme follows your system setting, or choose light or dark with the theme button.
- **Private by design:** there's no account, database or backend.

> [!IMPORTANT]
> Auto-sync needs a browser with file access, such as Chrome or Edge. Other browsers can draw diagrams but can't save them yet.

## Set up locally

### Requirements

- [Node.js](https://nodejs.org) 20.9 or newer
- npm, which comes with Node.js
- [Git](https://git-scm.com)
- Chrome or Edge, for auto-sync

### Install and run

```bash
git clone https://github.com/FlemingJohn/boxline.git
cd boxline
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npx serve out
```

The build creates a static site in the `out` folder, and `serve` prints the local address to open. The site doesn't need a server of its own, so you can host that folder on any static hosting service.

### Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the static site into `out` |
| `npm run lint` | Checks the code with ESLint |

## Contributing

Bug reports, ideas and pull requests are welcome.

1. Fork the repository and create a branch from `main`.
2. Make your change and try it in the browser.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request that explains what changed and why.

Please follow the project's code style:

- Keep each type, component and hook in its own file, named after what it holds.
- Use plain, descriptive names with no abbreviations.
- Don't add code comments. Clear names should explain the code.
- Don't use inline CSS. Use CSS Modules and the design tokens in `src/styles/theme.css`.
- Keep each commit to one file, with a subject line such as `feat: add the item type`.

## Privacy

Boxline has no accounts, database or API routes, and it doesn't collect your diagrams. Your diagrams stay in the files you choose, with temporary backups in your browser. The build downloads its fonts from Google Fonts and includes them in the site, so people using Boxline don't contact Google for them.

## Built with

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [React Flow](https://reactflow.dev)
- [Lucide](https://lucide.dev)
- [idb-keyval](https://github.com/jakearchibald/idb-keyval)
- [html-to-image](https://github.com/bubkoo/html-to-image)
- [dagre](https://github.com/dagrejs/dagre)

## License

Boxline is released under the [MIT License](LICENSE).
