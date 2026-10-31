/* Public-page analytics. Drafts, previews, and the stats shortcut are excluded. */
(() => {
  const allowedHosts = ['phillipsperry.com', 'www.phillipsperry.com'];
  if (!allowedHosts.includes(location.hostname)) return;
  if (/^\/(drafts(?:\/|\.html)|draft-|stats(?:\/|\.html))/.test(location.pathname)) return;
  const websiteId = window.PHILLIP_UMAMI_WEBSITE_ID;
  if (!websiteId) return;
  let lastPage = '';
  function pageUrl() {
    const hashRoute = location.hash.match(/^#(\/(?:projects|notebook|about|merch|project\/[^/?#]+|note\/[^/?#]+)\/?)/);
    if (hashRoute) {
      const route = hashRoute[1].replace(/\/$/, '');
      return route.startsWith('/note/') ? '/articles/' + route.slice(6) + '/' : route;
    }
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    const path = /^\/(share-|merch-)/.test(location.pathname) && canonical ? new URL(canonical).pathname : location.pathname;
    return path === '/index.html' ? '/' : path;
  }
  function referrer() {
    try {
      const url = new URL(document.referrer);
      if (url.origin === location.origin && /^\/(drafts|draft-|stats)/.test(url.pathname)) return '';
      return url.origin + url.pathname;
    } catch { return ''; }
  }
  function trackPage() {
    if (!window.umami) return;
    const url = pageUrl();
    if (url === lastPage) return;
    lastPage = url;
    window.umami.track(props => ({ ...props, url, title: document.title, referrer: referrer() }));
  }
  const tracker = document.createElement('script');
  tracker.src = 'https://cloud.umami.is/script.js';
  tracker.defer = true;
  tracker.dataset.websiteId = websiteId;
  tracker.dataset.autoTrack = 'false';
  tracker.dataset.domains = allowedHosts.join(',');
  tracker.dataset.excludeSearch = 'true';
  tracker.dataset.excludeHash = 'true';
  window.phillipAnalyticsBeforeSend = (type, payload) => ({ ...payload, url: pageUrl(), referrer: referrer() });
  tracker.dataset.beforeSend = 'phillipAnalyticsBeforeSend';
  tracker.onload = trackPage;
  document.head.appendChild(tracker);
  const afterNavigation = () => setTimeout(trackPage, 0);
  addEventListener('hashchange', afterNavigation);
  addEventListener('popstate', afterNavigation);
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-holiday-buy], [data-merch-buy]');
    if (!button || !window.umami) return;
    window.umami.track('Mug add to cart', { mug: button.hasAttribute('data-holiday-buy') ? 'christmas-2026' : 'sexiest-bookkeeper', page: pageUrl() });
  });
})();
