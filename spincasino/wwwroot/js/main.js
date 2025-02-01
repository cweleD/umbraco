document.addEventListener("DOMContentLoaded", function () {
  const swiperResults = new Swiper(".swiper-results-container", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiperSimple = new Swiper(".simple-swiper-container", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiperMain = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: false,
    loopFillGroupWithBlank: true,
    pagination: {
      //  el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const tabsSwiper = new Swiper(".tabs-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const tabs = document.querySelectorAll(".tabs-slide");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabs.length > 0 && tabContents.length > 0) {
    tabs[0].classList.add("swiper-slide-active");
    const firstTabContent = document.getElementById(tabs[0].dataset.tab);
    if (firstTabContent) {
      firstTabContent.style.display = "block";
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("swiper-slide-active"));
      tab.classList.add("swiper-slide-active");

      tabContents.forEach((content) => {
        if (content) content.style.display = "none";
      });

      const targetContent = document.getElementById(tab.dataset.tab);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });

  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    if (content) content.style.display = "none";

    header?.addEventListener("click", () => {
      accordion.classList.toggle("active");

      if (content) {
        content.style.display = accordion.classList.contains("active")
          ? "block"
          : "none";
      }
    });
  });

  document
    .querySelector(".menu-toggle")
    ?.addEventListener("click", function () {
      const subNav = document.querySelector(".sub-nav");
      if (subNav) {
        subNav.style.width = subNav.style.width === "20rem" ? "" : "20rem";
      }
    });

  function applyFilters() {
    var searchTerm =
      document.getElementById("gameSearch")?.value.trim().toLowerCase() || "";
    var selectedCategory =
      document.getElementById("gameProviders")?.value || "all";
    var activeTab =
      document
        .querySelector(".tab-button.active")
        ?.getAttribute("data-category") || "all";
    var cards = document.querySelectorAll(".results-section .card");

    cards.forEach(function (card) {
      var cardCategory =
        card.getAttribute("data-category")?.toLowerCase() || "";
      var gameTitle =
        card.querySelector(".game-title")?.textContent.toLowerCase().trim() ||
        "";

      var matchesSearch =
        searchTerm === "" ||
        gameTitle.includes(searchTerm) ||
        cardCategory.includes(searchTerm);
      var matchesDropdown =
        selectedCategory === "all" || cardCategory === selectedCategory;
      var matchesTab = activeTab === "all" || cardCategory === activeTab;

      card.style.display =
        matchesSearch && (matchesDropdown || matchesTab) ? "block" : "none";
    });
    // Ensure Swiper updates after filtering
    if (typeof swiperResults !== "undefined") {
      swiperResults.update();
    }
  }

  document
    .getElementById("gameSearch")
    ?.addEventListener("input", applyFilters);
  document
    .getElementById("gameProviders")
    ?.addEventListener("change", applyFilters);

  document.querySelectorAll(".tab-button").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-button")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      applyFilters();
    });
  });

  window.onload = function () {
    var firstTab = document.querySelector(".tab-button");
    if (firstTab) {
      firstTab.classList.add("active");
    }
    applyFilters();
  };
});
