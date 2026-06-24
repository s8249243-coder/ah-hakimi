'use strict';


const images = document.querySelectorAll(".img");

window.addEventListener("scroll", function () {
    
    for (let img of images) {
        
        let imgTop = img.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (imgTop < windowHeight - 100) {
            img.classList.add("show");
        } else {
            img.classList.remove("show");
        }

    }

});


const items = document.querySelectorAll(".scroll-item");

window.addEventListener("scroll", function () {

  for (let i = 0; i < items.length; i++) {

    let itemTop = items[i].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 120) {
      items[i].classList.add("show-item");
    } else {
      items[i].classList.remove("show-item");
    }

  }

});