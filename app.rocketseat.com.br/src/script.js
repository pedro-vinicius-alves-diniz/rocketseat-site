const mascaraContainer = document.getElementById("mascara-container");
const contentPage = document.getElementById("content-page");
const menuContent = document.getElementById("icon-menu-content");
const menuItem = document.getElementById("icon-menu-item");
const searchContainer = document.getElementById("content-search");
const inputSearch = document.getElementById("input");
const iconInput = document.getElementById("icon-input");
const optionsSidebar = document.querySelectorAll(".item-sidebar");
let menuStatus = "Expandido";

menuContent.addEventListener("click", () => {
  console.log("Botão menu clicado!");

  if (menuStatus === "Expandido") {
    console.log("Restringido");
    menuStatus = "Restringido";

    menuItem.src = "assets/icons/icon-menu-right.svg";
    optionsSidebar.forEach((elemento) => {
      elemento.classList.add("hidden");
    });
  } else {
    console.log("Expandido");
    menuStatus = "Expandido";

    menuItem.src = "assets/icons/icon-menu-left.svg";
    optionsSidebar.forEach((elemento) => {
      elemento.classList.remove("hidden");
    });
  }
});

inputSearch.addEventListener("focus", () => {
  console.log("Input em focus");

  searchContainer.classList.remove("border-transparent");
  searchContainer.classList.add("border-2-white");
  
  iconInput.innerHTML = "x";
  iconInput.classList.add("rounded-full");

  mascaraContainer.classList.remove("hidden");
});

iconInput.addEventListener("click", () => {
  searchContainer.classList.add("border-transparent");
  searchContainer.classList.remove("border-2-white");
  iconInput.classList.remove("rounded-full");
  mascaraContainer.classList.add("hidden");
  iconInput.innerHTML = "/";
});

mascaraContainer.addEventListener("click", () => {
  searchContainer.classList.add("border-transparent");
  searchContainer.classList.remove("border-2-white");
  iconInput.classList.remove("rounded-full");
  mascaraContainer.classList.add("hidden");
  iconInput.innerHTML = "/";
});
