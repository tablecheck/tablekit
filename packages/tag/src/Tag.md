### Examples

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import xor from 'lodash/xor';
import cloneDeep from 'lodash/cloneDeep';
import {
  ZIndex,
  DARK_COLORS,
  CLASSIC_COLORS,
  COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Select } from '@tablecheck/tablekit-select';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import {
  tagDarkTheme,
  tagClassicTheme,
  tagThemeNamespace,
  TagAppearance,
  TagSize
} from './index';

const tags = [
  { label: 'Breakfast', key: 'breakfast' },
  { label: 'Lunch', key: 'lunch' },
  { label: 'Tea', key: 'tea' },
  { label: 'Dinner', key: 'dinner' },
  { label: 'Night', key: 'night' }
];

const colorOptions = [
  { label: 'Red', value: COLORS.RED.L5 },
  { label: 'Purple', value: COLORS.PURPLE.L5 },
  { label: 'Blue', value: COLORS.BLUE.L5 },
  { label: 'Yellow', value: COLORS.YELLOW.L5 },
  { label: 'Green', value: COLORS.GREEN.L5 }
];

const sizeOptions = [
  { label: 'Regular', value: TagSize.Regular },
  { label: 'Small', value: TagSize.Small }
];

const appearancesOptions = [
  {
    label: 'Outline',
    value: TagAppearance.Outline
  },
  { label: 'Solid', value: TagAppearance.Solid }
];

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [tagThemeNamespace]: tagDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [tagThemeNamespace]: tagClassicTheme
};

const PresentationModule = () => {
  const [selectedTags, selectTags] = useState(['breakfast', 'tea']);
  const [coloredSelectedTags, selectColoredTags] = useState([
    'breakfast',
    'lunch',
    'tea'
  ]);
  const [size, setSize] = useState(TagSize.Regular);
  const [appearance, setAppearance] = useState('outline');
  const [isDarkTheme, toggleTheme] = useState(false);
  const [tagColor, changeColor] = useState(colorOptions[0].value);
  const toggleTags = (event) => {
    const newSelectedTags = cloneDeep(selectedTags);
    selectTags(xor(newSelectedTags, [event.currentTarget.name]));
  };
  const toggleColoredTags = (event) => {
    const newColoredSelectedTags = cloneDeep(coloredSelectedTags);
    selectColoredTags(xor(newColoredSelectedTags, [event.currentTarget.name]));
  };

  return (
    <div>
      <ItemGroup orientation="horizontal" hasIndent>
        <div>
          <div>Size of the tag</div>
          <Select
            options={sizeOptions}
            value={sizeOptions.find(({ value }) => value === size)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setSize(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
        <div>
          <div>Appearance of the tag</div>
          <Select
            options={appearancesOptions}
            value={appearancesOptions.find(({ value }) => value === appearance)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setAppearance(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
      </ItemGroup>
      <ItemGroup orientation="vertical" hasIndent title="Default styles">
        <div>
          <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
            Use dark theme
          </Checkbox>
        </div>
      </ItemGroup>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup orientation="horizontal" hasIndent>
            {tags.map(({ label, key }) => (
              <Tag
                key={label}
                name={key}
                appearance={appearance}
                isSelected={selectedTags.indexOf(key) !== -1}
                size={size}
                onClick={toggleTags}
              >
                {label}
              </Tag>
            ))}
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
      <ItemGroup orientation="vertical" hasIndent title="With custom tag color">
        <div>
          <div>Select a tag color</div>
          <Select
            options={colorOptions}
            value={colorOptions.find(({ value }) => value === tagColor)}
            menuPortalTarget={document.body}
            onChange={({ value }) => changeColor(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
      </ItemGroup>
      <br />
      <ItemGroup orientation="horizontal" hasIndent>
        {tags.map(({ label, key }) => (
          <Tag
            key={label}
            name={key}
            color={tagColor}
            appearance={appearance}
            isSelected={coloredSelectedTags.indexOf(key) !== -1}
            size={size}
            onClick={toggleColoredTags}
          >
            {label}
          </Tag>
        ))}
      </ItemGroup>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
