# quark

Fundamental **TypeScript** project template

> Clone, fork or use as a template repository for creating your next **TypeScript** project.

```terminal
git clone https://github.com/AtomicBuilders/quark/ your-project
cd your-project
npm install
```

## 🎯 Motivation

Avoid start from an empty repository.

Have a template to create _TypeScript_ repositories with a project already configured.

A **boilerplate** ready to apply clean code techniques and testing.

## ⚙ Workflows

### 👨‍💻 Dev Workflow

While developing, make sure to install the recommended extensions for a better dev experience.

#### Testing

Run `npm run test:watch` it will run test after each change. Ideal for TDD or testing just in time.

#### Running

To run your code without having to build it just execute `npm run dev`

#### Updating

To keep your dependencies up to date use `npm run updates` and it will check for updates. Then cherry pick what you want to update.

### 🚚 Deploy Workflow

#### Testing

Run `npm run test` it will run all test once and stops. Default for CI/CD most common environments.

If you want also the coverage report then use `npm run test:coverage` .

#### Release

If you want to tag your work as to keep track of your releases, then there is a script for you: `npm run release`. It will:

- update the version number
- update the change log file.
- push and tag changes

#### Build and run

The standard `npm start` will run de build process before, so you can deploy the source code alone.

This way you can automate the deployment with the former release script.

### 🤖 Scripts

Here you have a recap of the available scripts

```json
  "scripts": {
    "start": "node ./dist/main.js",
    "test": "jest",
    "build": "tsc -p tsconfig.json",
    "dev": "ts-node ./src/main.ts",
    "test:dev": "jest --watch",
    "test:coverage": "jest --coverage",
    "ts-node": "ts-node",
    "format": "prettier --write \"./**/*.{ts,json}\"",
    "lint": "eslint src --ext .ts",
    "lint:fix": "npm run lint -- --fix",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin main",
    "update": "ncu -u"
  }
```

## 🛠 Tools

### 📋 GitHub Issues

Use GitHub issues for tracking _User Stories_ and _developer tasks_.

### 📦 Commits and release

- Use [standard-version](https://www.npmjs.com/package/standard-version) to produce a changelog file from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### 💅 Code style with Prettier

- Installed and configured prettier

> Recommended [prettier extension](https://github.com/prettier/prettier-vscode)

### 📐 Code linting with esLint

- Installed and configured eslint to work with prettier

> Recommended [esLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 🧪 Code tested with Jest

- Installed and configured **jest** to run specs
- Configured to conform with **eslint**
- Uses `ts-jest` to work natively with **TypeScript**

> Use this snippets `.vscode\ts-snippets.json` as an inspiration to create yours

## 🛠 VS Code

### 🧩 Extensions recommendations

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier](https://github.com/prettier/prettier-vscode)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### 👽 Extra

#### 🔧 Settings and Snippets

> See User and WorkSpace configurations at `.vscode` folder as an inspiration for yours
> See also `.vscode\ts-snippets.json` to use in your TypeScript snippets for easy testing

#### ⌨ VS Code Shortcuts

TOP 10

- `F1` :command list
- `CTRL+P` : file
- `CTRL+T` : search code
- `CTRL+K CTRL+Z` : code comment
- `CTRL+K CTRL+U` : uncomment code
- `F12` : go to definition
- `CTRL+Ñ` : show hide terminal
- `CTRL+B`: show hide navigation bar
- `CTRL+K S` : save al files
- `ALT+up|dawn` : move line

---

<footer>
  <h3>By Alberto Basalo</h3>
  <p>
   <a href="https://twitter.com/albertobasalo" target="blank"><img src="https://img.shields.io/twitter/follow/albertobasalo?logo=twitter&style=for-the-badge" alt="albertobasalo" /></a>
  </p>
</footer>
