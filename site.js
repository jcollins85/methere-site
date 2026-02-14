(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return;
  }

  document.documentElement.classList.add("js-enabled");

  var revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  revealItems.forEach(function (item) {
    var explicitDelay = item.getAttribute("data-delay");

    if (explicitDelay) {
      item.style.transitionDelay = explicitDelay;
    } else {
      var parent = item.parentElement;
      if (parent && parent.hasAttribute("data-stagger")) {
        var children = Array.prototype.slice.call(parent.querySelectorAll(".reveal"));
        var index = children.indexOf(item);
        var step = Number(parent.getAttribute("data-stagger-step") || "70");
        item.style.transitionDelay = String(index * step) + "ms";
      }
    }

    observer.observe(item);
  });
})();
