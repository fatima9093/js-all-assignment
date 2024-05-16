let cards=[]
let sum=0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardEL=document.querySelector("#card-el")

let player = {
    name:"fatima",
    chips:145
}
let playerEL=document.getElementById("player-el")
playerEL.textContent=player.name+": $"+player.chips

function randomcard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive = true
    let firstCard = randomcard()
    let secondCard = randomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEL.textContent="cards: "
    for (let i=0;i<cards.length;i++){
        cardEL.textContent +=cards[i] +" "
    }

    sumEL.textContent="sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newcard(){
    if (isAlive === true && hasBlackJack === false) {
        
        let card=randomcard()
        sum+=card
        cards.push(card)
        renderGame()
    }

}