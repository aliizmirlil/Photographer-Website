const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = document.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-xmark":"fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","fa-solid fa-bars");
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    origin:"left",
    delay: 500,
});
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".popular__card", {
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".register__image img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".register__content h4", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".register__btn", {
    ...scrollRevealOption,
    delay:1000,
    origin:"left",
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
});