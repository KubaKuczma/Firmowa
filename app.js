const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const ham2 = document.querySelector(".ham2");
const lines = document.querySelector(".line");




hamburger.addEventListener("click",  () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
        

    });
    

});
ham2.addEventListener("click",  () => {
    lines.classList.toggle("co");
});
    

        
        
        
