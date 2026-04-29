(function () {
  var placeholder = "https://github.com/EXAMPLE/EXAMPLE/releases/download/v1.0/archivo.exe";
  var url = window.DOWNLOAD_URL || placeholder;

  function updateDownloadLinks() {
    document.querySelectorAll('a[href="' + placeholder + '"]').forEach(function (link) {
      link.href = url;
      link.rel = "noopener";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateDownloadLinks);
  } else {
    updateDownloadLinks();
  }
})();

