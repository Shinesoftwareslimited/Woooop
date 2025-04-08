// Vigor Industries JavaScript: Modern UX + Secure Auth + Transitions

// Animate on Scroll
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, offset = 100) => {
  
  const menuToggle = document.getElementById("menuToggle");
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Page Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
});

// Theme Switcher & Settings
const themeSelect = document.getElementById("themeSelect");
const languageSelect = document.getElementById("languageSelect");

function applyTheme(theme) {
  document.body.classList.remove("theme-light", "theme-dark", "theme-metallic");
  document.body.classList.add(`theme-${theme}`);
}

function applySettings() {
  const theme = themeSelect.value;
  const language = languageSelect.value;
  localStorage.setItem("theme", theme);
  localStorage.setItem("vigorLang", language);
  applyTheme(theme);
}

themeSelect?.addEventListener("change", applySettings);
languageSelect?.addEventListener("change", applySettings);

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("vigorTheme") || "metallic";
  const savedLang = localStorage.getItem("vigorLang") || "en";
  themeSelect.value = savedTheme;
  languageSelect.value = savedLang;
  applyTheme(savedTheme);
});

// Authentication System
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");

const setUserSession = (username) => {
  localStorage.setItem("vigorUser", username);
  updateAuthUI();
};

const clearUserSession = () => {
  localStorage.removeItem("vigorUser");
  updateAuthUI();
};

const updateAuthUI = () => {
  const user = localStorage.getItem("vigorUser");
  if (user) {
    document.querySelector(".auth-section").innerHTML = `<h2>Welcome, ${user}</h2>`;
    logoutBtn.style.display = "block";
  } else {
    logoutBtn.style.display = "none";
  }
};

loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    setUserSession(username);
  }
});

logoutBtn?.addEventListener("click", () => {
  clearUserSession();
  window.location.reload();
});

updateAuthUI();

      
