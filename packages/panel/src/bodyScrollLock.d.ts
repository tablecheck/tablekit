declare module 'body-scroll-lock' {
  export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (element: HTMLElement | null) => boolean;
  }

  export function disableBodyScroll(
    targetElement: HTMLElement,
    options?: BodyScrollOptions
  ): void;

  export function enableBodyScroll(targetElement: HTMLElement): void;

  export function clearAllBodyScrollLocks(): void;
}
