/**
 * Landing point for the "Skip to main content" link in app/layout.tsx.
 *
 * Deliberately not the page's own <main>: on every page <main> wraps the header
 * and the footer as well as the content, so focusing it would land the user
 * *before* the navigation and bypass nothing -- the exact thing the skip link
 * exists to do. Render this immediately after the page header instead.
 *
 * tabIndex={-1} makes it programmatically focusable, so activating the link
 * moves keyboard focus here rather than only moving the scroll position.
 */
export function SkipTarget() {
  return <div id="main-content" tabIndex={-1} />;
}
