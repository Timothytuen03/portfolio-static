const navbar = document.getElementById("hamburger-nav");
// const windowSize = window.innerWidth;
navbar.addEventListener("click", function() {
    const n = document.getElementById("navbar-default");
    n.classList.toggle("hidden");
    console.log("clicked");
})

const relCour = document.getElementsByClassName("relCourse");
// relCour.array.forEach(element => {
//     element.addEventListener("click", function() {
//         const idName = element.id + "_class";
//         const content = document.getElementById(idName);
//         content.classList.toggle("hidden");
//     })
// });

for(let i = 0; i < relCour.length; i++) {
    relCour[i].addEventListener("click", function(event) {
        // console.log(event.target.id);
        const idName = event.target.id + "_classMobile";
        console.log(idName);
        console.log(document.getElementById(idName));
        document.getElementById(idName).classList.toggle("hidden");
    })
}