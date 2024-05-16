import type { TableKitCSSProperties } from './types.gen';

export type { TableKitCSSProperties } from './types.gen';

declare module 'csstype' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Properties extends TableKitCSSProperties {}
}
