var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let product = {
	itemName: item,
	itemPrice: Math.floor((Math.random() * 100) + 1)
}
	if (product.itemName !== undefined){
		cart.push(product)
	return `${item} has been added to your cart.`
	}
}

function viewCart(){
if (cart.length === 0){
		return ("Your shopping cart is empty.")
}

	if (cart.length === 1){
		return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
		}
	else if (cart.length === 2){
		return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
		}
}
let totalC = 0 
function total(){
	for (let i = 0; i<cart.length; i++){
		totalC = totalC + cart[i].itemPrice
	}
return totalC
}

 function removeFromCart(item){
	for (let i = 0; i<cart.length; i++){
		if (item === cart[i].itemName){
			delete cart.itemName
			return cart
		}
	}
}

function placeOrder(cardNo){
 if (cardNo === undefined){
 	return "Sorry, we don't have a credit card on file for you."
 }
 else{
 	(cart = 0)
 	return `Your total cost is $${totalC}, which will be charged to the card ${cardNo}.`
  }
}
