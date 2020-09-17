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

### Atajos

TOP 10

F1 : paleta de comandos
CTRL+P : lista de ficheros
CTRL+T : buscar una clase, función o variable em código
CTRL+K CTRL+Z : comentar código
CTRL+K CTRL+U : des comentar código
F12 : ir a la definición
CTRL+Ñ : mostrar ocultar terminal
CTRL+B : mostrar ocultar barra lateral
CTRL+K S : guardar todos los ficheros con cambios
ALT+ArribaAbajo : mover selección arriba o abajo

### Extensiones

TOP 10

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Prettier](https://github.com/prettier/prettier-vscode)
[EsLint ](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[TsLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
[Spell Right](https://marketplace.visualstudio.com/items?itemName=ban.spellright)
[Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
[Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
[Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

### Scripts

```json
  "scripts": {
    "format": "prettier --write \"./**/*.{js,json}\"",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin master",
    "updates": "ncu -u"
  }
```

