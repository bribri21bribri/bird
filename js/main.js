const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbar-nav");
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("open");
  navbarNav.classList.toggle("open");
});

const navItemList = document.getElementsByClassName("nav-item");
for (let i = 0; i < navItemList.length; i++) {
  navItemList[i].addEventListener("click", (e) => {
    navItemList[i].classList.toggle("active");

    for (let j = 0; j < navItemList.length; j++) {
      if (i !== j) {
        navItemList[j].classList.remove("active");
      }
    }
  });
}
