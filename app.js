// Main navigation
const crewList = document.querySelectorAll(".crew__switch--link");
const planetList = document.querySelectorAll(".planet__link");
const whiteLink = document.querySelector(".white-link");
const navbarList = document.querySelectorAll(".navbar__link");
const techList = document.querySelectorAll(".technology__showcase--link");
const btnHam = document.querySelector(".btn-ham");
const navItems = document.querySelector(".navbar__items");
const navUl = document.querySelector(".navbar__ul");

// Navigation function

const navSwitcher = function (linkName, classAddName, navCount) {
  const Length = linkName.length;
  const currentLocation = location.href;

  if (!isNaN(navCount)) {
    for (let i = 0; i < Length; i++) {
      if (linkName[i].href === currentLocation) {
        linkName[i].classList.add(classAddName);
        navbarList[navCount].classList.add("white-line");
        return;
      }
    }
  } else {
    for (let i = 0; i < Length; i++) {
      if (linkName[i].href === currentLocation) {
        return linkName[i].classList.add(classAddName);
      }
    }
  }
};

// Main navigation
navSwitcher(navbarList, "white-line");

// Destination navigation
navSwitcher(planetList, "white-line-p", 1);

// Crew navigation
navSwitcher(crewList, "white-link", 2);

// Technology link
navSwitcher(techList, "white-circle", 3);

// Hamburger menu

btnHam.addEventListener("click", function () {
  navItems.classList.toggle("show");
  navUl.classList.toggle("show");
  btnHam.classList.toggle("close");
  navItems.style.transform = "translateX(0%)";
});
