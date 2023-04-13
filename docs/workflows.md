# 🔗 Workflows

## 👨‍💻 Dev Workflow

While developing, make sure to install the [recommended extensions](https://github.com/AlbertoBasalo/dotfiles/blob/main/extensions-i-use.md) for a better dev experience.

#### Testing

Run `npm run watch` it will run test after each change. Ideal for TDD or testing _just in time_.

#### Running

To run your code without having to build it, just execute `npm run dev`

#### Updating

To keep your dependencies up to date use `npm run updates` and it will check for updates. Then cherry pick what you want to update.

## 🚚 Deploy Workflow

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

# 🤖 Scripts

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
