function openNav() {
    let burger = document.querySelector(".header-burger");
    let nav = document.getElementById("nav-bar");
    burger.onclick = function() {
        addActive(burger, nav)
    }
}
function addActive(first, second) {
    first.classList.toggle("active");
    second.classList.toggle("active");
}
openNav();