/**
 * There isn't an way of supporting this where we cannot install the dependency due
 * to pro packages being non-public. When you do have access to the pro packages this should
 * work as intended. All these should also be pinned as external by the rollup package so we just
 * need to disable typescript's checking to get a "successful" build.
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { faChevronDoubleLeft } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleLeft';
// @ts-ignore
import { faChevronDoubleRight } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleRight';
// @ts-ignore
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons/faChevronLeft';
// @ts-ignore
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons/faChevronRight';
// @ts-ignore
import { faCircle } from '@fortawesome/pro-regular-svg-icons/faCircle';
// @ts-ignore
import { faGlobe } from '@fortawesome/pro-regular-svg-icons/faGlobe';
// @ts-ignore
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
// @ts-ignore
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
// @ts-ignore
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
// @ts-ignore
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons/faCheckCircle';
// @ts-ignore
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
// @ts-ignore
import { faChevronUp } from '@fortawesome/pro-solid-svg-icons/faChevronUp';
// @ts-ignore
import { faExclamationCircle } from '@fortawesome/pro-solid-svg-icons/faExclamationCircle';
// @ts-ignore
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons/faExclamationTriangle';
// @ts-ignore
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
// @ts-ignore
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
// @ts-ignore
import { faMinus } from '@fortawesome/pro-solid-svg-icons/faMinus';
// @ts-ignore
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
// @ts-ignore
import { faUser } from '@fortawesome/pro-solid-svg-icons/faUser';
/* eslint-enable @typescript-eslint/ban-ts-comment */
import { config } from '@tablecheck/tablekit-icon';

config({
  close: faTimes,
  danger: faExclamationCircle,
  success: faCheckCircle,
  warning: faExclamationTriangle,
  primary: faInfoCircle,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  chevronDoubleLeft: faChevronDoubleLeft,
  chevronDoubleRight: faChevronDoubleRight,
  chevronDown: faChevronDown,
  chevronUp: faChevronUp,
  search: faSearch,
  openEye: faEye,
  closedEye: faEyeSlash,
  globe: faGlobe,
  user: faUser,
  power: faCircle,
  minus: faMinus,
  confirm: faCheck
});

export const iconConfig = config;
