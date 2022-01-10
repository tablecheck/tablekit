import { SerializedStyles } from '@emotion/react';
import { Placement, Options } from '@popperjs/core';
import { ReactNode, HTMLAttributes, Ref } from 'react';

export type PlacementType = Placement;

export interface ChildRenderProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface InlineDialogProps<TriggerElement extends HTMLElement>
  extends HTMLAttributes<HTMLDivElement> {
  /** Children to render in the dialog */
  children: ReactNode | ((renderProps: ChildRenderProps) => ReactNode);

  /** Standard react class for general container */
  className?: string;

  /** Emotion css to add to the container that wraps the inline dialog child */
  containerCss?: SerializedStyles;

  /** Should the dialog use internal or external state. */
  isControllable?: boolean;

  /** Sets whether to show or hide the dialog. */
  isOpen?: boolean;

  /** Function called when the dialog is open and a click occurs anywhere outside the dialog. */
  onClose?: () => void;

  /** Popper properties. */
  popperProps?: Partial<Options>;

  /** Describes the property for Popper component. */
  renderTrigger: (props: {
    isOpen: boolean;
    onClick: () => void;
    ref: Ref<TriggerElement>;
  }) => ReactNode;
}
