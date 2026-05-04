(function () {
  function unlockScroll() {
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.height = "auto";
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
  }

  unlockScroll();
  window.addEventListener("load", unlockScroll);

  document.addEventListener(
    "wheel",
    function (event) {
      if (!event.deltaY) return;

      var scrollRoot = document.scrollingElement || document.documentElement;
      var before = scrollRoot.scrollTop;
      window.scrollBy({
        top: event.deltaY,
        left: event.deltaX || 0,
        behavior: "auto",
      });

      if (scrollRoot.scrollTop !== before) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    { capture: true, passive: false }
  );
})();
