// MENU
function toggleMenu() {
    const menu = document.getElementById("menuDropdown");
    menu.classList.toggle("show");
}

// CALCOLO GIORNI INSIEME
const startDate = new Date("2025-01-28");
const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
    "Insieme da " + diffDays + " giorni ❤️";
