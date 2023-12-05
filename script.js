// preloader
const preloader = document.querySelector(".preload");
const hidePreloader = () => {
  preloader.classList.add("fadeOut");
  preloader.style.display = "none";
};

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 1000);
});

const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const linkAnchors = document.querySelectorAll(".links a");
const backToTop = document.querySelector(".top-link");
const heroSection = document.querySelector(".hero");
const navbar = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");
const toggleSpan1 = navToggle.querySelector("b:nth-child(1)");
const toggleSpan2 = navToggle.querySelector("b:nth-child(2)");
const toggleSpan3 = navToggle.querySelector("b:nth-child(3)");

navToggle.addEventListener("click", () => {
  if (!navToggle.classList.contains("open")) {
    navToggle.classList.add("open");
    linksContainer.classList.add("open");
    toggleSpan1.style.transform = "rotateZ(45deg)";
    toggleSpan3.style.transform = "rotateZ(-45deg)";
    toggleSpan3.style.transition = "transform 0.8s ease-in-out";
    navToggle.style.transition = "transform 0.8s ease-in-out";
    navToggle.style.transform = "rotateZ(180deg)";
    navToggle.style.top = "60px";
    navToggle.style.right = "8%";
    toggleSpan2.style.display = "none";
    toggleSpan1.style.top = "19px";
    linksContainer.style.height = `auto`;
    linksContainer.style.overflow = `visible`;
    linksContainer.style.width = "100vw";
    heroSection.style.position = "relative";
    heroSection.style.zIndex = "5";
    heroSection.style.paddingTop = "70px";
    navbar.style.position = "fixed";
    navbar.style.zIndex = "999";
  } else {
    navToggle.classList.remove("open");
    linksContainer.classList.remove("open");
    navToggle.style.transform = "rotateZ(360deg)";
    navToggle.style.transition = "transform 0.8s ease-in-out";
    navToggle.style.top = "20px";
    toggleSpan3.style.transition = "transform 0.8s ease-in-out";
    toggleSpan2.style.display = "block";
    toggleSpan1.style.transform = "rotateZ(180deg)";
    navToggle.style.transform = "none";
    toggleSpan3.style.transform = "none";
    toggleSpan1.style.top = "10px";
    toggleSpan3.style.top = "20px";

    heroSection.style.position = "static";
    navbar.style.position = "fixed";
  }
});

// ********** fixed navbar ************

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    navbar.classList.add("fixed-nav");
    backToTop.addEventListener("click", () => {
      heroSection.style.paddingTop = "70px";
    });
  }
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navToggle.classList.remove("open");
    linksContainer.classList.remove("open");
    navToggle.style.transition = "transform 0.8s ease-in-out";
    navToggle.style.transform = "rotateZ(-180deg)";
    navToggle.style.top = "20px";
    toggleSpan3.style.transition = "transform 0.8s ease-in-out";
    toggleSpan3.style.transform = "none";
    toggleSpan2.style.display = "block";
    toggleSpan1.style.transform = "rotateZ(180deg)";
    toggleSpan3.style.transform = "none";
    navToggle.style.transform = "none";
    toggleSpan3.style.transform = "none";
    toggleSpan1.style.top = "10px";
    toggleSpan3.style.top = "20px";

    heroSection.style.position = "static";
    navbar.style.position = "fixed";
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
  });
});

const footerLogoDark = document.querySelectorAll(".dark");
const footerLogoLight = document.querySelectorAll(".light");

footerLogoDark.forEach((e) => {
  e.style.display = "none";
});

// toggle functionality
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
  navToggle.classList.remove("open");
});

const addClassToSectionAndChildren = () => {
  const navToggleSpan = document.querySelectorAll(".nav-toggle b");

  navToggleSpan.forEach((e) => {
    e.style.background = "#f1f1f1";
  });
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

const removeClassFromSectionAndChildren = () => {
  const navToggleSpan = document.querySelectorAll(".nav-toggle b");
  navToggleSpan.forEach((e) => {
    e.style.background = "#333333";
  });
  for (const section of sections) {
    section.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    nav.style.background = "#f1f1f1";
    body.classList.remove("dark-mode");
    footerColumns.classList.remove("dark-mode");
    footerBottom.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    logoLight.style.display = "block";
    logoDark.style.display = "none";

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
      e.style.color = "#f1f1f1 !important";
      e.style.backgroundImage = `linear-gradient(to right, var(--primary-hover), var(--primary-hover) 50%, #f1f1f1 50%) !important`;
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

const checkDarkMode = () => {
  const darkModeSetting = localStorage.getItem("darkMode");

  if (darkModeSetting === "enabled") {
    toggleSwitch.checked = true;
    toggleDarkMode();
  } else {
    toggleSwitch.checked = false;
    removeClassFromSectionAndChildren();
  }
};

toggleSwitch.addEventListener("change", toggleDarkMode);

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
