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

Publishing packages is handled automatically via GitHub Actions

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/wahidmagdy"><img src="https://avatars.githubusercontent.com/u/3442546?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wahid Magdy</b></sub></a><br /><a href="https://github.com/tablecheck/@tablecheck/tablekit/commits?author=wahidmagdy" title="Documentation">📖</a> <a href="#example-wahidmagdy" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/SimeonC"><img src="https://avatars.githubusercontent.com/u/1085899?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simeon Cheeseman</b></sub></a><br /><a href="#infra-SimeonC" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/irmir"><img src="https://avatars.githubusercontent.com/u/59263605?v=4?s=100" width="100px;" alt=""/><br /><sub><b>irmir</b></sub></a><br /><a href="#example-irmir" title="Examples">💡</a> <a href="https://github.com/tablecheck/@tablecheck/tablekit/commits?author=irmir" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
