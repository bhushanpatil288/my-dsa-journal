// active btn start

// let filter_btns = document.querySelectorAll(".btn-1");
let filter_buttons = document.querySelectorAll(".btn-1");
filter_buttons.forEach(button => {
    button.addEventListener("click", () => {
        filter_buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});


// active btn end

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
const filterButtons = document.querySelectorAll(".filter-btn");
const entries = document.querySelectorAll(".dsa-entry");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        entries.forEach(entry => {
            const topic = entry.getAttribute("data-topic") || "";
            const difficulty = entry.getAttribute("data-difficulty") || "";

            // Split data-topic into array (e.g. "basic cpp" => ["basic", "cpp"])
            const topicList = topic.split(" ");
            const match = 
                filterValue === "all" ||
                topicList.includes(filterValue) ||
                difficulty === filterValue;

            if (match) {
                entry.style.display = "block";

                // Trigger fade-in animation
                entry.classList.remove("fade-in");
                void entry.offsetWidth; // force reflow
                entry.classList.add("fade-in");
            } else {
                entry.style.display = "none";
            }
        });
    });
});



// filter gallery end