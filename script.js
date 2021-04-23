let burger = document.querySelector(".header-burger");
let nav = document.getElementById("nav-bar");
let navlinks = document.querySelectorAll(".nav-link");

// Show navbar after click the burger
burger.onclick = function() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

// Hide navbar after click a link
for (let link of navlinks) {
    link.onclick = () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
    }
}