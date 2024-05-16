let countel= document.getElementById("count-el") 
console.log(countel)
let count=0
let saveEL=document.getElementById("save-el")
function increment(){
    count=count+1
    countel.textContent=count
}
function save(){
    let countstr=count+" - "
    saveEL.textContent+=countstr
    countel.textContent=0
    count=0
    console.log(count)
}