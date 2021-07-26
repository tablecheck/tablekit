import {
  IS_CLICKED_ATTR,
  NavLine,
  TabItem,
  TabsNavigation,
  TabsWrapper
} from './styled';
import { TabsAlignment, TabsProps } from './types';

/*
 * Note about the usage of JS "classList" in this component.
 *
 * As this component should be essentially stateless and we can handle all the
 * styling via the pseudo-styles of :hover :active etc there is one edge case
 * that requires some extra javascript work. This case is in the styling of :focus.
 * In the browser :focus will be active if you focus via keyboard or mouse/touch.
 * There is a proposal to add :focus-visible that will replace this logic.
 *
 * So to avoid both the extra renders from state updates and the extra work
 * @emotion would need to change the stylesheets+classes from these state updates
 * we are simply using a basic class restrict when :focus styling is applied.
 *
 * As tab buttons can quite often be used in very large amounts this is a
 * reasonable trade off against being a complete React way.
 */
let isKeyboardInteraction = false;

export const Tabs = ({
  className,
  align = TabsAlignment.Left,
  tabs,
  currentTab,
  setCurrentTab,
  ...restProps
}: TabsProps): JSX.Element => (
  <TabsWrapper {...restProps} className={className}>
    <TabsNavigation align={align}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.key;
        return (
          <TabItem
            aria-selected={isActive}
            data-value={tab.key}
            id={tab.id}
            name={tab.name}
            key={tab.key}
            isActive={isActive}
            disabled={tab.isDisabled}
            onClick={(event) => {
              if (isKeyboardInteraction) return;
              event.currentTarget.dataset[IS_CLICKED_ATTR] = 'true';
              if (!tab.isDisabled) setCurrentTab(tab.key);
            }}
            onKeyDown={() => {
              isKeyboardInteraction = true;
            }}
            onMouseDown={(event) => {
              event.currentTarget.dataset[IS_CLICKED_ATTR] = 'true';
              isKeyboardInteraction = false;
            }}
            onBlur={(event) => {
              delete event.currentTarget.dataset[IS_CLICKED_ATTR];
            }}
          >
            {tab.content}
            {isActive && <NavLine />}
          </TabItem>
        );
      })}
    </TabsNavigation>
  </TabsWrapper>
);
