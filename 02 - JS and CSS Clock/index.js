document.querySelector(".second-hand").style.transform = "rotate(90deg)"
function ticTac()

{
    let timer = new Date()
    document.querySelector(".second-hand").style.transform += "rotate(6deg)"
    if(timer.getSeconds() === 59)
        document.querySelector(".min-hand").style.transform += "rotate(6deg)"
    if(timer.getMinutes()===59) 
    document.querySelector(".hour-hand").style.transform += "rotate(6deg)"
    console.log(timer.getSeconds())
}

setInterval(ticTac,1000)