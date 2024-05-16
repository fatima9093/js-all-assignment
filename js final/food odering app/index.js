const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        image: "images/pizza.png"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        image: "images/burger.png",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        image: "images/bear.png",
        id: 2
    }
]
// console.log(menuArray)
const shopingCart=[]

// rendering array
function render(array){
    const innerHtml=array.map(function(obj){
        return `            
        <section class="container">
        <div>
            <img src=${obj.image} class="image">
        </div>
        <div class="item">
            <p class="item-heading">${obj.name}</p>
            <p class="item-ingredient">${obj.ingredients}</p>
            <p class="item-price">$${obj.price}</p>
        </div>
        <div><img src="images/add-btn.png"
        class="img" 
        id="add-btn"
        data-buy="${obj.id}" ></div>
        </section>
        <hr class="divider">`
    })
    return innerHtml
}
document.getElementById("element").innerHTML=render(menuArray).join(" ")

// add button is clicked
document.addEventListener("click",function(e){
    if(e.target.dataset.buy){
        // console.log(e.target.dataset.buy)
        addItemToShoppingCart(e.target.dataset.buy)
        checkoutEl.style.display="block"
    }
    else if(e.target.dataset.remove){
        console.log(e.target.dataset.remove)
        removeItemFromCart(e.target.dataset.remove)
    }
})

// add item to shopping card function


function addItemToShoppingCart(itemId){
    const addedItem=menuArray.filter(function(item){
        return item.id==itemId
    })[0]
    shopingCart.push(addedItem)
    // console.log(addedItem)
    renderCart()
}
function removeItemFromCart(itemIndex){
    shopingCart.splice(itemIndex,1)
    if(shopingCart.length==0){
        checkoutEl.style.display="none"
    }
    renderCart()
}

function renderCart(){
    let renderHtml=``
     shopingCart.forEach(function(items,index){
        renderHtml+=`
        <div class="flex1">
        <div class="flex2">
        <p class="add-el">${items.name}</p>
        <span 
        id="span"
        class="span"
        data-remove=${index}>remove</span>
        </div>
        <p class="add-pr">$${items.price}</p>
        </div>`
    })
    document.getElementById("cartList").innerHTML=renderHtml
    addPrices()
}



// submit button working
const checkoutEl=document.getElementById("checkout")
const cardSection=document.getElementById("card")
// console.log(cardSection)
document.addEventListener("submit", function(e){
    e.preventDefault()
    const data=new FormData(document.getElementById("form"))
    const cardName= data.get("card-name")
    console.log(cardName)

    cardSection.style.display="none"
    checkoutEl.style.display="none"
    document.getElementById("renderMessege").innerHTML=`<p class="lastMessege">Thanks, ${cardName}! Your order is on its way!</p>
    `
})



// complete button 
const completeBtn=document.getElementById("completeBtn")
completeBtn.addEventListener("click",function(){
    cardSection.style.display="block"
})

function addPrices(){
    let price=0
    shopingCart.forEach(function(shopedItem){
        price+=shopedItem.price
        document.getElementById("add-pr").textContent=`$${price}`
    })
}

render(menuArray)
