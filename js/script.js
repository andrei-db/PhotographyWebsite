const navlinks = document.querySelector("body header nav div");

$(document).ready(function () {

  window.onscroll = function () { myFunction() };
  var navbar = document.getElementById("#nav");
  var sticky = navbar.offsetTop;


  function myFunction() {
    if (window.pageYOffset >= sticky) {
      
      navbar.classList.add("make-it-white");
      navlinks.classList.remove("nav-links");
      

    } else {
      navbar.classList.remove("make-it-white");
      navlinks.classList.add("nav-links");
    }
  }

 
var iconEvent=document.getElementById("icon");
iconEvent.addEventListener("click",function(){
  alert("gfd");
});

  

});