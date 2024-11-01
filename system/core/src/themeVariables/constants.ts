import { globalThemeVars as selectGlobalThemeVars } from '../components/Select';
import { css } from '../utils';

export const constants = css`
  :root {
    --zindex-card: 100;
    --zindex-dialog: 200;
    --zindex-sidenav: 300;
    --zindex-topnav: 310;
    --zindex-layer: 400;
    --zindex-blanket: 500;
    --zindex-modal: 510;
    --zindex-flag: 600;
    --zindex-spotlight: 700;
    --zindex-tooltip: 800;
    --tk-input-icon-size: 20px;
  }

  ${selectGlobalThemeVars}
`;
