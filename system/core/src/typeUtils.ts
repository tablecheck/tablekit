export type OptionalKeys<T extends object, TKeys extends keyof T> = Omit<
  T,
  TKeys
> & {
  [K in keyof T as K extends TKeys ? K : never]?: T[K];
};
