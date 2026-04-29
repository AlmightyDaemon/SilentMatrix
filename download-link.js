(function () {
  var url = window.DOWNLOAD_URL;
  if (!url) return;

  var downloadPatterns = [
    /github\.com\/EXAMPLE\/EXAMPLE\/releases\/download\/v1\.0\/archivo\.exe/i,
    /github\.com\/AlmightyDaemon\/SilentMatrix\/releases\/download\//i
  ];

  function isDownloadLink(href) {
    return downloadPatterns.some(function (pattern) {
      return pattern.test(href || "");
    });
  }

  function updateDownloadLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (isDownloadLink(link.href) || isDownloadLink(link.getAttribute("href"))) {
        link.href = url;
        link.rel = "noopener";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateDownloadLinks);
  } else {
    updateDownloadLinks();
  }

  window.addEventListener("load", updateDownloadLinks);
})();
