/**
 * Create the GTM noscript tag
 * @param id
 */
export const createNoScript = (id: string) => {
  // Create additional noscript tag
  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");

  iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";

  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.childNodes[0]);
};

/**
 * Inject the dataLayer
 * @param dataLayerName
 */
export const injectDataLayer = (dataLayerName: string) => {
  window[dataLayerName] = window[dataLayerName] || [];
  window[dataLayerName].push({ event: "gtm.js", "gtm.start": new Date().getTime() });
};
