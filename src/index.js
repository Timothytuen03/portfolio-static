const navbar = document.getElementById("hamburger-nav");
// const windowSize = window.innerWidth;
navbar.addEventListener("click", function() {
    const n = document.getElementById("navbar-default");
    n.classList.toggle("hidden");
    console.log("clicked");
})