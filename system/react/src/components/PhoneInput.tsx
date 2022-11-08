// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { Close } from '@carbon/icons-react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  parseIncompletePhoneNumber,
  parsePhoneNumberFromString,
  PhoneNumber,
  CountryCode
} from 'libphonenumber-js/core';
import metadata from 'libphonenumber-js/metadata.full.json';
import * as React from 'react';
import {
  parsePhoneNumber as baseParseInput
  // CAUTION: DO NOT UPGRADE THIS PACKAGE
  // WITHOUT REFACTOR AS ITS INTERNAL STRUCTURE AND SIGNATURES
  // HAS CHANGED IN MINOR VERSION
} from 'react-phone-number-input/modules/helpers/phoneInputHelpers';

import flagImage from '../../assets/flags.png';
import flagImage2x from '../../assets/flags@2x.png';
import { allCountries } from '../utils/phoneUtils';

import { Input, InputWithIcons } from './Input';

type FlagStyles = {
  [key: string]: {
    height: string;
    width?: string;
    backgroundPosition: string;
  };
};

export const flagStyles: FlagStyles = {
  AC: {
    height: '10px',
    backgroundPosition: '0px 0px'
  },
  AD: {
    height: '14px',
    backgroundPosition: '-22px 0px'
  },
  AE: {
    height: '10px',
    backgroundPosition: '-44px 0px'
  },
  AF: {
    height: '14px',
    backgroundPosition: '-66px 0px'
  },
  AG: {
    height: '14px',
    backgroundPosition: '-88px 0px'
  },
  AI: {
    height: '10px',
    backgroundPosition: '-110px 0px'
  },
  AL: {
    height: '15px',
    backgroundPosition: '-132px 0px'
  },
  AM: {
    height: '10px',
    backgroundPosition: '-154px 0px'
  },
  AO: {
    height: '14px',
    backgroundPosition: '-176px 0px'
  },
  AQ: {
    height: '14px',
    backgroundPosition: '-198px 0px'
  },
  AR: {
    height: '13px',
    backgroundPosition: '-220px 0px'
  },
  AS: {
    height: '10px',
    backgroundPosition: '-242px 0px'
  },
  AT: {
    height: '14px',
    backgroundPosition: '-264px 0px'
  },
  AU: {
    height: '10px',
    backgroundPosition: '-286px 0px'
  },
  AW: {
    height: '14px',
    backgroundPosition: '-308px 0px'
  },
  AX: {
    height: '13px',
    backgroundPosition: '-330px 0px'
  },
  AZ: {
    height: '10px',
    backgroundPosition: '-352px 0px'
  },
  BA: {
    height: '10px',
    backgroundPosition: '-374px 0px'
  },
  BB: {
    height: '14px',
    backgroundPosition: '-396px 0px'
  },
  BD: {
    height: '12px',
    backgroundPosition: '-418px 0px'
  },
  BE: {
    width: '18px',
    height: '15px',
    backgroundPosition: '-440px 0px'
  },
  BF: {
    height: '14px',
    backgroundPosition: '-460px 0px'
  },
  BG: {
    height: '12px',
    backgroundPosition: '-482px 0px'
  },
  BH: {
    height: '12px',
    backgroundPosition: '-504px 0px'
  },
  BI: {
    height: '12px',
    backgroundPosition: '-526px 0px'
  },
  BJ: {
    height: '14px',
    backgroundPosition: '-548px 0px'
  },
  BL: {
    height: '14px',
    backgroundPosition: '-570px 0px'
  },
  BM: {
    height: '10px',
    backgroundPosition: '-592px 0px'
  },
  BN: {
    height: '10px',
    backgroundPosition: '-614px 0px'
  },
  BO: {
    height: '14px',
    backgroundPosition: '-636px 0px'
  },
  BQ: {
    height: '14px',
    backgroundPosition: '-658px 0px'
  },
  BR: {
    height: '14px',
    backgroundPosition: '-680px 0px'
  },
  BS: {
    height: '10px',
    backgroundPosition: '-702px 0px'
  },
  BT: {
    height: '14px',
    backgroundPosition: '-724px 0px'
  },
  BV: {
    height: '15px',
    backgroundPosition: '-746px 0px'
  },
  BW: {
    height: '14px',
    backgroundPosition: '-768px 0px'
  },
  BY: {
    height: '10px',
    backgroundPosition: '-790px 0px'
  },
  BZ: {
    height: '14px',
    backgroundPosition: '-812px 0px'
  },
  CA: {
    height: '10px',
    backgroundPosition: '-834px 0px'
  },
  CC: {
    height: '10px',
    backgroundPosition: '-856px 0px'
  },
  CD: {
    height: '15px',
    backgroundPosition: '-878px 0px'
  },
  CF: {
    height: '14px',
    backgroundPosition: '-900px 0px'
  },
  CG: {
    height: '14px',
    backgroundPosition: '-922px 0px'
  },
  CH: {
    width: '15px',
    height: '15px',
    backgroundPosition: '-944px 0px'
  },
  CI: {
    height: '14px',
    backgroundPosition: '-961px 0px'
  },
  CK: {
    height: '10px',
    backgroundPosition: '-983px 0px'
  },
  CL: {
    height: '14px',
    backgroundPosition: '-1005px 0px'
  },
  CM: {
    height: '14px',
    backgroundPosition: '-1027px 0px'
  },
  CN: {
    height: '14px',
    backgroundPosition: '-1049px 0px'
  },
  CO: {
    height: '14px',
    backgroundPosition: '-1071px 0px'
  },
  CP: {
    height: '14px',
    backgroundPosition: '-1093px 0px'
  },
  CR: {
    height: '12px',
    backgroundPosition: '-1115px 0px'
  },
  CU: {
    height: '10px',
    backgroundPosition: '-1137px 0px'
  },
  CV: {
    height: '12px',
    backgroundPosition: '-1159px 0px'
  },
  CW: {
    height: '14px',
    backgroundPosition: '-1181px 0px'
  },
  CX: {
    height: '10px',
    backgroundPosition: '-1203px 0px'
  },
  CY: {
    height: '13px',
    backgroundPosition: '-1225px 0px'
  },
  CZ: {
    height: '14px',
    backgroundPosition: '-1247px 0px'
  },
  DE: {
    height: '12px',
    backgroundPosition: '-1269px 0px'
  },
  DG: {
    height: '10px',
    backgroundPosition: '-1291px 0px'
  },
  DJ: {
    height: '14px',
    backgroundPosition: '-1313px 0px'
  },
  DK: {
    height: '15px',
    backgroundPosition: '-1335px 0px'
  },
  DM: {
    height: '10px',
    backgroundPosition: '-1357px 0px'
  },
  DO: {
    height: '13px',
    backgroundPosition: '-1379px 0px'
  },
  DZ: {
    height: '14px',
    backgroundPosition: '-1401px 0px'
  },
  EA: {
    height: '14px',
    backgroundPosition: '-1423px 0px'
  },
  EC: {
    height: '14px',
    backgroundPosition: '-1445px 0px'
  },
  EE: {
    height: '13px',
    backgroundPosition: '-1467px 0px'
  },
  EG: {
    height: '14px',
    backgroundPosition: '-1489px 0px'
  },
  EH: {
    height: '10px',
    backgroundPosition: '-1511px 0px'
  },
  ER: {
    height: '10px',
    backgroundPosition: '-1533px 0px'
  },
  ES: {
    height: '14px',
    backgroundPosition: '-1555px 0px'
  },
  ET: {
    height: '10px',
    backgroundPosition: '-1577px 0px'
  },
  EU: {
    height: '14px',
    backgroundPosition: '-1599px 0px'
  },
  FI: {
    height: '12px',
    backgroundPosition: '-1621px 0px'
  },
  FJ: {
    height: '10px',
    backgroundPosition: '-1643px 0px'
  },
  FK: {
    height: '10px',
    backgroundPosition: '-1665px 0px'
  },
  FM: {
    height: '11px',
    backgroundPosition: '-1687px 0px'
  },
  FO: {
    height: '15px',
    backgroundPosition: '-1709px 0px'
  },
  FR: {
    height: '14px',
    backgroundPosition: '-1731px 0px'
  },
  GA: {
    height: '15px',
    backgroundPosition: '-1753px 0px'
  },
  GB: {
    height: '10px',
    backgroundPosition: '-1775px 0px'
  },
  GD: {
    height: '12px',
    backgroundPosition: '-1797px 0px'
  },
  GE: {
    height: '14px',
    backgroundPosition: '-1819px 0px'
  },
  GF: {
    height: '14px',
    backgroundPosition: '-1841px 0px'
  },
  GG: {
    height: '14px',
    backgroundPosition: '-1863px 0px'
  },
  GH: {
    height: '14px',
    backgroundPosition: '-1885px 0px'
  },
  GI: {
    height: '10px',
    backgroundPosition: '-1907px 0px'
  },
  GL: {
    height: '14px',
    backgroundPosition: '-1929px 0px'
  },
  GM: {
    height: '14px',
    backgroundPosition: '-1951px 0px'
  },
  GN: {
    height: '14px',
    backgroundPosition: '-1973px 0px'
  },
  GP: {
    height: '14px',
    backgroundPosition: '-1995px 0px'
  },
  GQ: {
    height: '14px',
    backgroundPosition: '-2017px 0px'
  },
  GR: {
    height: '14px',
    backgroundPosition: '-2039px 0px'
  },
  GS: {
    height: '10px',
    backgroundPosition: '-2061px 0px'
  },
  GT: {
    height: '13px',
    backgroundPosition: '-2083px 0px'
  },
  GU: {
    height: '11px',
    backgroundPosition: '-2105px 0px'
  },
  GW: {
    height: '10px',
    backgroundPosition: '-2127px 0px'
  },
  GY: {
    height: '12px',
    backgroundPosition: '-2149px 0px'
  },
  HK: {
    height: '14px',
    backgroundPosition: '-2171px 0px'
  },
  HM: {
    height: '10px',
    backgroundPosition: '-2193px 0px'
  },
  HN: {
    height: '10px',
    backgroundPosition: '-2215px 0px'
  },
  HR: {
    height: '10px',
    backgroundPosition: '-2237px 0px'
  },
  HT: {
    height: '12px',
    backgroundPosition: '-2259px 0px'
  },
  HU: {
    height: '10px',
    backgroundPosition: '-2281px 0px'
  },
  IC: {
    height: '14px',
    backgroundPosition: '-2303px 0px'
  },
  ID: {
    height: '14px',
    backgroundPosition: '-2325px 0px'
  },
  IE: {
    height: '10px',
    backgroundPosition: '-2347px 0px'
  },
  IL: {
    height: '15px',
    backgroundPosition: '-2369px 0px'
  },
  IM: {
    height: '10px',
    backgroundPosition: '-2391px 0px'
  },
  IN: {
    height: '14px',
    backgroundPosition: '-2413px 0px'
  },
  IO: {
    height: '10px',
    backgroundPosition: '-2435px 0px'
  },
  IQ: {
    height: '14px',
    backgroundPosition: '-2457px 0px'
  },
  IR: {
    height: '12px',
    backgroundPosition: '-2479px 0px'
  },
  IS: {
    height: '15px',
    backgroundPosition: '-2501px 0px'
  },
  IT: {
    height: '14px',
    backgroundPosition: '-2523px 0px'
  },
  JE: {
    height: '12px',
    backgroundPosition: '-2545px 0px'
  },
  JM: {
    height: '10px',
    backgroundPosition: '-2567px 0px'
  },
  JO: {
    height: '10px',
    backgroundPosition: '-2589px 0px'
  },
  JP: {
    height: '15px',
    backgroundPosition: '-2611px 1px'
  },
  KE: {
    height: '14px',
    backgroundPosition: '-2633px 0px'
  },
  KG: {
    height: '12px',
    backgroundPosition: '-2655px 0px'
  },
  KH: {
    height: '13px',
    backgroundPosition: '-2677px 0px'
  },
  KI: {
    height: '10px',
    backgroundPosition: '-2699px 0px'
  },
  KM: {
    height: '12px',
    backgroundPosition: '-2721px 0px'
  },
  KN: {
    height: '14px',
    backgroundPosition: '-2743px 0px'
  },
  KP: {
    height: '10px',
    backgroundPosition: '-2765px 0px'
  },
  KR: {
    height: '14px',
    backgroundPosition: '-2787px 0px'
  },
  KW: {
    height: '10px',
    backgroundPosition: '-2809px 0px'
  },
  KY: {
    height: '10px',
    backgroundPosition: '-2831px 0px'
  },
  KZ: {
    height: '10px',
    backgroundPosition: '-2853px 0px'
  },
  LA: {
    height: '14px',
    backgroundPosition: '-2875px 0px'
  },
  LB: {
    height: '14px',
    backgroundPosition: '-2897px 0px'
  },
  LC: {
    height: '10px',
    backgroundPosition: '-2919px 0px'
  },
  LI: {
    height: '12px',
    backgroundPosition: '-2941px 0px'
  },
  LK: {
    height: '10px',
    backgroundPosition: '-2963px 0px'
  },
  LR: {
    height: '11px',
    backgroundPosition: '-2985px 0px'
  },
  LS: {
    height: '14px',
    backgroundPosition: '-3007px 0px'
  },
  LT: {
    height: '12px',
    backgroundPosition: '-3029px 0px'
  },
  LU: {
    height: '12px',
    backgroundPosition: '-3051px 0px'
  },
  LV: {
    height: '10px',
    backgroundPosition: '-3073px 0px'
  },
  LY: {
    height: '10px',
    backgroundPosition: '-3095px 0px'
  },
  MA: {
    height: '14px',
    backgroundPosition: '-3117px 0px'
  },
  MC: {
    width: '19px',
    height: '15px',
    backgroundPosition: '-3139px 0px'
  },
  MD: {
    height: '10px',
    backgroundPosition: '-3160px 0px'
  },
  ME: {
    height: '10px',
    backgroundPosition: '-3182px 0px'
  },
  MF: {
    height: '14px',
    backgroundPosition: '-3204px 0px'
  },
  MG: {
    height: '14px',
    backgroundPosition: '-3226px 0px'
  },
  MH: {
    height: '11px',
    backgroundPosition: '-3248px 0px'
  },
  MK: {
    height: '10px',
    backgroundPosition: '-3270px 0px'
  },
  ML: {
    height: '14px',
    backgroundPosition: '-3292px 0px'
  },
  MM: {
    height: '14px',
    backgroundPosition: '-3314px 0px'
  },
  MN: {
    height: '10px',
    backgroundPosition: '-3336px 0px'
  },
  MO: {
    height: '14px',
    backgroundPosition: '-3358px 0px'
  },
  MP: {
    height: '10px',
    backgroundPosition: '-3380px 0px'
  },
  MQ: {
    height: '14px',
    backgroundPosition: '-3402px 0px'
  },
  MR: {
    height: '14px',
    backgroundPosition: '-3424px 0px'
  },
  MS: {
    height: '10px',
    backgroundPosition: '-3446px 0px'
  },
  MT: {
    height: '14px',
    backgroundPosition: '-3468px 0px'
  },
  MU: {
    height: '14px',
    backgroundPosition: '-3490px 0px'
  },
  MV: {
    height: '14px',
    backgroundPosition: '-3512px 0px'
  },
  MW: {
    height: '14px',
    backgroundPosition: '-3534px 0px'
  },
  MX: {
    height: '12px',
    backgroundPosition: '-3556px 0px'
  },
  MY: {
    height: '10px',
    backgroundPosition: '-3578px 0px'
  },
  MZ: {
    height: '14px',
    backgroundPosition: '-3600px 0px'
  },
  NA: {
    height: '14px',
    backgroundPosition: '-3622px 0px'
  },
  NC: {
    height: '10px',
    backgroundPosition: '-3644px 0px'
  },
  NE: {
    height: '15px',
    backgroundPosition: '-3666px 0px'
  },
  NF: {
    width: '18px',
    height: '10px',
    backgroundPosition: '-3686px 0px'
  },
  NG: {
    height: '10px',
    backgroundPosition: '-3708px 0px'
  },
  NI: {
    height: '12px',
    backgroundPosition: '-3730px 0px'
  },
  NL: {
    height: '14px',
    backgroundPosition: '-3752px 0px'
  },
  NO: {
    height: '15px',
    backgroundPosition: '-3774px 0px'
  },
  NP: {
    width: '13px',
    height: '15px',
    backgroundPosition: '-3796px 0px'
  },
  NR: {
    height: '10px',
    backgroundPosition: '-3811px 0px'
  },
  NU: {
    height: '10px',
    backgroundPosition: '-3833px 0px'
  },
  NZ: {
    height: '10px',
    backgroundPosition: '-3855px 0px'
  },
  OM: {
    height: '10px',
    backgroundPosition: '-3877px 0px'
  },
  PA: {
    height: '14px',
    backgroundPosition: '-3899px 0px'
  },
  PE: {
    height: '14px',
    backgroundPosition: '-3921px 0px'
  },
  PF: {
    height: '14px',
    backgroundPosition: '-3943px 0px'
  },
  PG: {
    height: '15px',
    backgroundPosition: '-3965px 0px'
  },
  PH: {
    height: '10px',
    backgroundPosition: '-3987px 0px'
  },
  PK: {
    height: '14px',
    backgroundPosition: '-4009px 0px'
  },
  PL: {
    height: '13px',
    backgroundPosition: '-4031px 0px'
  },
  PM: {
    height: '14px',
    backgroundPosition: '-4053px 0px'
  },
  PN: {
    height: '10px',
    backgroundPosition: '-4075px 0px'
  },
  PR: {
    height: '14px',
    backgroundPosition: '-4097px 0px'
  },
  PS: {
    height: '10px',
    backgroundPosition: '-4119px 0px'
  },
  PT: {
    height: '14px',
    backgroundPosition: '-4141px 0px'
  },
  PW: {
    height: '13px',
    backgroundPosition: '-4163px 0px'
  },
  PY: {
    height: '11px',
    backgroundPosition: '-4185px 0px'
  },
  QA: {
    height: '8px',
    backgroundPosition: '-4207px 0px'
  },
  RE: {
    height: '14px',
    backgroundPosition: '-4229px 0px'
  },
  RO: {
    height: '14px',
    backgroundPosition: '-4251px 0px'
  },
  RS: {
    height: '14px',
    backgroundPosition: '-4273px 0px'
  },
  RU: {
    height: '14px',
    backgroundPosition: '-4295px 0px'
  },
  RW: {
    height: '14px',
    backgroundPosition: '-4317px 0px'
  },
  SA: {
    height: '14px',
    backgroundPosition: '-4339px 0px'
  },
  SB: {
    height: '10px',
    backgroundPosition: '-4361px 0px'
  },
  SC: {
    height: '10px',
    backgroundPosition: '-4383px 0px'
  },
  SD: {
    height: '10px',
    backgroundPosition: '-4405px 0px'
  },
  SE: {
    height: '13px',
    backgroundPosition: '-4427px 0px'
  },
  SG: {
    height: '14px',
    backgroundPosition: '-4449px 0px'
  },
  SH: {
    height: '10px',
    backgroundPosition: '-4471px 0px'
  },
  SI: {
    height: '10px',
    backgroundPosition: '-4493px 0px'
  },
  SJ: {
    height: '15px',
    backgroundPosition: '-4515px 0px'
  },
  SK: {
    height: '14px',
    backgroundPosition: '-4537px 0px'
  },
  SL: {
    height: '14px',
    backgroundPosition: '-4559px 0px'
  },
  SM: {
    height: '15px',
    backgroundPosition: '-4581px 0px'
  },
  SN: {
    height: '14px',
    backgroundPosition: '-4603px 0px'
  },
  SO: {
    height: '14px',
    backgroundPosition: '-4625px 0px'
  },
  SR: {
    height: '14px',
    backgroundPosition: '-4647px 0px'
  },
  SS: {
    height: '10px',
    backgroundPosition: '-4669px 0px'
  },
  ST: {
    height: '10px',
    backgroundPosition: '-4691px 0px'
  },
  SV: {
    height: '12px',
    backgroundPosition: '-4713px 0px'
  },
  SX: {
    height: '14px',
    backgroundPosition: '-4735px 0px'
  },
  SY: {
    height: '14px',
    backgroundPosition: '-4757px 0px'
  },
  SZ: {
    height: '14px',
    backgroundPosition: '-4779px 0px'
  },
  TA: {
    height: '10px',
    backgroundPosition: '-4801px 0px'
  },
  TC: {
    height: '10px',
    backgroundPosition: '-4823px 0px'
  },
  TD: {
    height: '14px',
    backgroundPosition: '-4845px 0px'
  },
  TF: {
    height: '14px',
    backgroundPosition: '-4867px 0px'
  },
  TG: {
    height: '13px',
    backgroundPosition: '-4889px 0px'
  },
  TH: {
    height: '14px',
    backgroundPosition: '-4911px 0px'
  },
  TJ: {
    height: '10px',
    backgroundPosition: '-4933px 0px'
  },
  TK: {
    height: '10px',
    backgroundPosition: '-4955px 0px'
  },
  TL: {
    height: '10px',
    backgroundPosition: '-4977px 0px'
  },
  TM: {
    height: '14px',
    backgroundPosition: '-4999px 0px'
  },
  TN: {
    height: '14px',
    backgroundPosition: '-5021px 0px'
  },
  TO: {
    height: '10px',
    backgroundPosition: '-5043px 0px'
  },
  TR: {
    height: '14px',
    backgroundPosition: '-5065px 0px'
  },
  TT: {
    height: '12px',
    backgroundPosition: '-5087px 0px'
  },
  TV: {
    height: '10px',
    backgroundPosition: '-5109px 0px'
  },
  TW: {
    height: '14px',
    backgroundPosition: '-5131px 0px'
  },
  TZ: {
    height: '14px',
    backgroundPosition: '-5153px 0px'
  },
  UA: {
    height: '14px',
    backgroundPosition: '-5175px 0px'
  },
  UG: {
    height: '14px',
    backgroundPosition: '-5197px 0px'
  },
  UM: {
    height: '11px',
    backgroundPosition: '-5219px 0px'
  },
  US: {
    height: '11px',
    backgroundPosition: '-5241px 0px'
  },
  UY: {
    height: '14px',
    backgroundPosition: '-5263px 0px'
  },
  UZ: {
    height: '10px',
    backgroundPosition: '-5285px 0px'
  },
  VA: {
    width: '15px',
    height: '15px',
    backgroundPosition: '-5307px 0px'
  },
  VC: {
    height: '14px',
    backgroundPosition: '-5324px 0px'
  },
  VE: {
    height: '14px',
    backgroundPosition: '-5346px 0px'
  },
  VG: {
    height: '10px',
    backgroundPosition: '-5368px 0px'
  },
  VI: {
    height: '14px',
    backgroundPosition: '-5390px 0px'
  },
  VN: {
    height: '14px',
    backgroundPosition: '-5412px 0px'
  },
  VU: {
    height: '12px',
    backgroundPosition: '-5434px 0px'
  },
  WF: {
    height: '14px',
    backgroundPosition: '-5456px 0px'
  },
  WS: {
    height: '10px',
    backgroundPosition: '-5478px 0px'
  },
  XK: {
    height: '15px',
    backgroundPosition: '-5500px 0px'
  },
  YE: {
    height: '14px',
    backgroundPosition: '-5522px 0px'
  },
  YT: {
    height: '14px',
    backgroundPosition: '-5544px 0px'
  },
  ZA: {
    height: '14px',
    backgroundPosition: '-5566px 0px'
  },
  ZM: {
    height: '14px',
    backgroundPosition: '-5588px 0px'
  },
  ZW: {
    height: '10px',
    backgroundPosition: '-5610px 0px'
  }
};

type ParsedInputProps = {
  country?: CountryCode;
  input?: string;
  value: string;
};

const parsePhoneNumber = (
  value = '',
  passedMetadata: typeof metadata,
  country?: CountryCode
): PhoneNumber | undefined =>
  country
    ? parsePhoneNumberFromString(value, country, passedMetadata)
    : parsePhoneNumberFromString(value, passedMetadata);

const parseInput = (
  countries: string[],
  value?: string,
  previousValue?: string,
  country?: CountryCode,
  defaultCountry?: CountryCode
): ParsedInputProps =>
  baseParseInput(
    value,
    previousValue,
    country,
    defaultCountry,
    countries,
    true,
    false,
    metadata
  );

const localizeNumber = (
  countries: string[],
  country?: CountryCode,
  defaultCountry?: CountryCode,
  value = ''
): ParsedInputProps => {
  const { input, value: newValue } = parseInput(
    countries,
    value,
    parseIncompletePhoneNumber(value),
    country,
    defaultCountry
  );
  let newCountry: CountryCode | undefined;
  const phoneNumber = parsePhoneNumber(newValue, metadata);

  let newInput = input;
  if (phoneNumber) {
    newCountry = newValue ? phoneNumber.country : defaultCountry;
    if (newCountry) {
      newInput = phoneNumber.formatNational();
    }
  } else if (!newValue) {
    newCountry = defaultCountry;
  }

  return { country: newCountry, input: newInput, value: newValue };
};

const getStyle = ({ country }: { country: string }) => {
  const style = flagStyles[country];
  const width = style.width ? style.width : '20px';
  const height = style.height ? style.height : '15px';

  return css`
    width: ${width};
    height: ${height};
    background-position: ${style.backgroundPosition};
  `;
};

const Flag = styled.span<{ country: string }>`
  display: inline-block;
  width: 20px;
  height: 15px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url(${flagImage});
  background-repeat: no-repeat;

  ${getStyle};

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2 / 1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${flagImage2x});
    background-size: 5630px 15px;
  }
`;

interface CountryInfo {
  name: string;
  shortName: string;
  code: string;
  suggested?: boolean;
}

interface I18nCountry {
  code?: string;
  name?: string;
  shortName?: string;
  suggested?: boolean;
  label?: string;
  options?: CountryInfo[];
}

function getCountries(i18nCountries: I18nCountry[]): string[] {
  let countries: string[] = [];
  i18nCountries.forEach((element) => {
    if (element.options) {
      const shortNames = element.options.map((c) => c.shortName);
      countries = [...countries, ...shortNames];
    } else {
      countries.push(element.shortName || '');
    }
  });
  return countries;
}

export const classlessSelector = 'input[type="tel"]';
export const classySelector = '.phone-input';

export const baseStyles = css``;

export interface Props {
  autoComplete?: string;
  defaultCountry?: CountryCode;
  shouldDisplayFlag?: boolean;
  type?: string;
}

export const PhoneInput = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & Props
>(
  (
    {
      shouldDisplayFlag = true,
      autoComplete = 'tel',
      defaultCountry = 'JP',
      type = 'tel',
      ...props
    },
    ref
  ) => {
    const countries: string[] = getCountries(allCountries);
    const inputRef = React.useRef<HTMLInputElement>();

    React.useEffect(() => {
      localizeNumber(countries, undefined, defaultCountry, '');
    }, [countries, defaultCountry]);

    return (
      <InputWithIcons {...props} ref={ref}>
        {shouldDisplayFlag && <Flag country={defaultCountry} />}
        <Input
          placeholder="09000789"
          autoComplete={autoComplete}
          type={type}
          ref={(inputElement: HTMLInputElement) => {
            if (typeof ref === 'function') {
              ref(inputElement);
            } else if (ref) {
              ref.current = inputElement;
            }
            inputRef.current = inputElement;
          }}
        />
        <Close size={16} />
      </InputWithIcons>
    );
  }
);
