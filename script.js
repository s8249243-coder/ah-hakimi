'use strict';
const divEls = document.querySelectorAll(".slider1 div")
const removeActiveClass = () => {
    for (let div of divEls) {
        div.classList.remove("active")
    }
};
for (let div of divEls) {
    div.addEventListener("click", () => {
        removeActiveClass();
        div.classList.add("active");
    });
}



const menuIcon = document.querySelector(".home-icone");
const navMenu = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});




const texts = document.querySelectorAll(".text-slider span");

texts[0].classList.add("active");

function removeActive() {
  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.remove("active");
  }
}

for (let i = 0; i < texts.length; i++) {
  texts[i].addEventListener("click", function () {

    removeActive();

    if (!texts[i].classList.contains("active")) {
      texts[i].classList.add("active");
    }

  });
}



const Btn1El=document.querySelector('.btn1')


const openBtnEl=document.querySelector('.openBtn')

const basteBtnEl=document.querySelector('.basteBtn')

openBtnEl.addEventListener('click',()=>{

  Btn1El.classList.add('show')
})
basteBtnEl.addEventListener('click',()=>{
  Btn1El.classList.remove('show')
})

const Btm1mEl=document.querySelector('.btn3')

const openBtnmEl=document.querySelector('.bazBtn')

const bastehBtnEl=document.querySelector('.basteBtn1')

openBtnmEl.addEventListener('click',()=>{
  
  Btm1mEl.classList.add('show')
})
bastehBtnEl.addEventListener('click',()=>{
  Btm1mEl.classList.remove('show')
})


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