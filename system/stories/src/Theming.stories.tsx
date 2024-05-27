import { Copy } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import {
  lightColorsObject,
  brandColorsObject,
  utilityColorsObject
} from '@tablecheck/tablekit-core';
import { getConfigDefault } from '@tablecheck/tablekit-react';
import groupBy from 'lodash/groupBy';
import * as React from 'react';

export default {
  title: 'Theming/Colors',
  parameters: {
    variants: [1, 2, 3, 4]
  }
} as Meta;

const PaletteWrapper = styled.button`
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-self: stretch;
  gap: var(--spacing-l3);
  align-items: center;
  padding-inline-end: var(--spacing-l4);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  &:hover {
    background-color: var(--surface-hover);
    box-shadow: var(--elevation-medium);
  }
`;

function PaletteColor({ color }: { color: string }) {
  return (
    <PaletteWrapper
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(`var(--${color})`);
      }}
    >
      <span
        style={{
          backgroundColor: `var(--${color})`,
          width: '60px',
          height: '60px',
          borderTopLeftRadius: 'var(--border-radius-small)',
          borderBottomLeftRadius: 'var(--border-radius-small)',
          borderRight: '1px solid var(--border)'
        }}
      />
      <span style={{ textAlign: 'start', whiteSpace: 'nowrap' }}>
        var(--{color})
      </span>
      <Copy size={getConfigDefault('iconSize')} />
    </PaletteWrapper>
  );
}

export const Palette: StoryFn = () => (
  <>
    <h2>Themed Colors</h2>
    {Object.entries(
      groupBy(Object.keys(lightColorsObject), (key) => key.split('-')[0])
    ).map(([groupKey, keys]) => (
      <React.Fragment key={groupKey}>
        <h4>{groupKey}</h4>
        {keys.map((key) => (
          <PaletteColor key={key} color={key} />
        ))}
      </React.Fragment>
    ))}
    <h2>Brand Colors</h2>
    {Object.keys(brandColorsObject).map((key) => (
      <PaletteColor key={key} color={key} />
    ))}
    <h2>Utility Colors</h2>
    {Object.keys(utilityColorsObject).map((key) => (
      <PaletteColor key={key} color={key} />
    ))}
  </>
);
