/* Optional GA4 loader. No request is made while the placeholder ID is configured. */
(() => {
  const id = window.BLOODLINK_BLOG_CONFIG?.googleAnalyticsId;
  if (typeof id !== "string" || !/^G-[A-Z0-9]+$/.test(id) || id === "G-XXXXXXXXXX") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  script.onerror = () => console.warn("BloodLink Blog: Google Analytics could not be loaded.");
  document.head.appendChild(script);
})();
