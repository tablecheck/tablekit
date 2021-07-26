import { Size } from '@tablecheck/tablekit-theme';
import * as React from 'react';

import {
  ItemContent,
  ElementAfter,
  ElementBefore,
  ItemBaseComponent,
  ItemBaseHtml
} from './styled/Item';
import {
  BaseItemProps,
  ItemBorderPosition,
  ItemContainerProps,
  ItemInteractionState,
  ItemProps
} from './types';

const ItemContainer = React.forwardRef(
  (
    { component, ...otherProps }: ItemContainerProps<'span'>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    let ResolvedComponent = ItemBaseHtml;
    if (component) {
      ResolvedComponent = ItemBaseComponent.withComponent(
        component as unknown as React.ComponentType
      );
    } else if (otherProps.href) {
      ResolvedComponent = ItemBaseHtml.withComponent('a');
    }
    return <ResolvedComponent ref={ref} {...otherProps} />;
  }
);

interface ItemTypeBase extends React.Component {
  <
    Component extends React.ElementType,
    ItemElement extends HTMLElement = HTMLSpanElement
  >(
    props: ItemProps<Component> & { ref?: React.Ref<ItemElement> }
  ): React.ReactElement | null;

  <ItemElement extends HTMLElement = HTMLSpanElement>(
    props: React.PropsWithRef<BaseItemProps> & React.HTMLAttributes<ItemElement>
  ): React.ReactElement | null;
}

interface ItemWithComponent<Component extends React.ElementType>
  extends React.Component {
  (
    props: Omit<
      React.ComponentPropsWithRef<Component> & BaseItemProps,
      'component'
    >
  ): React.ReactElement | null;
}

interface ItemType extends ItemTypeBase {
  withComponent<NewComponent extends React.ElementType>(
    newComponent: NewComponent
  ): ItemWithComponent<NewComponent>;
}

export const Item = React.forwardRef<HTMLElement, ItemProps<'span'>>(
  (
    {
      children,
      elemAfter,
      elemBefore,
      isDisabled = false,
      isSelected,
      isHidden = false,
      href,
      to,
      borderPosition = ItemBorderPosition.Left,
      size = Size.Regular,
      role = 'button',
      onClick,
      onKeyDown,
      shouldCenterAlignment = false,
      onMouseDown,
      useInteractionStateAsClass,
      tabIndex = 0,
      ...rest
    }: ItemProps<'span'>,
    ref
  ) => {
    let interactionState = ItemInteractionState.Default;
    if (isHidden) {
      interactionState = ItemInteractionState.Hidden;
    } else if (isDisabled) {
      interactionState = ItemInteractionState.Disabled;
    } else if (isSelected) {
      interactionState = ItemInteractionState.Selected;
    }
    const interactionProps = {
      interactionState,
      useVariantAsClass: useInteractionStateAsClass
        ? 'interactionState'
        : undefined
    };

    const patchedEventHandlers = {
      onClick: (event: React.MouseEvent<HTMLBaseElement>) => {
        if (event.defaultPrevented) {
          return;
        }
        if (!isDisabled && onClick) {
          onClick(event);
        }
      },
      onMouseDown: (event: React.MouseEvent<HTMLBaseElement>) => {
        // We want to prevent the item from getting focus when clicked
        event.preventDefault();
        // but we still need to blur other content
        const currentFocused = document.querySelector(':focus') as HTMLElement;
        if (currentFocused && currentFocused) {
          currentFocused.blur();
        }

        if (!isDisabled && onMouseDown) {
          onMouseDown(event);
        }
      },
      onKeyDown: (event: React.KeyboardEvent<HTMLBaseElement>) => {
        if (event.defaultPrevented) {
          return;
        }
        if (!isDisabled && onKeyDown) {
          onKeyDown(event);
        }
      }
    };

    const hasOnlyIcon =
      !children &&
      ((!!elemBefore && !elemAfter) || (!!elemAfter && !elemBefore));

    return (
      <ItemContainer
        aria-disabled={isDisabled}
        role={role}
        isSelected={isSelected}
        isHidden={isHidden}
        isDisabled={isDisabled}
        tabIndex={isDisabled || isHidden ? -1 : tabIndex}
        ref={ref}
        shouldCenterAlignment={shouldCenterAlignment}
        href={isDisabled ? undefined : href}
        to={isDisabled ? undefined : to}
        hasOnlyIcon={hasOnlyIcon}
        size={size}
        borderPosition={borderPosition}
        {...rest}
        {...patchedEventHandlers}
        {...interactionProps}
      >
        {!!elemBefore && (
          <ElementBefore hasOnlyIcon={hasOnlyIcon} size={size}>
            {elemBefore}
          </ElementBefore>
        )}
        {!!children && (
          <ItemContent shouldCenterAlignment={shouldCenterAlignment}>
            {children}
          </ItemContent>
        )}
        {!!elemAfter && (
          <ElementAfter hasOnlyIcon={hasOnlyIcon} size={size}>
            {elemAfter}
          </ElementAfter>
        )}
      </ItemContainer>
    );
  }
) as unknown as ItemType;

Item.withComponent = function withComponent<
  Component extends React.ElementType
>(newComponent: Component): ItemWithComponent<Component> {
  // we have to disable typescript checking here or we risk JS Heap overflows on compliling
  // the function signature is correct so this should be fine as it's just a wrapper
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const UntypedItem = Item as unknown as React.ComponentType;
  return React.forwardRef<never, never>((props, ref) => (
    <UntypedItem {...props} ref={ref} component={newComponent} />
  )) as never;
};
