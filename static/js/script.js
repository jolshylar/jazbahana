// ===== Dropdown Menu =====
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

if (dropdownButton) {
  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
}

// ===== Upload Image =====
const photoInput = document.querySelector("#avatar");
const photoPreview = document.querySelector("#preview-avatar");
if (photoInput)
  photoInput.onchange = () => {
    const [file] = photoInput.files;
    if (file) {
      photoPreview.src = URL.createObjectURL(file);
    }
  };

// ===== Scroll to Bottom =====
const conversationThread = document.querySelector(".classroom__box");
if (conversationThread)
  conversationThread.scrollTop = conversationThread.scrollHeight;

// ===== Toggle Light Theme =====
const themeSwitcher = document.getElementById("theme-switch");

function toggleTheme() {
  let curTheme = this.checked ? "light" : "dark";
  let oldTheme = this.checked ? "dark" : "light";

  document.body.classList.replace(oldTheme, curTheme);
  localStorage.setItem("theme", curTheme);
}

themeSwitcher.addEventListener("click", toggleTheme);

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme !== null) {
    document.body.className = localStorageTheme;
    const themeSwitch = document.getElementById("theme-switch");
    checked = localStorageTheme === "light" ? true : false;
    themeSwitch.checked = checked;
  }
}

window.onload = checkTheme();

// ===== Hamburger Menu =====
let menu = document.getElementById("menu");
let navi = document.getElementById("bar");
let wrapper = document.getElementById("list-wrapper");
let counter = 3;

function hamburgerMenu() {
  if (counter % 2 == 1) {
    counter++;
    navi.classList.add("change");
    wrapper.classList.remove("list-wrapper");
  } else {
    counter++;
    navi.classList.remove("change");
    wrapper.classList.add("list-wrapper");
  }
}

// ===== Reveal Password =====
let showCounter = 3;
function reveal() {
  let passwordField = document.getElementById('id_password1');
  let showPassword = document.getElementById('show-password');
  if(showCounter % 2 == 1) {
    showCounter++;
    showPassword.value = '🙉';
    passwordField.type = 'text';
  } else {
    showCounter++;
    showPassword.value = '🙈';
    passwordField.type = 'password';
  }
}

// ======= MessageBox ========

let boxMessage = document.getElementById('id_box');

boxMessage.addEventListener("click", () => {
boxMessage.classList.toggle("click-box");
});
