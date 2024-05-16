
let inputEl=document.getElementById("input-el")
let btnEl=document.getElementById("btn-el")
let convertEl=document.getElementById("convert-el")
let convert2El=document.getElementById("convert2-el")
let convert3El=document.getElementById("convert3-el")
console.log(convertEl)
// btnEl.addEventListener("click", function(){
//     metertofeet()
//     litretogallon()
//     kilotopound()
// })
// function metertofeet(){
//     let basevalue=inputEl.value
//     return convertEl.textContent=`${basevalue} meter = ${basevalue * 3.281}feet | ${basevalue} feet = ${basevalue/3.281}meters` 
// }
// function litretogallon(){
//     let basevalue=inputEl.value
//     return convert2El.textContent=`${basevalue} litre = ${basevalue * 0.264}gallon | ${basevalue} gallon = ${basevalue/0.264}litre` 
// }
// function kilotopound(){
//     let basevalue=inputEl.value
//     return convert3El.textContent=`${basevalue} kilo = ${basevalue * 2.204}pound | ${basevalue} pound = ${basevalue/2.204}kilo` 
// }
function conversion(){
    let basevalue=inputEl.value

    convertEl.textContent=`${basevalue} meter = ${(basevalue * 3.281).toFixed(3)}feet | ${basevalue} feet = ${(basevalue/3.281).toFixed(3)}meters`

    convert2El.textContent=`${basevalue} litre = ${basevalue * 0.264}gallon | ${basevalue} gallon = ${(basevalue/0.264).toFixed(3)}litre`

    convert3El.textContent=`${basevalue} kilo = ${basevalue * 2.204}pound | ${basevalue} pound = ${(basevalue/2.204).toFixed(3)}kilo`

    inputEl.value=""
}
