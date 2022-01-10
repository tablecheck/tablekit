declare module 'input-format' {
  import { ChangeEvent } from 'react';

  interface Formatter<T = unknown> {
    (
      event: ChangeEvent<T>,
      input: HTMLInputElement,
      parse: (str: string) => string,
      format: (str: string) => {
        text: string;
        template: string;
      },
      onChange: (val: string) => void
    ): void;
  }

  export const onChange: Formatter;
  export const onCut: Formatter;
  export const onPaste: Formatter;
  export const onKeyDown: Formatter;
}
