
const lastChild  = document.querySelector("p:last-child")
const panels      = Array.from(document.querySelectorAll(".panel"))
const firstChild = Array.from(document.querySelectorAll("p:first-child"))

function panelClicked(){
    
    this.classList.toggle("open") 
    this.addEventListener('transitionend', (e)=>{
        console.log(e.propertyName)
        if(e.propertyName.includes('flex-grow')){
            this.classList.add('appear')
        //  document.querySelector(`${e.target} > p:first-child`).classList.add('appear');
        }
    })
    
    
}
panels.forEach(pan =>pan.addEventListener('click',panelClicked))