

let editable = document.querySelector('h1');
let hero = document.querySelector('.hero')

//objet qui me permet de récuperer la position de la souris par rapport au text.
let mouse = {
    x:null,
    y:null
}

hero.addEventListener('mousemove',(e)=>{
    //on situe la souris par rapport au text si le position de la souris est inférieur au text l'offsetx/y du text-shadow devient négatif
    mouse.x = e.clientX - editable.getBoundingClientRect().left -  editable.clientWidth/2;
    mouse.y = e.clientY - editable.getBoundingClientRect().top - editable.clientHeight/2;
    editable.style.textShadow = `${mouse.x }px ${mouse.y}px 0 rgba(255,100,135,0.6), ${-mouse.x}px ${-mouse.y}px teal, ${-mouse.y}px ${mouse.x}px #F02667,${mouse.y}px ${-mouse.x}px #BCC5D6 `;
    console.log(editable.clientWidth, editable.offsetWidth)
})