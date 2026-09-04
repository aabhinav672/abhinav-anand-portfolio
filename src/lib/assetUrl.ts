/**
 * Resolves a path under `public/` against Vite's configured base URL, so
 * runtime asset references (img src, etc.) still work when the site is
 * deployed under a subpath, e.g. a GitHub Pages project site.
 */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
