const mscSearch = document.getElementById("msc-search");
const mscNav = document.getElementById("msc-nav");
const mscNavEnd = document.getElementById("msc-search-bar-end");

const toggleSearchBar = () => {
  mscNav.classList.toggle("hidden");
  mscSearch.classList.toggle("hidden");
  mscNavEnd.classList.toggle("hidden");
};

const clearSearch = () => {
  const mscSearchInput = document.getElementById("msc-search-input");
  mscSearchInput.value = "";
};

const toggleSubMenu = (content) => {
  const contento = content || "shop-all";
  const mscMenu = document.getElementById("msc-menu");
  const mscSubMenu = document.getElementById("msc-submenu");

  // Ocultar todos los contenidos de submenú primero
  const allSubContents = mscSubMenu.querySelectorAll("[id$='-sub']");
  allSubContents.forEach((el) => el.classList.add("hidden"));

  // Mostrar el submenú general
  mscMenu.classList.add("hidden");
  mscSubMenu.classList.remove("hidden");

  // Mostrar el submenú específico
  const mscContent = document.getElementById(`${contento}-sub`);
  if (mscContent) {
    mscContent.classList.remove("hidden");
  }
};

const backToMenu = () => {
  const mscMenu = document.getElementById("msc-menu");
  const mscSubMenu = document.getElementById("msc-submenu");

  // Ocultar todos los submenús
  const allSubContents = mscSubMenu.querySelectorAll("[id$='-sub']");
  allSubContents.forEach((el) => el.classList.add("hidden"));

  // Mostrar menú principal y ocultar submenu
  mscMenu.classList.remove("hidden");
  mscSubMenu.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll(".main-menu details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        // Cerrar todos los demás <details>
        detailsElements.forEach((other) => {
          if (other !== details && other.open) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
});

const checkLogin = () => {
  const token = localStorage.getItem("token");
  const profileImg = document.getElementById("profile-img");

  if (token) {
    profileImg.src =
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    // Mostrar loggedin, ocultar loggedout
    document
      .querySelectorAll(".loggedin")
      .forEach((el) => el.classList.remove("hidden"));
    document
      .querySelectorAll(".loggedout")
      .forEach((el) => el.classList.add("hidden"));
  } else {
    profileImg.src = "assets/profile.png";
    document
      .querySelectorAll(".loggedin")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".loggedout")
      .forEach((el) => el.classList.remove("hidden"));
  }
};

const closeDropdown = () => {
  const active = document.activeElement;
  if (active && typeof active.blur === "function") {
    active.blur();
  }
};

const login = () => {
  localStorage.setItem("token", "true");
  checkLogin();
  closeDropdown();
};

const logout = () => {
  localStorage.removeItem("token");
  checkLogin();
  closeDropdown();
};

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", checkLogin);
