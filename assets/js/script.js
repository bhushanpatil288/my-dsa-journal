const themeToggleBtn = document.getElementById("themeToggle");

// Check localStorage
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light-theme");
  themeToggleBtn.textContent = "🌙 ";
}

themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
  const isLight = document.documentElement.classList.contains("light-theme");

  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggleBtn.textContent = isLight ? "🌙 " : "🌞";
});
