# Developer Experience VSCode

When using the [VSCode CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) plugin, add the following to your User Settings JSON to get autocomplete working correctly.

```json
  "cssVariables.lookupFiles": [
    "node_modules/@tablecheck/tablekit-css/*.css",
    "**/*.css",
    "**/*.scss",
    "**/*.sass",
    "**/*.less"
  ],
  "cssVariables.blacklistFolders": [
    "**/.git",
    "**/.svn",
    "**/.hg",
    "**/CVS",
    "**/.DS_Store",
    "**/.git",
    "**/node_modules/(!@tablecheck/tablekit-css)",
    "**/bower_components",
    "**/tmp",
    "**/dist",
    "**/tests"
  ]

# Fonts

See @tablecheck/tablekit-react for information about fonts
```
