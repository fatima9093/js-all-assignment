const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalpara=document.getElementById("modal-text")
const declineBtn = document.getElementById('decline-btn')
const buttons = document.getElementById('btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    console.log('hovered')
    buttons.classList.toggle("reverse")

})


const loginform=document.getElementById("login-form")
loginform.addEventListener("submit", function(e){
    e.preventDefault()
    const logindata=new FormData(loginform)
    const name=logindata.get("inputname")
    modalpara.innerHTML=`
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span> ,you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/cat.jpg">
        </div>
    ` 
    modalCloseBtn.disabled=false 
    }, 3000)
})


