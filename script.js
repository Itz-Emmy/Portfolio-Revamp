const openHamburger = document.querySelector(".open");
const closeHamburger = document.querySelector(".close");
const openHamburgerLight = document.getElementById("dark-menu-open");
const closeHamburgerDark = document.getElementById("dark-menu-close");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

openHamburgerLight.style.display = "none";

openHamburger.addEventListener("click", () => {
  openHamburger.style.display = "none";
  closeHamburger.style.display = "block";
  linksContainer.style.display = `block`;
  linksContainer.style.width = "100vw";
});

closeHamburger.addEventListener("click", () => {
  closeHamburger.style.display = "none";
  openHamburger.style.display = "block";

  linksContainer.style.display = `none`;
});
openHamburgerLight.addEventListener("click", () => {
  openHamburgerLight.style.display = "none";
  closeHamburgerDark.style.display = "block";
  linksContainer.style.display = `block`;
  linksContainer.style.width = "100vw";
});

closeHamburgerDark.addEventListener("click", () => {
  closeHamburgerDark.style.display = "none";
  openHamburgerLight.style.display = "block";

  linksContainer.style.display = `none`;
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
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
    closeHamburger.style.display = "none";
    openHamburger.style.display = "block";
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
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

console.log(prefersDarkScheme);

const toggleDarkMode = () => {
  if (toggleSwitch.checked) {
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
    addClassToSectionAndChildren();

    localStorage.setItem("darkMode", "enabled");
  } else {
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
  if (prefersDarkScheme.matches) {
    toggleSwitch.checked = true;
    toggleDarkMode();
  } else if (darkModeSetting === "enabled") {
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
    // User switched to dark mode
    toggleSwitch.checked = true;
    toggleDarkMode();
  } else {
    // User switched to light mode
    toggleSwitch.checked = false;
    removeClassFromSectionAndChildren();
  }
});
