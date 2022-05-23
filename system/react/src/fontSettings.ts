import { FontType, GetCdnPathFunction } from './fonts/buildFontFace';
import { plexSansFont } from './fonts/plexSans';
import { plexSansArabicFont } from './fonts/plexSansArabic';
import { plexSansThaiLoopedFont } from './fonts/plexSansThaiLooped';
import { FontWeight } from './fonts/weights';

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

// Note about font files
// need to host google fonts by ourselves since China wont have an access to google

export function resolveFontWeights(
  paramFontWeights?: FontWeight[]
): FontWeight[] {
  if (paramFontWeights && paramFontWeights.length) {
    return paramFontWeights;
  }
  return [FontWeight.Regular, FontWeight.Bold, FontWeight.SemiBold];
}

export const getFont = (
  getCdnPath: GetCdnPathFunction,
  casedLocale?: string,
  casedCountry?: string,
  paramFontWeights?: FontWeight[]
): FontType => {
  const fontWeights = resolveFontWeights(paramFontWeights);
  const country = (casedCountry || '').toLowerCase();
  const locale = (casedLocale || '').toLowerCase();
  if (locale === 'th' || country === 'th') {
    return plexSansThaiLoopedFont(getCdnPath, fontWeights);
  }
  if (locale === 'ar' || AR_COUNTRIES.includes(country)) {
    return plexSansArabicFont(getCdnPath, fontWeights);
  }
  return plexSansFont(getCdnPath, fontWeights);
};

function testJa(locale: string, country: string) {
  return locale === 'ja' || (country === 'jp' && !locale.match(/^zh/gi));
}

export const getFontFamily = (
  casedLocale?: string,
  casedCountry?: string
): string => {
  const country = (casedCountry || '').toLowerCase();
  const locale = (casedLocale || '').toLowerCase();
  let fontFamily = `${PREFIX},${CHINESE_FONT_FAMILY},${SUFFIX}`;
  if (testJa(locale, country)) {
    fontFamily = `${PREFIX},${JA_FONT_FAMILY},${SUFFIX}`;
  } else if (locale === 'ko' || country === 'kr') {
    fontFamily = `${PREFIX},${KO_FONT_FAMILY},${CHINESE_FONT_FAMILY},${SUFFIX}`;
  } else if (locale === 'th' || country === 'th') {
    fontFamily = `${PREFIX},"IBM Plex Sans Thai Looped",${CHINESE_FONT_FAMILY},${SUFFIX}`;
  } else if (locale === 'ar' || AR_COUNTRIES.includes(country)) {
    fontFamily = `${PREFIX},"IBM Plex Sans Arabic",${CHINESE_FONT_FAMILY},${SUFFIX}`;
  }
  return fontFamily;
};
