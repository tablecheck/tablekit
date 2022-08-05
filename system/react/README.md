# Fonts

Tablekit ships by default with a lot of fallback fonts, our preference is using @ibm/plex but you will need to host these fonts yourselves. If you want to self host on a CDN you can use this snippet as a basis.

The font-family names we have defined are; `IBM Plex Sans` `IBM Plex Sans Arabic` and `IBM Plex Sans Thai Looped`.

We detect which font set to use by the `:lang()` selector, which combines the language of the browser and the `lang=""` attribute at the html tag level, and the `[data-country]` attribute which should usually be set on the `html` element. See the table below for how each font-family is loaded.

| Language  | Country                                                                                              | Font Family                              |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `unknown` | `unknown`                                                                                            | `IBM Plex Sans` + Chinese inbuilt fonts  |
| `ja`      | `jp` (when language is not `zh*`)                                                                    | `IBM Plex Sans` + Japanese inbuilt fonts |
| `ar`      | `dz, bh, td, km, dj, eg, er, iq, jo, kw, lb, ly, mr, ma, om, ps, qa, sa, so, sd, sy, tz, tn, ae, ye` | `IBM Plex Sans Arabic`                   |
| `th`      | `th`                                                                                                 | `IBM Plex Sans Thai Looped`              |
| `ko`      | `kr`                                                                                                 | `IBM Plex Sans` + Korean inbuilt fonts   |

```css
@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans ExtraLight'), local('IBM Plex Sans-ExtraLight'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-ExtraLight.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-ExtraLight.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 200;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans ExtraLight Italic'), local(
      'IBM Plex Sans-ExtraLightItalic'
    ),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-ExtraLightItalic.woff2')
      format('woff2'), url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-ExtraLightItalic.woff')
      format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 200;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Light'), local('IBM Plex Sans-Light'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Light.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Light.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Light Italic'), local('IBM Plex Sans-LightItalic'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-LightItalic.woff2')
      format('woff2'), url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-LightItalic.woff')
      format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 300;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Regular'), local('IBM Plex Sans-Regular'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Regular.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Regular.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Regular Italic'), local(
      'IBM Plex Sans-RegularItalic'
    ),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Italic.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Italic.woff') format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 400;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Medium'), local('IBM Plex Sans-Medium'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Medium.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Medium.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Medium Italic'), local(
      'IBM Plex Sans-MediumItalic'
    ),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-MediumItalic.woff2')
      format('woff2'), url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-MediumItalic.woff')
      format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 500;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans SemiBold'), local('IBM Plex Sans-SemiBold'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-SemiBold.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-SemiBold.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans SemiBold Italic'), local(
      'IBM Plex Sans-SemiBoldItalic'
    ),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-SemiBoldItalic.woff2')
      format('woff2'), url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-SemiBoldItalic.woff')
      format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 600;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Bold'), local('IBM Plex Sans-Bold'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Bold.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-Bold.woff') format('woff');
  font-display: swap;
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: local('IBM Plex Sans Bold Italic'), local('IBM Plex Sans-BoldItalic'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-BoldItalic.woff2') format('woff2'),
    url('https://cdn.url.here/IBMPlex-Sans/IBMPlexSans-BoldItalic.woff') format('woff');
  font-display: swap;
  font-style: italic;
  font-weight: 700;
}
```
