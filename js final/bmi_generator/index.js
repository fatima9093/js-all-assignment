const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const weight=document.querySelector("#weight").value
    const height=document.querySelector("#height").value
    const result=document.querySelector("#results")
    if(height===" " && height<0 && isNaN(height) ){
        result.innerHTML=`Please giva a valid height ${height}`
    }
    else if(weight===" " && weight<0 && isNaN(weight) ){
        result.innerHTML=`Please giva a valid weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}<span/>`
    }
})