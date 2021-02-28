listItem = Array.from(document.querySelectorAll('.item'));
/////////////////////////////////////////////////////
let isGrabed = false;
allItems = document.querySelector(".items")
////////////////////////////////////////////////////
/****get the first click**** */
let lastPosX = 0;

allItems.addEventListener('mousedown',(e)=> {
    lastPosX = e.offsetX;
    e.currentTarget.classList.add('active')
    isGrabed = true;
    console.log('coucou')
})
////////////////////////////////////////////////////
document.addEventListener('mouseup',(e)=>{
  allItems.classList.remove('active')
  isGrabed = false;
})
///////////////////////////////////////////////////
allItems.addEventListener('mouseleave',(e)=>{
    isGrabed = false;
})
//////////////////////////////////////////////////
allItems.addEventListener('mousemove',(e)=>{
    if(isGrabed){
        if(lastPosX > e.offsetX){
            e.currentTarget.scrollLeft += lastPosX - e.offsetX;
        }
        else{
            e.currentTarget.scrollLeft -= e.offsetX -lastPosX;
        }
    }})