/*
Améliorations
--------------
-Saut lors du scrollUp après que la nav soit fixed ///"il faut un scroll smooth après le détachment de la barre"
-répétition dans le css class appear/ class logo ---> .appear a/ .logo a

*/



let scrollLastPosition = 0
let navBar = document.querySelector("nav")
let logo = document.querySelector("#log")
function navEffect(){

    switch(true)
    {
    case scrollLastPosition < window.scrollY : 
                if(window.scrollY > navBar.offsetTop)
                {
                    navBar.style.position = "fixed"
                    logo.classList.replace("logo","appear" )
                    
                    
                    console.log(logo.className)
                }
                
                break;

    case  scrollLastPosition > window.scrollY:
                if(window.scrollY < (navBar.getBoundingClientRect().bottom ) )
                {
                    navBar.style.position = "relative"
                    logo.classList.replace("appear" ,"logo")
                    console.log(logo.className)
                }   
                
                break;     
    }
    console.log(window.scrollY, navBar.offsetTop)
    scrollLastPosition = window.scrollY
}
window.addEventListener("scroll",navEffect)