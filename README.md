# quark
Fundamental project template

> Clone or fork to use like a template for creating your next js/ts project.

## Tools

### GitHub Issues

Use GitHub issues for tracking _User Stories_ and _developer tasks_.
- Each issue may be labeled with
  - categories: feature, bug, test, refactor, dependencies, chore
  - priorities: must, should, could, wont [MoSCoW priority](https://en.wikipedia.org/wiki/MoSCoW_method)
  - milestones: may be epics or releases
  - project: a Kanban dashboard to track issue workflow


### Commits and release

- Use [standard-version](https://www.npmjs.com/package/standard-version) to produce a changelog file from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Code style with Prettier

- Installed and configured prettier

- Recommended [prettier extension](https://github.com/prettier/prettier-vscode)


### Code Linting with esLint

- Installed and configured eslint to work with prettier
- Recommended [esLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Scripts

```json
  "scripts": {
    "format": "prettier --write \"./**/*.{js,json}\"",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin master",
    "updates": "ncu -u"
  }
```

### VS Code Extensions

TOP 20

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


### Extra

#### VS Code Shortcuts

TOP 10

- `F1` :command list
- `CTRL+P` : file
- `CTRL+T` : search code
- `CTRL+K CTRL+Z` : code comment
- `CTRL+K CTRL+U` : uncomment code
- `F12` : go to definition
- `CTRL+Ñ` : show hide terminal
- `CTRL+B`: show hide nav bar
- `CTRL+K S` : save al files
- `ALT+up|dawn` : move line



