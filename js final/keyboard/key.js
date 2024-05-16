// let word=document.querySelector(".key")
// document.addEventListener("keypress", function(event) {
//     var keyCode = event.keyCode || event.which
//     word.innerHTML=`${keyCode}`
// });

const word=document.querySelector("#insert")
window.addEventListener("keydown",function(event){
    word.innerHTML=`<div class="color">
    <table>
    <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
    </tr>
    </table>
    </div>`
})

