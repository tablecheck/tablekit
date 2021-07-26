import { useTheme } from '@emotion/react';
import { Size } from '@tablecheck/tablekit-theme';
import * as React from 'react';

import { ButtonContent } from './styled/ButtonContent';
import { ButtonWrapper } from './styled/ButtonWrapper';
import { CircleWrapper } from './styled/CircleWrapper';
import { LoadingSpinner } from './styled/LoadingSpinner';
import {
  StyledButton,
  StyledLink,
  IconWrapper
} from './styled/getButtonStyles';
import {
  AnchorButtonProps,
  BaseButtonProps,
  ButtonProps,
  ComponentButtonProps,
  DerivedButtonProps,
  IconPropType
} from './types';
import { getButtonProps, isVerticalButton } from './utils/getButtonProps';

function renderIcon(
  icon: IconPropType,
  props: BaseButtonProps
): React.ReactNode {
  if (typeof icon === 'function') {
    return icon(props);
  }
  const size = props.size || Size.Regular;
  return React.cloneElement(icon, { size });
}

export function InternalButton(props: DerivedButtonProps): JSX.Element {
  const { children, isLoading = false, fit: shouldFitContainer } = props;
  const theme = useTheme();

  const { iconBefore, iconAfter, ...buttonProps } = getButtonProps(
    props,
    theme
  );

  if (isVerticalButton(props)) {
    return (
      <ButtonWrapper fit={shouldFitContainer} isVertical>
        {isLoading ? <LoadingSpinner size={buttonProps.size} /> : null}
        {iconBefore &&
          (props.isOnlyChild ? (
            <IconWrapper isLoading={isLoading}>
              {renderIcon(iconBefore, props)}
            </IconWrapper>
          ) : (
            <CircleWrapper isLoading={isLoading} {...buttonProps}>
              {renderIcon(iconBefore, props)}
            </CircleWrapper>
          ))}
        {children ? (
          <ButtonContent
            hasIconBefore={!!iconBefore}
            isVertical
            isLoading={!!isLoading}
          >
            {children}
          </ButtonContent>
        ) : null}
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper fit={shouldFitContainer}>
      {isLoading ? <LoadingSpinner size={buttonProps.size} /> : null}
      {iconBefore && (
        <IconWrapper isLoading={isLoading}>
          {renderIcon(iconBefore, props)}
        </IconWrapper>
      )}
      {children ? (
        <ButtonContent
          hasIconAfter={!!iconAfter}
          hasIconBefore={!!iconBefore}
          isLoading={!!isLoading}
          followsIcon={!!iconBefore}
        >
          {children}
        </ButtonContent>
      ) : null}
      {iconAfter && (
        <IconWrapper isLoading={isLoading}>
          {renderIcon(iconAfter, props)}
        </IconWrapper>
      )}
    </ButtonWrapper>
  );
}

/** @component */
export const AnchorButton = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps
>((props: AnchorButtonProps, innerRef) => {
  const theme = useTheme();

  const derivedProps = getButtonProps(props, theme);

  return (
    <StyledLink
      ref={innerRef}
      {...derivedProps}
      onClick={(
        e: Parameters<NonNullable<AnchorButtonProps['onClick']>>[0]
      ) => {
        if (derivedProps.isDisabled || derivedProps.isLoading) {
          e.stopPropagation();
        }
        if (derivedProps.onClick) derivedProps.onClick(e);
      }}
    >
      <InternalButton {...derivedProps} />
    </StyledLink>
  );
}) as unknown as AnchorButtonType;

AnchorButton.withProps = function withProps<
  StaticProps extends Partial<AnchorButtonProps>
>(
  staticProps: StaticProps
): React.ComponentType<
  Omit<AnchorButtonProps, keyof StaticProps> &
    React.RefAttributes<HTMLAnchorElement>
> {
  // we have to disable typescript checking here or we risk JS Heap overflows on compliling
  // the function signature is correct so this should be fine as it's just a wrapper
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const UntypedButton = AnchorButton as unknown as React.ComponentType;
  return React.forwardRef<never, never>((props, ref) => (
    <UntypedButton {...props} {...staticProps} ref={ref} />
  )) as never;
};

interface AnchorButtonType {
  (
    props: AnchorButtonProps & React.RefAttributes<HTMLAnchorElement>
  ): React.ReactElement;

  withProps<StaticProps extends Partial<AnchorButtonProps>>(
    props: StaticProps
  ): React.ComponentType<
    Omit<AnchorButtonProps, keyof StaticProps> &
      React.RefAttributes<HTMLAnchorElement>
  >;
}

/** @component */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, innerRef) => {
    const theme = useTheme();
    const derivedProps = getButtonProps(props, theme);

    return (
      <StyledButton
        ref={innerRef}
        {...derivedProps}
        onClick={(e: Parameters<NonNullable<ButtonProps['onClick']>>[0]) => {
          if (derivedProps.isDisabled || derivedProps.isLoading) {
            e.stopPropagation();
          }
          if (derivedProps.onClick) derivedProps.onClick(e);
        }}
      >
        <InternalButton {...derivedProps} />
      </StyledButton>
    );
  }
) as unknown as ButtonType;

Button.withProps = function withProps<StaticProps extends Partial<ButtonProps>>(
  staticProps: StaticProps
): React.ComponentType<
  Omit<ButtonProps, keyof StaticProps> & React.RefAttributes<HTMLButtonElement>
> {
  // we have to disable typescript checking here or we risk JS Heap overflows on compliling
  // the function signature is correct so this should be fine as it's just a wrapper
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const UntypedButton = Button as unknown as React.ComponentType;
  return React.forwardRef<never, never>((props, ref) => (
    <UntypedButton {...props} {...staticProps} ref={ref} />
  )) as never;
};

interface ButtonType {
  (
    props: ButtonProps & React.RefAttributes<HTMLButtonElement>
  ): React.ReactElement;

  withProps<StaticProps extends Partial<ButtonProps>>(
    props: StaticProps
  ): React.ComponentType<
    Omit<ButtonProps, keyof StaticProps> &
      React.RefAttributes<HTMLButtonElement>
  >;
}

/** @component */
export const ComponentButton = React.forwardRef<
  HTMLButtonElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ComponentButtonProps<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(({ component, ...props }: ComponentButtonProps<any>, innerRef) => {
  const theme = useTheme();

  const derivedProps = getButtonProps(props, theme);

  const ResolvedComponent = React.useMemo(
    () => (component ? StyledButton.withComponent(component) : StyledButton),
    [component]
  );

  return (
    <ResolvedComponent
      ref={innerRef}
      {...derivedProps}
      onClick={(e: Parameters<NonNullable<ButtonProps['onClick']>>[0]) => {
        if (derivedProps.isDisabled || derivedProps.isLoading) {
          e.stopPropagation();
        }
        if (derivedProps.onClick) derivedProps.onClick(e);
      }}
    >
      <InternalButton {...derivedProps} />
    </ResolvedComponent>
  );
}) as unknown as ComponentButtonType;

interface WithComponentOptions {
  staticProps?: BaseButtonProps;
  propFilter?: (propName: string) => boolean;
}

ComponentButton.withComponent = function withComponent<
  Component extends React.ElementType
>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NewComponent: Component,
  options: WithComponentOptions = {}
): StaticComponentButtonType<Component> {
  const { staticProps = {}, propFilter } = options;
  let filteredComponent = NewComponent;
  if (propFilter) {
    filteredComponent = ((unfilteredProps: Record<string, unknown>) => (
      <NewComponent
        {...Object.keys(unfilteredProps).reduce((filteredProps, propKey) => {
          if (
            propKey !== 'ref' &&
            propKey !== 'component' &&
            propFilter(propKey)
          ) {
            return { ...filteredProps, [propKey]: unfilteredProps[propKey] };
          }
          return filteredProps;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, {} as JSX.LibraryManagedAttributes<Component, any>)}
      />
    )) as unknown as Component;
  }
  // we have to disable typescript checking here or we risk JS Heap overflows on compliling
  // the function signature is correct so this should be fine as it's just a wrapper
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const UntypedButton = ComponentButton as unknown as React.ComponentType<
    Record<string, unknown>
  >;
  return React.forwardRef<never, never>((props, ref) => (
    <UntypedButton
      {...props}
      {...staticProps}
      ref={ref}
      component={filteredComponent}
    />
  )) as never;
};

interface StaticComponentButtonType<
  Component extends React.ElementType = React.ElementType<'button'>
> {
  <RefElement = HTMLButtonElement>(
    props: BaseButtonProps &
      Omit<React.ComponentPropsWithoutRef<Component>, 'component'> &
      React.RefAttributes<RefElement>
  ): React.ReactElement | null;
}

interface ComponentButtonType {
  <
    Component extends React.ElementType = React.ElementType<'button'>,
    RefElement = HTMLButtonElement
  >(
    props: ComponentButtonProps<Component> & React.RefAttributes<RefElement>
  ): React.ReactElement | null;

  withComponent<NewComponent extends React.ElementType>(
    newComponent: NewComponent,
    options?: WithComponentOptions
  ): StaticComponentButtonType<NewComponent>;
}
