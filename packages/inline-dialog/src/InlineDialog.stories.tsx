import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  Item,
  ItemGroup,
  ItemBorderPosition,
  ItemGroupOrientation
} from '@tablecheck/tablekit-item';
import { useState, Ref } from 'react';

import { InlineDialog, InlineDialogProps } from './index';

export default {
  title: 'Components/Inline Dialog',
  component: InlineDialog,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const StyledGroup = styled.div`
  display: flex;
  width: 450px;
  flex-wrap: wrap;
`;

const options = [
  { key: 'EN', label: 'English', subtitle: 'English' },
  { key: 'JA', label: '日本語', subtitle: 'Japanese' },
  { key: 'KO', label: '한국어', subtitle: 'Korean' },
  { key: 'CN', label: '简体中文', subtitle: 'Traditional Chinese' },
  { key: 'TW', label: '繁体中文', subtitle: 'Simplified Chinese' },
  { key: 'DE', label: 'Deutsch', subtitle: 'German' }
];

type ItemsGroupPropsTypes = {
  onClose?: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemsGroup: React.FC<ItemsGroupPropsTypes> = ({ onClose, setIsOpen }) => {
  const [option, setOption] = useState(options[0]);
  return (
    <StyledGroup>
      {options.map((item) => (
        <Item
          key={item.key}
          width="50%"
          isSelected={item.key === option.key}
          onClick={() => {
            setOption(item);
            if (onClose) onClose();
            if (setIsOpen) setIsOpen(false);
          }}
        >{`${item.label} (${item.subtitle})`}</Item>
      ))}
    </StyledGroup>
  );
};

type TemplatePropsTypes = InlineDialogProps<any>;

const Template: Story<TemplatePropsTypes> = ({ ...args }) => (
  <InlineDialog {...args}>{args.children}</InlineDialog>
);

type RenderTriggerTypes = {
  ref: Ref<any>;
  onClick: () => void;
  isOpen: boolean;
};

export const UsualInlineDialog = Template.bind({});
UsualInlineDialog.args = {
  renderTrigger: ({ onClick, isOpen, ref }: RenderTriggerTypes) => (
    <Item ref={ref} onClick={onClick} isSelected={isOpen} width="fit-content">
      Open Dialog
    </Item>
  ),
  children: <ItemsGroup />
};

const ClosingMenuTemplate: Story<TemplatePropsTypes> = (args) => (
  <InlineDialog {...args}>
    {({ onClose }) => <ItemsGroup onClose={onClose} />}
  </InlineDialog>
);

export const ClosingMenuDialog = ClosingMenuTemplate.bind({});
ClosingMenuDialog.args = {
  renderTrigger: ({ onClick, isOpen, ref }: RenderTriggerTypes) => (
    <Item ref={ref} onClick={onClick} isSelected={isOpen} width="fit-content">
      Should close menu after selected option
    </Item>
  )
};

const StyledMaxHeighContainer = styled.div`
  max-height: 100px;
  overflow-y: auto;
`;

const MaxHeighContainer = ({ children }: any) => (
  <StyledMaxHeighContainer>{children}</StyledMaxHeighContainer>
);

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  renderTrigger: ({ onClick, isOpen, ref }: RenderTriggerTypes) => (
    <Item ref={ref} onClick={onClick} isSelected={isOpen} width="fit-content">
      Dialog with max-height
    </Item>
  ),
  children: (
    <MaxHeighContainer>
      <ItemsGroup />
    </MaxHeighContainer>
  )
};

const StyledCustomTextContainer = styled.div`
  padding: 10px;
  max-width: 300px;
`;

const CustomTextContainer = ({ children }: any) => (
  <StyledCustomTextContainer>{children}</StyledCustomTextContainer>
);

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  renderTrigger: ({ onClick, isOpen, ref }: RenderTriggerTypes) => (
    <Item ref={ref} onClick={onClick} isSelected={isOpen} width="fit-content">
      Custom text
    </Item>
  ),
  children: (
    <CustomTextContainer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere mauris
      enim, id tincidunt diam ultrices a. Integer vitae dui ut elit mattis
      feugiat nec nec magna. Duis ornare ex a quam sollicitudin, eu tincidunt
      augue auctor.
    </CustomTextContainer>
  )
};

const fullWidthStyle = css`
  width: 100%;
`;

export const PopperContainer = Template.bind({});
PopperContainer.args = {
  popperProps: {
    strategy: 'absolute',
    placement: 'bottom-start'
  },
  containerCss: fullWidthStyle,
  renderTrigger: ({ onClick, isOpen, ref }: RenderTriggerTypes) => (
    <Item ref={ref} onClick={onClick} isSelected={isOpen}>
      Treat the popper container as a styled component
    </Item>
  ),
  children: (
    <ItemGroup title="expands to render trigger's width">
      <Item>foo</Item>
      <Item>bar</Item>
      <Item>fizz</Item>
      <Item>buzz</Item>
    </ItemGroup>
  )
};

const GroupedTemplate: Story<TemplatePropsTypes> = (args) => {
  const icons = [
    [<Icon icon={faGlobe} />, 1],
    [<Icon icon={faQuestionCircle} />, 2]
  ];
  return (
    <ItemGroup
      title="Horizontal grouped trigger buttons"
      orientation={ItemGroupOrientation.Horizontal}
    >
      {icons.map((item) => (
        <InlineDialog
          {...args}
          key={item[1] as any}
          renderTrigger={({ onClick, isOpen, ref }) => (
            <Item
              ref={ref}
              onClick={onClick}
              isSelected={isOpen}
              elemBefore={item[0]}
              borderPosition={ItemBorderPosition.Top}
              shouldCenterAlignment
              width="fit-content"
            />
          )}
        >
          <ItemsGroup />
        </InlineDialog>
      ))}
    </ItemGroup>
  );
};

export const HorizontalGrouped = GroupedTemplate.bind({});

const PositionTemplate: Story<JSX.Element> = (args) => {
  const positions = ['left', 'top', 'top-start', 'right'];
  return (
    <ItemGroup
      title="With different positions"
      orientation={ItemGroupOrientation.Horizontal}
    >
      {positions.map((item) => (
        <InlineDialog
          {...args}
          key={item}
          popperProps={{ placement: `${item}` as any }}
          renderTrigger={({ onClick, isOpen, ref }) => (
            <Item
              ref={ref}
              onClick={onClick}
              isSelected={isOpen}
              shouldCenterAlignment
              width="fit-content"
            >
              {item}
            </Item>
          )}
        >
          <Item>{`${item} dialog`}</Item>
        </InlineDialog>
      ))}
    </ItemGroup>
  );
};

export const DifferentPositions = PositionTemplate.bind({});

const ControllableTemplate: Story = (args) => {
  const [isOpenControllableDialog, setIsOpenConrollableDialog] =
    useState(false);
  const [
    isOpenControllableDialogWithClosingAfterSelect,
    setIsOpenControllableDialogWithClosingAfterSelect
  ] = useState(false);

  return (
    <ItemGroup
      {...args}
      title="Controllable inline dialog"
      orientation={ItemGroupOrientation.Horizontal}
      hasIndent
    >
      <InlineDialog
        {...args}
        isOpen={isOpenControllableDialog}
        onClose={() => setIsOpenConrollableDialog(false)}
        renderTrigger={({ ref }) => (
          <Item
            ref={ref}
            onClick={() =>
              setIsOpenConrollableDialog(!isOpenControllableDialog)
            }
            isSelected={isOpenControllableDialog}
            shouldCenterAlignment
            width="fit-content"
          >
            Open dialog
          </Item>
        )}
      >
        <ItemsGroup />
      </InlineDialog>
      <InlineDialog
        {...args}
        isOpen={isOpenControllableDialogWithClosingAfterSelect}
        onClose={() => setIsOpenControllableDialogWithClosingAfterSelect(false)}
        renderTrigger={({ ref }) => (
          <Item
            ref={ref}
            onClick={() =>
              setIsOpenControllableDialogWithClosingAfterSelect(
                !isOpenControllableDialogWithClosingAfterSelect
              )
            }
            isSelected={isOpenControllableDialogWithClosingAfterSelect}
            width="fit-content"
          >
            Should close menu after selected option
          </Item>
        )}
      >
        <ItemsGroup
          setIsOpen={setIsOpenControllableDialogWithClosingAfterSelect}
        />
      </InlineDialog>
    </ItemGroup>
  );
};

export const ControllableDialog = ControllableTemplate.bind({});
ControllableDialog.args = {
  isControllable: true
};
