const humberger = document.querySelector(".humberger-lines");
const navitem = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-items a");

humberger.addEventListener("click", function(){
    navitem.classList.toggle("open");
    humberger.classList.toggle("white");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});