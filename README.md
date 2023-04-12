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

## 🔗 Workflows

### 👨‍💻 Dev Workflow

While developing, make sure to install the recommended extensions for a better dev experience.

#### Testing

Run `npm run test:watch` it will run test after each change. Ideal for TDD or testing just in time.

#### Running

To run your code without having to build it, just execute `npm run dev`

#### Updating

To keep your dependencies up to date use `npm run updates` and it will check for updates. Then cherry pick what you want to update.

### 🚚 Deploy Workflow

#### Testing

Run `npm test` it will run all test once and stops. Default for CI/CD most common environments.

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
    "prestart": "npm run build",
    "start": "node ./dist/main.js",
    "test": "jest --coverage",
    "build": "tsc -p tsconfig.json",
    "dev": "ts-node ./src/main.ts",
    "test:dev": "jest --watch",
    "ts-node": "ts-node",
    "format": "prettier --write \"./**/*.{ts,json}\"",
    "lint": "eslint src --ext .ts",
    "lint:fix": "npm run lint -- --fix",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin main",
    "update": "ncu -u"
  }
```

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

---

## 🛠 (VS Code .dotfiles)[https://github.com/AlbertoBasalo/dotfiles]

### ⚙️ Settings

- [How to configure VSCode to code better TypeScript](https://albertobasalo.medium.com/how-to-configure-vscode-to-code-better-typescript-d6e000b2cb06?sk=4c0edee7dd123c0e0c7c6f7266c91e4d)

- [My settings.json](https://github.com/AlbertoBasalo/dotfiles/blob/main/settings.json)

### 🧩 Extensions

- [5 VSCode extensions to write better TypeScript](https://albertobasalo.medium.com/5-vscode-extensions-to-write-better-typescript-9804acbada9?sk=8907a533ca7e5b14aa2daa397bb667d1)

- [Extensions I use](https://github.com/AlbertoBasalo/dotfiles/blob/main/extensions-i-use.md)

### 👩🏼‍⚖️ EsLint rules

- [Fine-tune ESLint rules to write better TypeScript](https://albertobasalo.medium.com/fine-tune-eslint-rules-to-code-better-typescript-e4cabbbe2fa1?sk=fe0c1c07936f2c4a503dbce0272da621)

- [My eslint.json](https://github.com/AlbertoBasalo/dotfiles/blob/main/eslint.json)

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
  <h3>🧑🏼‍💻 By <a href="https://albertobasalo.dev" target="blank">Alberto Basalo</a> </h3>
  <p>
    <a href="https://twitter.com/albertobasalo" target="blank">
      <img src="https://img.shields.io/twitter/follow/albertobasalo?logo=twitter&style=for-the-badge" alt="twitter albertobasalo" />
    </a>
  </p>
  <p>
    <a href="https://github.com/albertobasalo" target="blank">
      <img 
        src="https://img.shields.io/github/followers/albertobasalo?logo=github&label=profile albertobasalo&style=for-the-badge" alt="git albertobasalo" />
    </a>
  </p>
</footer>
