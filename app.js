
// Get the elements we will be working with
let openShopping = document.querySelector('.shopping'); // The shopping cart button
let closeShopping = document.querySelector('.closeShopping'); // The close button on the shopping cart
let list = document.querySelector('.list'); // The list of items on the page
let listCard = document.querySelector('.listCard'); // The list of items in the shopping cart
let body = document.querySelector('body'); // The body of the page
let total = document.querySelector('.total'); // The element displaying the total price in the shopping cart
let quantity = document.querySelector('.quantity'); // The element displaying the quantity of items in the shopping cart


// Event listener for opening shopping cart
openShopping.addEventListener('click', ()=>{
    // Add the 'active' class to the body, which shows the shopping cart
    body.classList.add('active'); 
});

// Event listener for closing shopping cart
closeShopping.addEventListener('click', ()=>{
    // Remove the 'active' class from the body, which hides the shopping cart
    body.classList.remove('active');
});



let products = [
    {
        id: 1,
        name: 'Pre-Workout Supplement',
        image: '4.PNG',
        price:  8500 
    },
    {
        id: 2,
        name: 'Gym Ball',
        image: '2.PNG',
        price: 20000
    },
    {
        id: 3,
        name: 'Situp Machine',
        image: '3.PNG',
        price: 50000
    },
    {
        id: 4,
        name: 'Elite Training Glove XL',
        image: '1.PNG',
        price: 5000
    },
    {
        id: 5,
        name: 'Pushup Stands',
        image: '5.PNG',
        price: 50000
    },
    {
        id: 6,
        name: 'Resistance Bands ',
        image: '6.PNG',
        price: 3500
    }
];



// Create an empty variable to hold the total price
let listCards  = [];

function initApp(){
    let totalPrice = 0;

    // Loop through each product in the `products` array
    products.forEach((value, key) =>{
        // Create a new <div> element for the product
        let newDiv = document.createElement('div');
         // Add the `item` class to the <div>
        newDiv.classList.add('item');
         // Set the innerHTML of the <div> to display the product image, name, price, and a button to add it to the cart
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        
        // Add the new <div> to the `list` element in the HTML
        list.appendChild(newDiv);
    })
}



initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = {
            ...products[key],
            quantity: 1,
            price: products[key].price // Set initial price here
        };
    } else {
        listCards[key].quantity++; // If item is already in cart, just increase quantity
    }
    reloadCard();
}

function reloadCard(){
    // clear the current list of items in the cart
    listCard.innerHTML = '';
    // initialize count and total price to zero
    let count = 0;
    let totalPrice = 0;
    // iterate over the list of items in the cart
    listCards.forEach((value, key)=>{
        // if the item exists
        if (value != null) {
            // add the price and quantity to the count and total price variables
            totalPrice += value.price;
            count += value.quantity;
            // create a new list item element with the item's information
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            // append the new list item to the cart
            listCard.appendChild(newDiv);
        }
    });
    // update the total price and quantity displayed in the cart
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



function changeQuantity(key, quantity){
    // Check if the quantity is zero to remove the item from the listCards array.
    if(quantity == 0){
        // Get the price of the item being removed from the array.
        const itemPrice = listCards[key].price;
        // Delete the item from the listCards array.
        delete listCards[key];
        // Update the total price by subtracting the item price from the current total.
        total.innerText = (parseInt(total.innerText.replace(/,/g, "")) - itemPrice).toLocaleString();
    } else {
        // Update the quantity and price of the item in the listCards array.
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    // Reload the shopping cart to reflect the updated quantity and total price.
    reloadCard();
}




// Get references to the buttons and the page elements to modify
const increaseButton = document.getElementById("increaseFont");
const decreaseButton = document.getElementById("decreaseFont");
const bdy = document.body;
const headings = document.getElementsByTagName("h1");
const lists = document.querySelector(".list");
const listsCard = document.querySelector(".listCard");

// Define the font size change amount
const fontSizeChange = 2;

// Handle the increase font size button click
increaseButton.addEventListener("click", () => {
  // Increase the body font size
  body.style.fontSize = parseInt(getComputedStyle(body).fontSize) + fontSizeChange + "px";
  // Increase the heading font size
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.fontSize = parseInt(getComputedStyle(headings[i]).fontSize) + fontSizeChange + "px";
  }
  // Increase the list font size
  list.style.fontSize = parseInt(getComputedStyle(list).fontSize) + fontSizeChange + "px";
  // Increase the listCard font size
  listCard.style.fontSize = parseInt(getComputedStyle(listCard).fontSize) + fontSizeChange + "px";
});

// Handle the decrease font size button click
decreaseButton.addEventListener("click", () => {
  // Decrease the body font size
  body.style.fontSize = parseInt(getComputedStyle(body).fontSize) - fontSizeChange + "px";
  // Decrease the heading font size
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.fontSize = parseInt(getComputedStyle(headings[i]).fontSize) - fontSizeChange + "px";
  }
  // Decrease the list font size
  list.style.fontSize = parseInt(getComputedStyle(list).fontSize) - fontSizeChange + "px";
  // Decrease the listCard font size
  listCard.style.fontSize = parseInt(getComputedStyle(listCard).fontSize) - fontSizeChange + "px";
});





      
      

