# Roadmap
## 2.0.0
- Redo with sveltekit

## Backlog
- dark mode (colors schmes css)
- pre commit reorganize i18n ordre alphabétique
- https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
  - Cook Mode Prevent your screen from going dark
- fix notes (import is weird, test with trad)
- add costs
- do i need totalPercentage ?
- color-scheme

## V1.2.0
- [ ] Add calcutrice ? (simple division de total/parts)
- [ ] Add timeline graph https://github.com/mermaid-js/mermaid
- [ ] Export timeline graph as pdf/jpg? to share/save

## V1.1.1
- [x] Fix traduction
  - Notes
  - Select champ

## V1.1.0
- [ ] Have separate URL by recipe
- [ ] Change recipe => change title
- [x] Rajouter un footer : github link
- [x] JSON schema to validate recipe json

## V1.0.0
- [x] Form with all ingredients based on recipes preset
- [x] Translate english and french
- [x] Deploy to github pages
  - [x] pnpm outdated step pipeline
- [x] Add [turborepo](https://turbo.build/repo/docs)
- [x] Change html lang attribute dynamically
- [x] precommit
  - [x] Script generate list.json

# Backlog infini
- Monorepo ?
  - pnpm workspaces https://pnpm.io/workspaces (+npm+yarn)
- Atomic design ?
- Storybook
  - https://github.com/Decathlon/vitamin-web
  - https://storybook.js.org/

- package.json variables ?
  - https://dev.to/tykok/use-variables-in-your-packagejson-331j
  - https://stackoverflow.com/questions/43705195/how-can-i-use-variables-in-package-json
  - env var : https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
- precommit
  - https://github.com/mpalmer/action-validator
- dark mode
- pre commit reorganize i18n ordre alphabétique
- Button "Surprise me!" : show a random recipe
