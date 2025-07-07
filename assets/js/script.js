// Active Button Logic
let filter_buttons = document.querySelectorAll(".btn-1");
filter_buttons.forEach(button => {
    button.addEventListener("click", () => {
        filter_buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Theme Toggle
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

// Filter Gallery (Updated for Grid Layout)
const filterButtons = document.querySelectorAll(".filter-btn");
// Select the card wrappers (the cols)
const cardWrappers = document.querySelectorAll(".col-md-6.col-lg-4");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        cardWrappers.forEach(wrapper => {
            const entry = wrapper.querySelector(".dsa-entry");
            const topic = entry.getAttribute("data-topic") || "";
            const difficulty = entry.getAttribute("data-difficulty") || "";

            const topicList = topic.split(" ");
            const match =
                filterValue === "all" ||
                topicList.includes(filterValue) ||
                difficulty === filterValue;

            if (match) {
                wrapper.style.display = "block";

                // Trigger fade-in animation
                entry.classList.remove("fade-in");
                void entry.offsetWidth; // force reflow
                entry.classList.add("fade-in");
            } else {
                wrapper.style.display = "none";
            }
        });
    });
});
