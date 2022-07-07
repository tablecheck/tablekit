## TODO List

- Finish build script - not all CSS needed is being output yet, notably fonts (need to base off `html[lang^="jp"]` (attribute starts with) selector) NOT a property
- Need to update to include this PR or linter won't pass https://github.com/tablecheck/tablecheck-react-system/pull/68
- Write readme in both system/css and system/react about format required of files and how the css is generated.
- It looks like there may be a bug with how top level tsconfig.json is being generated that causes a crash. Needs to be fixed for monorepo compatability in tablecheck-react-system.
- Build the website? Ideally we should generate docs with the classname/classless selectors and the react component import.

# Code note about font-face and language

To use symantic code do the following;

```
// HTML
<html lang="ja" data-country="kr">

// CSS
[lang^="ja"] {
  --font-family: "..."
}

[lang^="ko"], [data-country="kr"] {
  --font-family: "..."
}
```
