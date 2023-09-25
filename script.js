const openHamburger = document.querySelector(".open");
const closeHamburger = document.querySelector(".close");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

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
