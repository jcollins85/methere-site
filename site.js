(function () {
  var GA_MEASUREMENT_ID = "G-N3Y7VGTFWX";
  var CONSENT_KEY = "methere_analytics_consent_v1";
  var CONSENT_GRANTED = "granted";
  var CONSENT_DENIED = "denied";
  var gaInitialized = false;
  var gaLoading = false;
  var preferencesButton = null;
  var consentBannerId = "analytics-consent-banner";

  function getStoredConsent() {
    try {
      return window.localStorage.getItem(CONSENT_KEY);
    } catch (error) {
      return null;
    }
  }

  function setStoredConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      return;
    }
  }

  function hasAnalyticsConsent() {
    return getStoredConsent() === CONSENT_GRANTED;
  }

  function initializeAnalytics() {
    if (!hasAnalyticsConsent() || gaInitialized || gaLoading) {
      return;
    }

    gaLoading = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    var analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    analyticsScript.onload = function () {
      gaInitialized = true;
      gaLoading = false;
    };
    analyticsScript.onerror = function () {
      gaLoading = false;
    };

    document.head.appendChild(analyticsScript);
  }

  function setPreferencesButtonVisibility(isVisible) {
    if (!preferencesButton) {
      return;
    }
    preferencesButton.hidden = !isVisible;
  }

  function hideConsentBanner() {
    var banner = document.getElementById(consentBannerId);
    if (!banner) {
      return;
    }
    banner.hidden = true;
    setPreferencesButtonVisibility(true);
  }

  function openConsentBanner() {
    var banner = document.getElementById(consentBannerId);
    if (!banner) {
      banner = document.createElement("aside");
      banner.id = consentBannerId;
      banner.className = "analytics-consent panel";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-live", "polite");

      var title = document.createElement("h2");
      title.textContent = "Privacy choices";

      var message = document.createElement("p");
      message.innerHTML =
        'We use optional analytics to understand site usage and App Store/support clicks. You can accept or decline. See our <a href="./privacy.html">Privacy Policy</a>.';

      var actions = document.createElement("div");
      actions.className = "analytics-consent-actions";

      var acceptButton = document.createElement("button");
      acceptButton.type = "button";
      acceptButton.className = "btn btn-primary";
      acceptButton.textContent = "Accept analytics";
      acceptButton.addEventListener("click", function () {
        setStoredConsent(CONSENT_GRANTED);
        initializeAnalytics();
        trackEvent("analytics_consent_updated", {
          status: CONSENT_GRANTED,
          page_path: window.location.pathname
        });
        hideConsentBanner();
      });

      var declineButton = document.createElement("button");
      declineButton.type = "button";
      declineButton.className = "btn btn-secondary";
      declineButton.textContent = "Decline";
      declineButton.addEventListener("click", function () {
        setStoredConsent(CONSENT_DENIED);
        hideConsentBanner();
      });

      actions.appendChild(acceptButton);
      actions.appendChild(declineButton);
      banner.appendChild(title);
      banner.appendChild(message);
      banner.appendChild(actions);
      document.body.appendChild(banner);
    }

    banner.hidden = false;
    setPreferencesButtonVisibility(false);
  }

  function ensurePreferencesButton() {
    if (preferencesButton) {
      return;
    }

    preferencesButton = document.createElement("button");
    preferencesButton.type = "button";
    preferencesButton.className = "analytics-prefs-btn";
    preferencesButton.textContent = "Privacy choices";
    preferencesButton.addEventListener("click", function () {
      // Track reopen intent — separate from the consent decision itself
      // so we can see how often users come back to revisit their choice.
      trackEvent("privacy_choices_open_click", {
        page_path: window.location.pathname,
        current_consent: getStoredConsent() || "unset"
      });
      openConsentBanner();
    });
    document.body.appendChild(preferencesButton);
  }

  function trackEvent(name, params) {
    if (!name || !hasAnalyticsConsent() || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", name, params || {});
  }

  ensurePreferencesButton();

  if (hasAnalyticsConsent()) {
    initializeAnalytics();
  } else if (getStoredConsent() !== CONSENT_DENIED) {
    openConsentBanner();
  }

  document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) {
      return;
    }
    var target = event.target.closest("[data-analytics-event]");
    if (!target) {
      return;
    }

    var params = {
      placement: target.getAttribute("data-analytics-placement") || "unspecified",
      link_text: (target.textContent || "").trim().slice(0, 80),
      link_url: target.getAttribute("href") || "",
      page_path: window.location.pathname
    };
    // Carry through any data-analytics-* extras as event params (e.g.
    // data-analytics-plan="annual" on a plan tile click). Skip the
    // already-handled `event` and `placement` keys.
    for (var i = 0; i < target.attributes.length; i++) {
      var attr = target.attributes[i];
      if (attr.name.indexOf("data-analytics-") === 0) {
        var key = attr.name.substring("data-analytics-".length);
        if (key !== "event" && key !== "placement") {
          params[key] = attr.value;
        }
      }
    }
    trackEvent(target.getAttribute("data-analytics-event"), params);
  });

  // Scroll-depth signals — fire once each at 50% and 90% of page height
  // for engagement / "did they actually reach Plans" measurement on long pages.
  var scrollDepthFired = { d50: false, d90: false };
  function checkScrollDepth() {
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    if (docH <= 0) return;
    var pct = window.scrollY / docH;
    if (!scrollDepthFired.d50 && pct >= 0.5) {
      scrollDepthFired.d50 = true;
      trackEvent("scroll_depth_50", { page_path: window.location.pathname });
    }
    if (!scrollDepthFired.d90 && pct >= 0.9) {
      scrollDepthFired.d90 = true;
      trackEvent("scroll_depth_90", { page_path: window.location.pathname });
    }
  }
  window.addEventListener("scroll", checkScrollDepth, { passive: true });

  var sectionItems = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window && sectionItems.length) {
    var seenSections = {};
    var sectionObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var sectionId = entry.target.getAttribute("id");
          if (!sectionId || seenSections[sectionId]) {
            return;
          }
          seenSections[sectionId] = true;
          trackEvent("section_view", {
            section_id: sectionId,
            page_path: window.location.pathname
          });
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45
      }
    );

    sectionItems.forEach(function (item) {
      sectionObserver.observe(item);
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("js-enabled");

  var revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) {
    return;
  }

  var revealObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      // Threshold 0 fires as soon as ANY pixel of the target enters the viewport
      // box (after rootMargin). Threshold 0.18 (18% of target visible) is a trap
      // for tall elements — sections taller than viewport/0.18 (~5x viewport)
      // can never reach 18% intersection and stay opacity:0 forever. Using 0 +
      // a negative bottom rootMargin gives a clean "top of element crossed 85%
      // viewport" trigger that works for any element height.
      threshold: 0,
      rootMargin: "0px 0px -15% 0px"
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
    revealObserver.observe(item);
  });
})();
