// preloader
const preloader = document.querySelector(".preload");
const hidePreloader = () => {
  preloader.classList.add("fadeOut");
  preloader.style.display = "none";
};

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 2000);
});

const openHamburger = document.querySelector(".open");
const closeHamburger = document.querySelector(".close");
const openHamburgerLight = document.getElementById("dark-menu-open");
const closeHamburgerDark = document.getElementById("dark-menu-close");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const backToTop = document.querySelector(".top-link");
const heroSection = document.querySelector(".hero");
const navbar = document.getElementById("nav");

openHamburgerLight.style.display = "none";
closeHamburgerDark.style.display = "none";

openHamburger.addEventListener("click", () => {
  openHamburger.style.display = "none";
  closeHamburger.style.display = "block";
  openHamburgerLight.style.display = "none";
  closeHamburgerDark.style.display = "none";
  linksContainer.style.display = `block`;
  linksContainer.style.width = "100vw";
  heroSection.style.position = "relative";
  heroSection.style.zIndex = "5";
  heroSection.style.paddingTop = "70px";
  navbar.style.position = "fixed";
  navbar.style.zIndex = "999";
});

closeHamburger.addEventListener("click", () => {
  closeHamburger.style.display = "none";
  openHamburger.style.display = "block";
  openHamburgerLight.style.display = "none";
  closeHamburgerDark.style.display = "none";
  linksContainer.style.display = `none`;
  heroSection.style.position = "static";
  navbar.style.position = "fixed";
});
openHamburgerLight.addEventListener("click", () => {
  openHamburgerLight.style.display = "none";
  closeHamburger.style.display = "none";
  openHamburger.style.display = "none";
  closeHamburgerDark.style.display = "block";
  linksContainer.style.display = `block`;
  linksContainer.style.width = "100vw";
  heroSection.style.position = "relative";
  heroSection.style.zIndex = "5";
  heroSection.style.paddingTop = "70px";
  navbar.style.position = "fixed";
  navbar.style.zIndex = "999";
});

closeHamburgerDark.addEventListener("click", () => {
  closeHamburger.style.display = "none";
  openHamburger.style.display = "none";
  closeHamburgerDark.style.display = "none";
  openHamburgerLight.style.display = "block";
  linksContainer.style.display = `none`;
  heroSection.style.position = "static";
  navbar.style.position = "fixed";
});

// ********** fixed navbar ************

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    navbar.classList.add("fixed-nav");
  }
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    if (window.innerWidth <= 768) {
      linksContainer.style.display = `none`;
    }
    if (body.classList.contains("dark-mode")) {
      closeHamburger.style.display = "none";
      openHamburger.style.display = "none";
      closeHamburgerDark.style.display = "none";
      openHamburgerLight.style.display = "block";
    } else {
      closeHamburger.style.display = "none";
      openHamburger.style.display = "block";
    }
  });
});

const footerLogoDark = document.querySelectorAll(".dark");
const footerLogoLight = document.querySelectorAll(".light");

footerLogoDark.forEach((e) => {
  e.style.display = "none";
});

// Get the toggle switch and elements that need dark mode adjustments
const toggleSwitch = document.getElementById("toggle");
const sections = document.getElementsByTagName("section");
const header = document.getElementById("home");
const nav = document.getElementById("nav");
const body = document.body;
const logoDark = document.querySelector(".dark-logo");
const logoLight = document.querySelector(".light-logo");
const footer = document.getElementById("contact");
const footerColumns = document.querySelector(".footer-columns");
const footerBottom = document.querySelector(".footer-bottom");
const navLinks = document.querySelectorAll("a.scroll-link");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

backToTop.addEventListener("click", () => {
  closeHamburgerDark.style.display = "none";
  openHamburgerLight.style.display = "block";
  if (body.classList.contains("dark-mode")) {
    closeHamburger.style.display = "none";
    openHamburger.style.display = "none";
  }
});

// Enable dark mode
const addClassToSectionAndChildren = () => {
  openHamburgerLight.style.display = "block";
  openHamburger.style.display = "none";
  for (const section of sections) {
    section.classList.add("dark-mode");
    header.classList.add("dark-mode");
    nav.style.background = "#333333";
    body.classList.add("dark-mode");
    footerColumns.classList.add("dark-mode");
    footerBottom.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    backToTop.style.color = "#ffffff";

    addClassToElementAndChildren(section, "dark-mode");
    footerLogoDark.forEach((e) => {
      e.style.display = "block";
    });
    footerLogoLight.forEach((e) => {
      e.style.display = "none";
    });
  }
};

const addClassToElementAndChildren = (element, className) => {
  element.classList.add(className);

  const childElements = element.querySelectorAll("*");
  childElements.forEach((child) => {
    child.classList.add(className);
  });
};
// Disable dark mode
const removeClassFromSectionAndChildren = () => {
  openHamburgerLight.style.display = "none";
  openHamburger.style.display = "block";
  for (const section of sections) {
    section.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    nav.style.background = "#ffffff";
    body.classList.remove("dark-mode");
    footerColumns.classList.remove("dark-mode");
    footerBottom.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    backToTop.style.color = "#333333";

    removeClassFromElementAndChildren(section, "dark-mode");
    footerLogoDark.forEach((e) => {
      e.style.display = "none";
    });
    footerLogoLight.forEach((e) => {
      e.style.display = "block";
    });
  }
};
const removeClassFromElementAndChildren = (element, className) => {
  element.classList.remove(className);
  const childElements = element.querySelectorAll("*");
  childElements.forEach((child) => {
    child.classList.remove(className);
  });
};

const toggleDarkMode = () => {
  if (toggleSwitch.checked) {
    addClassToSectionAndChildren();
    navLinks.forEach((e) => {
      e.style.color = "#ffffff !important";
      e.style.backgroundImage = `linear-gradient(to right, var(--primary-hover), var(--primary-hover) 50%, #ffffff 50%) !important`;
    });

    localStorage.setItem("darkMode", "enabled");
  } else {
    removeClassFromSectionAndChildren();
  }
  if (toggleSwitch.checked) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
};

// Function to check the initial dark mode setting
const checkDarkMode = () => {
  const darkModeSetting = localStorage.getItem("darkMode");

  // Check if the user's device is in dark mode and enable dark mode accordingly
  if (darkModeSetting === "enabled") {
    toggleSwitch.checked = true;
    toggleDarkMode();
  } else {
    toggleSwitch.checked = false;
    removeClassFromSectionAndChildren();
  }
};

// Event listener for toggle switch

toggleSwitch.addEventListener("change", toggleDarkMode);

// Check initial dark mode setting
checkDarkMode();

prefersDarkScheme.addEventListener("change", (e) => {
  if (e.matches) {
    toggleSwitch.checked = true;
    toggleDarkMode();
  } else {
    toggleSwitch.checked = false;
    removeClassFromSectionAndChildren();
  }
});
