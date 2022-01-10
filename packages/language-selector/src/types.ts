import { SerializedStyles } from '@emotion/react';
import { InlineDialogProps } from '@tablecheck/tablekit-inline-dialog';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { HTMLAttributes } from 'react';

export enum View {
  Desktop = 'desktop',
  Mobile = 'mobile'
}

export type Locale = {
  code: string;
  label: string;
  translations: Translation;
};

export type Translation = {
  [key: string]: string;
};

export type LanguageSelectorProps = HTMLAttributes<HTMLDivElement> &
  Pick<InlineDialogProps<HTMLButtonElement>, 'renderTrigger'> & {
    /** breakpoint where the view mode changes */
    breakpoint?: MediaQuery<string>;

    /** custom className to put on the Outer div element */
    className?: string;

    /** Emotion css to add to the container that wraps the inline dialog child */
    containerCss?: SerializedStyles;

    /** the current language code */
    currentLanguage: string;

    /** list of countries to display */
    locales: Locale[];

    /** specifies the view to use: mobile or desktop */
    view?: View;

    /** specifies the item width in px */
    itemWidth?: string;

    /** specifies the item height in px */
    itemHeight?: string;

    /** Emotion css to add to the language selector items' container */
    inlineDialogContainerCss?: SerializedStyles;

    /** callback when a new language is selected */
    onChangeLanguage: (locale: string) => void;

    /** Boolean indicating if the close icon should show up */
    shouldShowCloseIcon?: boolean;
  };
