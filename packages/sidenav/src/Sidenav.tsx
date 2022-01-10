import { Size } from '@tablecheck/tablekit-theme';
import React, {
  createContext,
  HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { SideNavFooter } from './components/SideNavFooter';
import { SideNavBody } from './styled';
import {
  SideNavContextState,
  SideNavProviderProps,
  SideNavState
} from './types';

const getDefaultSideNavContext = (): SideNavContextState => ({
  isExpanded: true,
  shouldHideToggle: false,
  toggleStateLabels: {
    expand: 'Expand',
    collapse: 'Collapse'
  },
  toggleSideNav: () => {},
  size: Size.Regular,
  state: SideNavState.Expanded
});

export const SideNavContext = createContext<SideNavContextState>(
  getDefaultSideNavContext()
);

export const SideNavProvider = ({
  children,
  size = Size.Regular,
  state = SideNavState.Expanded,
  toggleStateLabels = {
    expand: 'Expand',
    collapse: 'Collapse'
  },
  shouldHideToggle = false
}: SideNavProviderProps): JSX.Element => {
  const [isExpanded, setExpandedState] = useState(
    state === SideNavState.Expanded
  );
  const toggleSideNav = useCallback(() => setExpandedState((exp) => !exp), []);
  useEffect(() => setExpandedState(state === SideNavState.Expanded), [state]);
  return (
    <SideNavContext.Provider
      value={{
        isExpanded,
        toggleStateLabels,
        size,
        state,
        toggleSideNav,
        shouldHideToggle
      }}
    >
      {children}
    </SideNavContext.Provider>
  );
};

export const useSideNav = (): SideNavContextState => useContext(SideNavContext);

export const SideNav = ({
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const {
    size,
    isExpanded,
    toggleSideNav,
    toggleStateLabels,
    shouldHideToggle
  } = useContext(SideNavContext);
  return (
    <SideNavBody {...restProps} isExpanded={isExpanded} size={size}>
      {children}
      {!shouldHideToggle && (
        <SideNavFooter
          isExpanded={isExpanded}
          size={size}
          toggleSideNav={toggleSideNav}
          toggleStateLabels={toggleStateLabels}
        />
      )}
    </SideNavBody>
  );
};
