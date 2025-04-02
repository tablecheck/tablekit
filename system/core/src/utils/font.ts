import { css } from '../utils';

const SUFFIX =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,"Fira Sans","Droid Sans","Helvetica Neue","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji",sans-serif,system-ui';
// this should be good for all latin based languages
const PREFIX = '"IBM Plex Sans"';
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
  :root {
    --font-family: ${PREFIX}, ${CHINESE_FONT_FAMILY}, ${SUFFIX};
  }
  :lang(ar),
  ${AR_COUNTRIES.map((code) => `[data-country="${code}"]`).join(', ')} {
    &,
    &:root {
      --font-family: 'IBM Plex Sans Arabic', ${CHINESE_FONT_FAMILY}, ${SUFFIX};
    }
  }

  :lang(th),
  [data-country='th'] {
    &,
    &:root {
      --font-family: 'IBM Plex Sans Thai Looped', ${PREFIX},
        ${CHINESE_FONT_FAMILY}, ${SUFFIX};
    }
  }

  :lang(ko),
  [data-country='kr'] {
    &,
    &:root {
      --font-family: ${PREFIX}, ${KO_FONT_FAMILY}, ${CHINESE_FONT_FAMILY},
        ${SUFFIX};
    }
  }

  :lang(ja),
  [data-country='jp']:not(:lang(zh)) {
    &,
    &:root {
      --font-family: ${PREFIX}, ${JA_FONT_FAMILY}, ${SUFFIX};
    }
  }

  :lang(he),
  [data-country='il'] {
    &,
    &:root {
      --font-family: 'IBM Plex Sans Hebrew', ${PREFIX}, ${CHINESE_FONT_FAMILY},
        ${SUFFIX};
    }
  }

  :lang(hi),
  [data-country='in'] {
    &,
    &:root {
      --font-family: 'IBM Plex Sans Devanagari', ${PREFIX},
        ${CHINESE_FONT_FAMILY}, ${SUFFIX};
    }
  }

  :lang(km),
  [data-country='kh'] {
    &,
    &:root {
      --font-family: 'Noto Sans Khmer', ${PREFIX}, ${CHINESE_FONT_FAMILY},
        ${SUFFIX};
    }
  }
`;
