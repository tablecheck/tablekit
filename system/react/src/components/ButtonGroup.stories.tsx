import { FavoriteFilled } from '@carbon/icons-react';
import { Meta, Story } from '@storybook/react';

import { ButtonGroup, classySelector } from './ButtonGroup';

const contentVariants = [
  'Default',
  'Hover',
  'Focus',
  'Focus Before',
  'Focus After',
  'Active'
] as const;

export default {
  title: 'TableKit/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    classySelector,
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
} as Meta;

export const AllVariants: Story = () => (
  <>
    {[-1, 0, 1, 2].map((selectedIndex) =>
      contentVariants.map((variant) => (
        <ButtonGroup>
          {['icon', 'text', 'icon+text'].map((type, index) => {
            let dataPseudo = 'default';
            switch (variant) {
              case 'Default':
              case 'Hover':
              case 'Active':
                if (selectedIndex === -1 && index === 1) {
                  dataPseudo = variant.toLowerCase();
                }
                break;
              case 'Focus After':
              case 'Focus Before':
              case 'Focus': {
                if (
                  selectedIndex !== -1 &&
                  ((variant === 'Focus' && index === selectedIndex) ||
                    (variant === 'Focus Before' &&
                      index === selectedIndex - 1) ||
                    (variant === 'Focus After' && index === selectedIndex + 1))
                ) {
                  dataPseudo = 'focus';
                } else if (
                  selectedIndex === -1 &&
                  ((variant === 'Focus' && index === 1) ||
                    (variant === 'Focus Before' && index === 0) ||
                    (variant === 'Focus After' && index === 2))
                ) {
                  dataPseudo = 'focus';
                }
                break;
              }
            }
            return (
              <button
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${selectedIndex}_${type}_${variant}_${index}`}
                type="button"
                data-pseudo={dataPseudo}
                data-selected={index === selectedIndex}
              >
                {['icon', 'icon+text'].includes(type) ? (
                  <FavoriteFilled size={20} />
                ) : null}
                {['text', 'icon+text'].includes(type) ? 'Text' : null}
              </button>
            );
          })}
        </ButtonGroup>
      ))
    )}
  </>
);
