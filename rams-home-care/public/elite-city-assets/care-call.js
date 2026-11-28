window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'AW-18074258015', {allow_ad_personalization_signals: false});
document.addEventListener('click', function (event) {
  const link = event.target.closest && event.target.closest('a[href^="tel:"]');
  if (link) {
    gtag('event', 'conversion', {send_to: 'AW-18074258015/fwWpCM-HrosdEN-UvapD', transport_type: 'beacon'});
  }
});
