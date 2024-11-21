import { Copy } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import {
  lightColorsObject,
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
  color: var(--text);
  &:hover {
    background-color: var(--surface-hover);
    box-shadow: var(--elevation-medium);
  }
`;

const ColorPreview = styled.span`
  width: 60px;
  height: 60px;
  border-top-left-radius: var(--border-radius-small);
  border-bottom-left-radius: var(--border-radius-small);
  border-right: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TextGrid = styled.span`
  display: grid;
  grid-template: auto auto / auto 1fr;
  align-items: center;
  text-align: start;
  gap: 0 var(--spacing-l2);
  & > * {
    white-space: nowrap;
    display: inline-flex;
  }
`;

const ColorPreviewLabel = styled.small`
  color: var(--info-text);
  font-weight: bold;
  text-align: end;
  place-self: center end;
`;

function PaletteColor({
  color,
  background
}: {
  color: string;
  background: string;
}) {
  const backgroundVar = `var(--${background})`;
  const colorVar = `var(--${color})`;
  return (
    <PaletteWrapper
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(colorVar);
      }}
    >
      <ColorPreview
        style={{
          backgroundColor: backgroundVar,
          color: colorVar
        }}
      >
        Text
      </ColorPreview>
      {backgroundVar === colorVar ? (
        <span style={{ textAlign: 'start', whiteSpace: 'nowrap' }}>
          {colorVar}
        </span>
      ) : (
        <TextGrid>
          <ColorPreviewLabel>Text:</ColorPreviewLabel>
          <span>{colorVar}</span>
          <ColorPreviewLabel>Background:</ColorPreviewLabel>
          <span>{backgroundVar}</span>
        </TextGrid>
      )}
      <Copy size={getConfigDefault('iconSize')} />
    </PaletteWrapper>
  );
}

function getBackground(keys: string[], key: string) {
  if (key === 'text-secondary') return 'surface-secondary';
  if (key === 'primary-text') return 'primary';
  if (key.startsWith('text')) return 'surface';
  if (!key.endsWith('-text')) return key;
  const surface = keys.find((k) => k === key.replace('-text', '-surface'));
  const base = keys.find((k) => k === key.replace('-text', ''));
  return surface || base || key;
}

export const Palette: StoryFn = () => (
  <>
    <h2>Themed Colors</h2>
    {Object.entries(
      groupBy(Object.keys(lightColorsObject), (key) => {
        const [, rootKey] = key.match(/^(text|toggle)-?/) ?? [];
        if (rootKey) return rootKey;
        return key.replace(
          /-(active|focus|text|transparent|hover|surface|disabled|visited|border)/gi,
          ''
        );
      })
    ).map(([groupKey, keys]) => (
      <React.Fragment key={groupKey}>
        <h4>{groupKey.replace(/-/gi, ' ')}</h4>
        {keys.map((key) => (
          <PaletteColor
            key={key}
            color={key}
            background={getBackground(keys, key)}
          />
        ))}
      </React.Fragment>
    ))}
    <h2>Utility Colors</h2>
    {Object.entries(
      groupBy(Object.keys(utilityColorsObject), (key) =>
        key.match(/-[0-9]+$/gi) ? key.replace(/-[0-9]+$/gi, '') : 'basic'
      )
    ).map(([groupKey, keys]) => (
      <React.Fragment key={groupKey}>
        {groupKey !== 'basic' ? <h4>{groupKey.replace(/-/gi, ' ')}</h4> : null}
        {keys.map((key) => (
          <PaletteColor
            key={key}
            color={key}
            background={getBackground(keys, key)}
          />
        ))}
      </React.Fragment>
    ))}
  </>
);
