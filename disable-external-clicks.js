(function () {
  var blockedPatterns = [
    "youtube.com/watch",
    "youtu.be/",
    "x.com/MandroDesign",
    "twitter.com/MandroDesign"
  ];

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var shouldBlock = href === "javascript:void(0)" || blockedPatterns.some(function (pattern) {
      return href.indexOf(pattern) !== -1;
    });

    if (shouldBlock) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
})();
