// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function extractDisplayName(component: any): string {
  if (typeof component === 'string' && component.length > 0) {
    return component;
  }

  return component.displayName || component.name || 'Unknown';
}
