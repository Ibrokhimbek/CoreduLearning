const opener = document.querySelector("#navOpener");
const closer = document.querySelector("#navCloser");
const menu = document.querySelector(".navList");
let isOpen = false;

opener.addEventListener("click", function () {
  if (isOpen == false) {
    menu.classList.remove("closeNav");
    menu.classList.add("openNav");
    isOpen = true;
  }
});

closer.addEventListener("click", function () {
  if (isOpen == true) {
    menu.classList.remove("openNav");
    menu.classList.add("closeNav");
    isOpen = false;
  }
});
