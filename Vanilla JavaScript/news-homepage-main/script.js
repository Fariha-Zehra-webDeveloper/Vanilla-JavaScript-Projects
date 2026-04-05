let iconCross = document.querySelector(".fa-times");
let iconsBar = document.querySelector(".icon");
let navLinks = document.querySelector(".nav-links");

iconsBar.addEventListener("click",function(){
    navLinks.style.right = "0";
});
       
iconCross.addEventListener("click",function(){
    navLinks.style.right = "-15rem";
});