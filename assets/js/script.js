'use strict';

// navbar is mobile

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggle]");


$navToggler.addEventListener("click", () => {
    $navbar.classList.toggle("active");
})

// header scroll

const $header = document.querySelector("[data-header]");
window, addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})