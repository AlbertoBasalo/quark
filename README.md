# quark
Fundamental project template

Clone or fork to use like a template for creating yours.

## Tools

### GitHub Issues

- Using GitHub issues for tracking _User Stories and Epics_.
- Each issue may be labeled with an Epic, a [MoSCoW priority](https://en.wikipedia.org/wiki/MoSCoW_method) and a basic category.


### Commits and release

- Using [standard-version](https://www.npmjs.com/package/standard-version) to produce a changelog file from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Code style with Prettier

- install local dev dependency

- Recommended [prettier extension](https://github.com/prettier/prettier-vscode)

- configure

### Code Linting with esLint

- install local dev dependency
- install local dev dependency for interop with prettier
- Recommended [esLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- configure

### VS Code Shortcuts

TOP 10

- `F1` : paleta de comandos
- `CTRL+P` : lista de ficheros
- `CTRL+T` : buscar una clase, función o variable em código
- `CTRL+K CTRL+Z` : comentar código
- `CTRL+K CTRL+U` : des comentar código
- `F12` : ir a la definición
- `CTRL+Ñ` : mostrar ocultar terminal
- `CTRL+B`: mostrar ocultar barra lateral
- `CTRL+K S` : guardar todos los ficheros con cambios
- `ALT+Arriba|Abajo` : mover selección arriba o abajo

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

### Scripts

```json
  "scripts": {
    "format": "prettier --write \"./**/*.{js,json}\"",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin master",
    "updates": "ncu -u"
  }
```

