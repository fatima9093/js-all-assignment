const textAreaEl=document.getElementById("text-el")
const btnEl=document.getElementById("btn-el")

btnEl.addEventListener("click", function(e){
    e.preventDefault()
    const ul=document.getElementById("ul-el")
    console.log(ul)
    const li=document.createElement("li")
    li.innerHTML=textAreaEl.value
    ul.appendChild(li)
    textAreaEl.value=""
})