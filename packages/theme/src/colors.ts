import { hexToRgba } from '@tablecheck/tablekit-utils';

import { LevelConst } from './types';

export const PURPLE: LevelConst = {
  L1: '#EAE6F4',
  L2: '#C7B6F1',
  L3: '#A988EC',
  L4: '#9464E3',
  L5: '#7935D2',
  L6: '#6B20BF',
  L7: '#5C11A6',
  L8: '#4A0787',
  L9: '#370466'
};

export const YELLOW: LevelConst = {
  L1: '#FFF7CC',
  L2: '#FEED9B',
  L3: '#FBE06C',
  L4: '#F7D147',
  L5: '#F2C02A',
  L6: '#EAAD15',
  L7: '#E0990B',
  L8: '#D18800',
  L9: '#BC7401'
};

export const RED: LevelConst = {
  L1: '#FEEBE7',
  L2: '#FBC4BB',
  L3: '#EF877A',
  L4: '#E85B50',
  L5: '#DF3730',
  L6: '#CE1F1B',
  L7: '#B40C0D',
  L8: '#8B0217',
  L9: '#56000D'
};

export const BLUE: LevelConst = {
  L1: '#E2F2FE',
  L2: '#B3D7FF',
  L3: '#86BAFD',
  L4: '#5192FC',
  L5: '#276BE5',
  L6: '#0A4BC9',
  L7: '#0034A4',
  L8: '#032877',
  L9: '#001A52'
};

export const GREEN: LevelConst = {
  L1: '#E8F7D9',
  L2: '#CEF3B9',
  L3: '#A7DF90',
  L4: '#79CD60',
  L5: '#55B937',
  L6: '#3D9B31',
  L7: '#327529',
  L8: '#235922',
  L9: '#1E431E'
};

export const AQUA: LevelConst = {
  L1: '#E4F1F1',
  L2: '#B6ECED',
  L3: '#85D9E0',
  L4: '#58C4D5',
  L5: '#31ADC6',
  L6: '#1D8DAA',
  L7: '#0E708B',
  L8: '#07536A',
  L9: '#033A49'
};

export const PINK: LevelConst = {
  L1: '#FDEDEF',
  L2: '#FCCFDA',
  L3: '#F6A7BB',
  L4: '#F4809D',
  L5: '#E75A82',
  L6: '#DD3C69',
  L7: '#BE2D53',
  L8: '#962241',
  L9: '#68182D'
};

export const ORANGE: LevelConst = {
  L1: '#FFEDE5',
  L2: '#FFCFB3',
  L3: '#FDA968',
  L4: '#FA893D',
  L5: '#F3671B',
  L6: '#E25103',
  L7: '#BD3C00',
  L8: '#942F00',
  L9: '#611D00'
};

export const GRAY: LevelConst = {
  L1: '#F8F8F8',
  L2: '#F2F2F2',
  L3: '#E4E4E4',
  L4: '#D2D2D2',
  L5: '#939393',
  L6: '#757575',
  L7: '#575757',
  L8: '#323232',
  L9: '#212121'
};

export const GRAY_TRANSLUCENT: LevelConst = {
  L1: 'rgba(0, 0, 0, 0.03)',
  L2: 'rgba(0, 0, 0, 0.05)',
  L3: 'rgba(0, 0, 0, 0.11)',
  L4: 'rgba(0, 0, 0, 0.18)',
  L5: 'rgba(0, 0, 0, 0.42)',
  L6: 'rgba(0, 0, 0, 0.54)',
  L7: 'rgba(0, 0, 0, 0.66)',
  L8: 'rgba(0, 0, 0, 0.80)',
  L9: 'rgba(0, 0, 0, 0.87)'
};

export const WHITE_TRANSLUCENT: LevelConst = {
  L1: 'rgba(255, 255, 255, 0.03)',
  L2: 'rgba(255, 255, 255, 0.05)',
  L3: 'rgba(255, 255, 255, 0.11)',
  L4: 'rgba(255, 255, 255, 0.18)',
  L5: 'rgba(255, 255, 255, 0.42)',
  L6: 'rgba(255, 255, 255, 0.54)',
  L7: 'rgba(255, 255, 255, 0.66)',
  L8: 'rgba(255, 255, 255, 0.80)',
  L9: 'rgba(255, 255, 255, 0.87)'
};

export const PURPLE_TRANSLUCENT: LevelConst = {
  L1: hexToRgba(PURPLE.L5, 0.1),
  L2: hexToRgba(PURPLE.L5, 0.2),
  L3: hexToRgba(PURPLE.L5, 0.3),
  L4: hexToRgba(PURPLE.L5, 0.4),
  L5: hexToRgba(PURPLE.L5, 0.5),
  L6: hexToRgba(PURPLE.L5, 0.6),
  L7: hexToRgba(PURPLE.L5, 0.7),
  L8: hexToRgba(PURPLE.L5, 0.8),
  L9: hexToRgba(PURPLE.L5, 0.9)
};
