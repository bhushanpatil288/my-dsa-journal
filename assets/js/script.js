// theme toggle start

const themeToggleBtn = document.getElementById("themeToggle");

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

// theme toggle end


// filter gallery start

const filterButtons = document.querySelectorAll('.filter-btn');
const entries = document.querySelectorAll('.dsa-entry');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.getAttribute('data-filter');

    entries.forEach(entry => {
      const topic = entry.getAttribute('data-topic');

      if (selected === 'all' || selected === topic) {
        entry.style.display = 'block';
        entry.classList.add('fade-in');
      } else {
        entry.style.display = 'none';
      }
    });
  });
});

// filter gallery end