import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { config } from '@tablecheck/tablekit-icon';

config({
  close: faTimes,
  danger: faExclamationCircle,
  success: faCheckCircle,
  warning: faExclamationTriangle,
  primary: faInfoCircle,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  chevronDoubleLeft: faChevronLeft,
  chevronDoubleRight: faChevronRight,
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
