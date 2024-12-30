const contentPage = document.getElementById("content-page");
const menuContent = document.getElementById("icon-menu-content");
const menuItem = document.getElementById("icon-menu-item");
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
