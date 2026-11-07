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
  <img src="docs/demo.gif" alt="Animated demo: a cursor starts a class diagram, adds and types into boxes, moves a box, edits a row, then starts an ER diagram" width="800">
</p>

## About

Many diagram tools make simple work slow. You drag shapes from a panel, double-click to type and memorize shortcuts. Boxline removes those steps, so you click where you want a box and start typing.

> [!NOTE]
> Boxline is in early development. Connecting lines and saving aren't available yet, so anything you draw is lost when you refresh or leave the page.

## Features

- **UML class and ER diagrams:** pick one on the landing page, and the editor opens right away.
- **Click to add:** click an empty spot to add a box with the cursor ready for typing.
- **Fast typing:** press Enter to add a row, and press Enter on an empty row to finish.
- **One-click editing:** click any text once to change it.
- **Easy moving:** drag a box from anywhere, including its text.
- **Tidy boxes:** boxes grow to fit their text, and blank boxes remove themselves.
- **Light and dark themes:** the theme follows your system setting.
- **Private by design:** there's no account, database or backend.

## How to use

1. Press **New class diagram** or **New ER diagram**.
2. Click an empty spot on the canvas and type a name.
3. Press **Enter** to add a row, then keep typing.
4. Press **Enter** on an empty row to finish the box.
5. Drag a box to move it, or click its text to change it.
6. Remove a box with its **×** button or the **Delete** key.

## Set up locally

### Requirements

- [Node.js](https://nodejs.org) 20.9 or newer
- npm, which comes with Node.js
- [Git](https://git-scm.com)
- A modern browser such as Chrome or Edge

### Install and run

```bash
git clone https://github.com/YOUR-USERNAME/boxline.git
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

Boxline has no accounts, database or API routes, and it doesn't collect your diagrams. The build downloads its fonts from Google Fonts and includes them in the site, so people using Boxline don't contact Google for them.

## Built with

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [React Flow](https://reactflow.dev)

## License

Boxline is released under the [MIT License](LICENSE).
