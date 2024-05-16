const randomColor=function (){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interval
let start_changing_color=function(){
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
    if(!interval){ 
       interval=setInterval(changeBgColor,1000)
    }
}
let stop_changing_color=function(){
    clearInterval(interval)
    interval=null
}
document.querySelector("#start").addEventListener("click",start_changing_color)
document.querySelector("#stop").addEventListener("click",stop_changing_color)