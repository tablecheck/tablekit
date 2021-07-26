# tablekit

Next generation UI component library

## Installation

```shell
nvm use
npm ci --legacy-peer-deps
npm start
```

## Testing

`npm run test`

## Development

Start the development server with `npm run start`

then visit `http://<your ip address>:6060`

Note the precommit script that will change your commit files according to prettier. If you want to know what will be changed we suggest setting up a IDE on save config.

## Publishing Packages

When you need to release a new version of a package:

- Run `npm i` from the root of the tablekit folder (to make sure all packages have the node_modules folder)
- Run `lerna publish` from the root of the tablekit folder (this should ideally be handled by a CI)

## Building a package manually

- Run `lerna run build --scope=@tablecheck/tablekit-button`

## Creating new Packages

- run `npm run new-package` and follow the prompts. This can take several minutes to correctly bootstrap the packages together after creation.
- At this point everything should be ready to start developing with `npm start`
- Continue modifying the files in the `src` folder as needed

## Removing unsused packages

- delete the package folder in `packages/<package-name>`
- remove the entry for the package in `.@tablecheck-react-systemrc.json`

IMPORTANT! Before merging the MR, make sure the commit message has the scope of the component. Example: `feat(newpackage): added New Package`
