Refer to the data structure in `./defaultContent.js` to learn what kind of data the component expects.

### Subcomponents

<div style="display: block; overflow: auto">
| Name                           | Import                                                         |
| ------------------------------ | -------------------------------------------------------------- |
| _ContentRow_                   | `import { ContentRow } from '@tablecheck/tablekit-footer';`               |
| _LeftContentColumns_           | `import { LeftContentColumns } from '@tablecheck/tablekit-footer';`       |
| _RightContentColumns_          | `import { RightContentColumns } from '@tablecheck/tablekit-footer';`      |
| _getColumnSpringProps_         | `import { getColumnSpringProps } from '@tablecheck/tablekit-footer';`     |
| _Column_                       | `import { Column } from '@tablecheck/tablekit-footer';`                   |
| _ColumnContent_                | `import { ColumnContent } from '@tablecheck/tablekit-footer';`            |
| _ColumnHeader_                 | `import { ColumnHeader } from '@tablecheck/tablekit-footer';`             |
| _ColumnItem_                   | `import { ColumnItem } from '@tablecheck/tablekit-footer';`               |
| _DEFAULT_MAX_WIDTH_            | `import { DEFAULT_MAX_WIDTH } from '@tablecheck/tablekit-footer';`        |
| _DEFAULT_MOBILE_BREAKPOINT_    | `import { DEFAULT_MOBILE_BREAKPOINT } from '@tablecheck/tablekit-footer';`|
| _NavigationLists_              | `import { NavigationLists } from '@tablecheck/tablekit-footer';`          |
| _SocialLinks_                  | `import { SocialLinks } from '@tablecheck/tablekit-footer';`              |
| _ActionButtons_                | `import { ActionButtons } from '@tablecheck/tablekit-footer';`            |
| _ActionButton_                 | `import { ActionButton } from '@tablecheck/tablekit-footer';`             |
| _FooterRow_                    | `import { FooterRow } from '@tablecheck/tablekit-footer';`                |
| _LogoSubtext_                  | `import { LogoSubtext } from '@tablecheck/tablekit-footer';`              |
| _RowLink_                      | `import { RowLink } from '@tablecheck/tablekit-footer';`                  |
</div>

### Example

```tsx
import { useState, useEffect, Fragment } from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Logo } from '@tablecheck/tablekit-logo';
import { Spinner } from '@tablecheck/tablekit-spinner';
import { Size, ThemeProvider } from '@tablecheck/tablekit-theme';
import { Icon } from '@tablecheck/tablekit-icon';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons/faChevronRight';
import {
  defaultNavigationLists,
  defaultActionButtons,
  defaultSocialLinks,
  defaultPolicyRows
} from './demoContent';
import {
  LeftContentColumns,
  RightContentColumns,
  SocialImage,
  ContentRow,
  ActionButton
} from './components/ContentRow/styled';
import { NavigationLists } from './components/ContentRow/NavigationLists';
import { SocialLinks } from './components/ContentRow/SocialLinks';
import { ActionButtons } from './components/ContentRow/ActionButtons';
import { FooterRow } from './components/FooterRow';
import { RowLink, LogoSubtext } from './components/FooterRow/styled';
import {
  ColumnItem,
  DEFAULT_MAX_WIDTH,
  DEFAULT_MOBILE_BREAKPOINT
} from './styled';

const CustomLogo = styled.img`
  width: 200px;
`;

const parseItems = (categoryItems) => {
  const newCatItems = [];

  categoryItems.map((catItem) => {
    const newItems = [];

    if (catItem.items) {
      const items = catItem.items.slice(0);

      items.map((item) => {
        if (item.label === '') item.label = item.value.story.name;
        if (item.value) item.value = item.value.cached_url;
        else if (item.link) item.value = item.link.cached_url;
        newItems.push(item);
      });
      catItem.items = newItems;
    } else if (catItem.value) {
      catItem.value = catItem.value.cached_url;
    }
    newCatItems.push(catItem);
  });

  return newCatItems;
};

const PresentationContainer = () => {
  const [data, setData] = useState();
  const [isApiData, setApiData] = useState(false);

  useEffect(() => {
    if (isApiData) {
      fetch(
        'https://staging-snap.tablecheck.com/website-assets/page-data/en/join/page-data.json'
      )
        .then((resp) => resp.json())
        .then((data) => {
          const newData = { ...data.result.pageContext.footer };

          newData.navigation_items = parseItems(
            data.result.pageContext.footer.navigation_items
          );
          newData.action_buttons = parseItems(
            data.result.pageContext.footer.action_buttons
          );
          newData.policy_link_rows = parseItems(
            data.result.pageContext.footer.policy_link_rows
          );
          newData.social_links = parseItems(
            data.result.pageContext.footer.social_links
          );
          console.log(newData);
          setData(newData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isApiData]);

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Toggle
          label="Use CMS API data"
          isChecked={isApiData}
          onChange={() => setApiData(!isApiData)}
        />
      </div>
      {isApiData && !data ? (
        <Spinner />
      ) : (
        <MemoryRouter>
          <Footer>
            <ContentRow
              maxWidth={DEFAULT_MAX_WIDTH}
              mobileBreakpoint={DEFAULT_MOBILE_BREAKPOINT}
            >
              <LeftContentColumns>
                <NavigationLists
                  navigationLists={
                    isApiData ? data.navigation_items : defaultNavigationLists
                  }
                  renderLink={({
                    _uid: itemId,
                    label,
                    value,
                    isRouterLink
                  }) => (
                    <ColumnItem
                      key={itemId}
                      component={isRouterLink ? Link : null}
                      href={!isRouterLink ? value : null}
                      to={isRouterLink ? value : null}
                      mobileBreakpoint={DEFAULT_MOBILE_BREAKPOINT}
                    >
                      {label}
                    </ColumnItem>
                  )}
                />
              </LeftContentColumns>
              <RightContentColumns>
                <ActionButtons
                  actionButtons={
                    isApiData ? data.action_buttons : defaultActionButtons
                  }
                  renderActionItem={({
                    _uid: id,
                    label,
                    value,
                    isRouterLink
                  }) => (
                    <ActionButton
                      key={id}
                      appearance="primary"
                      shape="circular"
                      iconAfter={<Icon icon={faChevronRight} />}
                      size={{
                        default: Size.Regular,
                        [`(min-width: ${DEFAULT_MOBILE_BREAKPOINT})`]:
                          Size.Large
                      }}
                      component={isRouterLink ? Link : null}
                      href={!isRouterLink ? value : null}
                      to={isRouterLink ? value : null}
                    >
                      {label}
                    </ActionButton>
                  )}
                />
                <SocialLinks
                  socialLinks={
                    isApiData ? data.social_links : defaultSocialLinks
                  }
                  renderSocialLink={({ _uid: id, icon, image, alt, value }) => (
                    <a key={id} href={value}>
                      {icon && (
                        <Icon icon={icon} color="white" size={Size.Xxlarge} />
                      )}
                      {image && <SocialImage src={image} alt={alt} />}
                    </a>
                  )}
                />
              </RightContentColumns>
            </ContentRow>
            <FooterRow
              policyRows={isApiData ? data.policy_link_rows : defaultPolicyRows}
              renderPolicyRowLink={({
                _uid: id,
                label,
                value,
                isRouterLink
              }) => (
                <RowLink
                  key={id}
                  mobileBreakpoint={DEFAULT_MOBILE_BREAKPOINT}
                  component={isRouterLink ? Link : null}
                  href={!isRouterLink ? value : null}
                  to={isRouterLink ? value : null}
                >
                  {label}
                </RowLink>
              )}
            >
              {isApiData ? (
                <Fragment>
                  <a href={data.footer_logo_link.cached_url}>
                    <CustomLogo
                      src={data.footer_logo[0].white}
                      alt={data.footer_logo.alt}
                    />
                  </a>
                  <LogoSubtext>{data.footer_logo[0].subtext}</LogoSubtext>
                </Fragment>
              ) : (
                <Fragment>
                  <a href="https://tablecheck.com">
                    <Logo symbolSize="32px" wordingSize="200px" isDarkTheme />
                  </a>
                  <LogoSubtext>
                    {`Copyright ©${new Date().getFullYear()} TableCheck`}
                  </LogoSubtext>
                </Fragment>
              )}
            </FooterRow>
          </Footer>
        </MemoryRouter>
      )}
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
