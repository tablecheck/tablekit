declare let window: {
  cordova: boolean;
  cordovaFileCache: {
    get: (path: string) => string;
  };
};

export function getSrcPath(path: string): string {
  if (
    path.indexOf('http') !== 0 &&
    typeof window !== 'undefined' &&
    window.cordova &&
    window.cordovaFileCache
  ) {
    return window.cordovaFileCache.get(path);
  }
  return path;
}
