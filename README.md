# quark
Fundamental project template

> Clone, fork or use as a template repository for creating your next JavaScript project.

### For a **TypeScript** version go to:
[🔱 TypeScript branch](https://github.com/AtomicBuilders/quark/tree/TypeScript-version)


```terminal
git clone https://github.com/AtomicBuilders/quark your-project
cd your-project
npm install
npm test
npm start
```

## 🎯 Motivation

Avoid start from an empty repository.

Have a template to create _JavaScript_ repositories with a project already configurated.

A **boilerplate** ready to apply clean code techniques and testing.


## 🛠 Tools

### 📋  GitHub Issues

Use GitHub issues for tracking _User Stories_ and _developer tasks_.

- Each issue may be labeled with
  - categories: feature, bug, test, refactor, dependencies, chore
  - priorities: must, should, could, wont [MoSCoW priority](https://en.wikipedia.org/wiki/MoSCoW_method)
  - milestones: may be epics or releases
  - project: a Kanban automated dashboard to track issue workflow

> [GitHub Projects and Tools](https://www.notion.so/albr/GitHub-Projects-and-Tools-59f285b78acf4ff9b84076c526bafc03)

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
- Transforms `esm` modules

> Use this snippets  `.vscode\js-snippets.json` as an inspiration to create yours


### 🤖 Scripts

```json
  "scripts": {
    "start": "node src/main",
    "test": "jest",
    "test:watch": "npm test -- --watch",
    "format": "prettier --write \"./**/*.{js,json}\"",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin master",
    "updates": "ncu -u"
  }
```

### 🧩 VS Code Extensions

Recommendations

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [html tag wrapper](https://marketplace.visualstudio.com/items?itemName=hwencc.html-tag-wrapper)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [JavaScript Booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
- [Prettier](https://github.com/prettier/prettier-vscode)
- [Spell Right](https://marketplace.visualstudio.com/items?itemName=ban.spellright)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)


### 👽 Extra

#### 🔧 Settings

> See User and WorkSpace configurations at `.vscode` folder as an inspiration for yours

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

## 👨 Created by Alberto Basalo

[@albertobasalo](https://twitter.com/albertobasalo)



