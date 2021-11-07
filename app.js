const navLinks = document.getElementById("myLinks");

function menu() {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
};
