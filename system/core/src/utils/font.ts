import { css } from '../utils';

const SUFFIX =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,"Fira Sans","Droid Sans","Helvetica Neue","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji",sans-serif,system-ui';
// this should be good for all latin based languages
const DEFAULT = '"IBM Plex Sans"';
const CHINESE_FONT_FAMILY =
  '"Microsoft YaHei UI","Microsoft YaHei New","Microsoft YaHei","微软雅黑","Hiragino Sans GB","冬青黑体简体中文","ヒラギノ角ゴ簡体中文",STXihei,"华文细黑",SimHei,"黑体"';
const JA_FONT_FAMILY =
  '"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Yu Gothic UI","Yu Gothic","游ゴシック体",YuGothic,Osaka,"Meiryo UI",Meiryo,メイリオ,"ＭＳ Ｐゴシック","MS PGothic"';
const KO_FONT_FAMILY =
  '"Apple SD Gothic Neo","애플 SD 산돌고딕 Neo","Malgun Gothic","맑은 고딕",Gulim,"굴림",Dotum';

const AR_COUNTRIES = [
  'dz',
  'bh',
  'td',
  'km',
  'dj',
  'eg',
  'er',
  'iq',
  'jo',
  'kw',
  'lb',
  'ly',
  'mr',
  'ma',
  'om',
  'ps',
  'qa',
  'sa',
  'so',
  'sd',
  'sy',
  'tz',
  'tn',
  'ae',
  'ye'
];

export const font = css`
  /* Default variables */
  :root {
    --locale-font-family: ${DEFAULT};
    --font-family: var(
        --country-font-family,
        var(--locale-font-family, ${DEFAULT})
      ),
      var(--locale-font-family, ${DEFAULT}), ${CHINESE_FONT_FAMILY}, ${SUFFIX};
    --font-family-monospace: 'IBM Plex Mono', Menlo, Monaco, Consolas,
      'Courier New', monospace;
  }

  /* Language-specific font settings */
  :root:lang(ar) {
    --locale-font-family: 'IBM Plex Sans Arabic';
  }

  :root:lang(th) {
    --locale-font-family: 'IBM Plex Sans Thai Looped';
  }

  :root:lang(he) {
    --locale-font-family: 'IBM Plex Sans Hebrew';
  }

  :root:lang(hi) {
    --locale-font-family: 'IBM Plex Sans Devanagari';
  }

  :root:lang(km) {
    --locale-font-family: 'Noto Sans Khmer';
  }

  /* Country-specific font settings */
  ${AR_COUNTRIES.map(
    (code) =>
      `:root[data-country="${code}"], :root[data-country="${code.toUpperCase()}"]`
  ).join(', ')} {
    --country-font-family: 'IBM Plex Sans Arabic';
  }

  :root[data-country='kr'],
  :root[data-country='KR'] {
    --country-font-family: ${KO_FONT_FAMILY};
  }

  :root[data-country='jp']:not(:lang(zh)),
  :root[data-country='JP']:not(:lang(zh)) {
    --country-font-family: ${JA_FONT_FAMILY};
  }

  :root[data-country='th'],
  :root[data-country='TH'] {
    --country-font-family: 'IBM Plex Sans Thai Looped';
  }

  :root[data-country='il'],
  :root[data-country='IL'] {
    --country-font-family: 'IBM Plex Sans Hebrew';
  }

  :root[data-country='in'],
  :root[data-country='IN'] {
    --country-font-family: 'IBM Plex Sans Devanagari';
  }

  :root[data-country='kh'],
  :root[data-country='KH'] {
    --country-font-family: 'Noto Sans Khmer';
  }
`;
