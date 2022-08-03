## TODO List

- Finish build script - not all CSS needed is being output yet, notably fonts (need to base off `html[lang^="jp"]` (attribute starts with) selector) NOT a property
- Write in the main README about system/css and system/react and the format required of files and how the css is generated.
- Write a README for both system/css and system/react that will be published to npm.
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
