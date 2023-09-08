const cardData = [
	{
		heading: 'Coffee',
		tag: 'coffee',
		image: './img/coffee.jpeg',
		price: 2.50,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 1,
		inCart: 0
	},
	{
		heading: 'Cafe Au Lait',
		tag: 'cafeauLait',
		image: 'img/cafe_au_lait.jpeg',
		price: 3.50,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 2,
		inCart: 0
	},
	{
		heading: 'Double Espresso',
		tag: 'dblEspresso',
		image: 'img/dbl_esp.jpeg',
		price: 4.50,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 3,
		inCart: 0
	},
	{
		heading: 'Cafe Mocha',
		tag: 'cafeMocha',
		image: 'img/cafe_mocha.jpeg',
		price: 5.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 4,
		inCart: 0
	},
	{
		heading: 'Salted Caramel Mocha',
		tag: 'caramelMocha',
		image: 'img/caramel_mocha.jpeg',
		price: 5.50,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 5,
		inCart: 0
	},
	{
		heading: 'Americano',
		tag: 'americano',
		image: 'img/americano.jpeg',
		price: 5.25,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 6,
		inCart: 0
	},
	{
		heading: 'Cappuccino',
		tag: 'cappucino',
		image: 'img/cappucino.jpeg',
		price: 5.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 7,
		inCart: 0
	},
	{
		heading: 'Iced Coffee',
		tag: 'icedcoffee',
		image: 'img/ice_coffee.jpeg',
		price: 5.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 8,
		inCart: 0
	},
]

const postContainer = document.querySelector('.card-container');

var postMethods = () => {
	cardData.map((postData) => {
		const postElement = document.createElement('div');
		postElement.classList.add('card');
		postElement.innerHTML = `
            <h3 class="card-heading">${postData.heading}</h3>
            <img src="${postData.image}" alt="Item Image" />
            <p class="card-price">${postData.price.toFixed(2)}</p>
            <div class="container_button">
            <a href=${postData.buttonAddress}>${postData.buttonText}</a>
            </div>
            `
		postContainer.appendChild(postElement)
	})
};
postMethods();

//dessert section
const cardData2 = [
	{
		heading: 'Pecan Tart',
		tag: 'pecanTart',
		image: 'img/pecan_tart.jpeg',
		price: 7.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 9,
		inCart: 0
	},
	{
		heading: 'Chocolate Croissant',
		tag: 'choccroissant',
		image: 'img/choc_croissant.jpeg',
		price: 5.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 10,
		inCart: 0

	},
	{
		heading: 'Croissant',
		tag: 'croissant',
		image: 'img/croissant.jpeg',
		price: 5.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 11,
		inCart: 0
	},
	{
		heading: 'Brownie Cheesecake',
		tag: 'brownieCheesecake',
		image: 'img/brownie_cheesecake.jpeg',
		price: 10.00,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 12,
		inCart: 0
	},
	{
		heading: 'Brownie Cookie',
		tag: 'cookie',
		image: 'img/brownie.jpeg',
		price: 4.50,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 13,
		inCart: 0
	},
]

const postContainer2 = document.querySelector('.card-container-2');

var postMethods = () => {
	cardData2.map((postData) => {
		const postElement = document.createElement('div');
		postElement.classList.add('card');
		postElement.innerHTML = `
            <h3 class="card-heading">${postData.heading}</h3>
            <img src="${postData.image}" alt="Item Image" />
            <p class="card-price">${postData.price}</p>
            <div class="container_button2">
            <a href=${postData.buttonAddress}>${postData.buttonText}</a>
            </div>
            `
		postContainer2.appendChild(postElement)
	});
}
postMethods();

//Cart//

let carts1 = document.querySelectorAll('.container_button');
let carts2 = document.querySelectorAll('.container_button2');


for (let i = 0; i < carts1.length; i++) {
	carts1[i].addEventListener('click', () => {
		cart_numbers(cardData[i]);
		totalCost(cardData[i]);
		location.reload();
		event.preventDefault();
	})
};
for (let i = 0; i < carts2.length; i++) {
	carts2[i].addEventListener('click', () => {
		cart_numbers(cardData2[i]);
		totalCost(cardData2[i]);
		location.reload();
		event.preventDefault();

	})
};


//display items in cart
function onLoadCartNumbers() {

	let productNumbers = localStorage.getItem('cart_numbers');
	if (productNumbers) {
		document.getElementById('cartBadge').textContent = productNumbers;
	}
};

//update cart icon with current number of items in cart
function cart_numbers(cardData) {
	event.preventDefault();
	let productNumbers = localStorage.getItem('cart_numbers');
	productNumbers = parseFloat(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cart_numbers', productNumbers + 1);
		const badge = document.getElementById('cartBadge');
		badge.textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cart_numbers', 1);
		const badge = document.getElementById('cartBadge');
		badge.textContent = 1;
	}

	setItems(cardData);
};

function setItems(cardData) {
	let cartItems = localStorage.getItem("cardDatainCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[cardData.tag] == undefined) {
			cartItems = {
				...cartItems,
				[cardData.tag]: cardData
			}
		}
		cartItems[cardData.tag].inCart += 1;
	} else {
		cardData.inCart = 1;
		cartItems = {
			[cardData.tag]: cardData
		}
	}
	localStorage.setItem("cardDatainCart", JSON.stringify(cartItems));
};

//adding up items
function totalCost(cardData) {
	let cartCost = Number(localStorage.getItem('totalCost'));
	if (cartCost == 0) {
		cartCost = Number(cardData.price).toFixed(2);
		localStorage.setItem('totalCost', cartCost);
	}
	else {
		cartCost = Number((cartCost).toFixed(2)) + Number((cardData.price).toFixed(2));
		localStorage.setItem('totalCost', cartCost);
	}
	console.log("cartCost, new price is: ", cartCost)

};

function displayCart() {
	let cartItems = localStorage.getItem('cardDatainCart');
	cartItems = JSON.parse(cartItems);
	let cartHouse = document.querySelector('.items');
	let cartCost = Number(localStorage.getItem('totalCost'));

	console.log(cartItems)

	if (cartItems && cartHouse) {
		cartHouse.innerHTML = '';
		Object.values(cartItems).map(item => {
			cartHouse.innerHTML += `
				<div class="item row">
						<div class="col-5">
							<p>${item.heading}</p>
						</div>
							<div class="col-4 price-quantity">
								<span class="minus" <button type="button" data-itemId="${item.id}">-</button></span>
								<span class="quantity" id="cartQuantity" data-itemId="${item.id}">${item.inCart}</span>
								<span class="plus" <button type="button" data-itemId="${item.id}">+</button></span>
								</div>
						<div class="col-3">
							<span class="totalPrice">$${(item.inCart * item.price).toFixed(2)}</span>
							<span class="removeBtn" <button type="button" data-itemId="${item.id}"> X</button></span>

							</div>
				</div>
				`
		});
		//<i class="fas fa-arrow-alt-circle-left"></i>
		//<i class="fas fa-arrow-alt-circle-right"></i>
		cartHouse.innerHTML += `
			<div class="sumContainer">
				<span class="total"><h4>Total</h4></span
				<span class="cartTotal"><h4>$${cartCost.toFixed(2)}</h4></span
			</div>
		`
		cartHouse.innerHTML += `
		<form action="/create-checkout-session" id="checkingOut" method="POST">
		<button type="button" id="checkoutBtn">Checkout</button>
	</form>
	`

	}
	document.addEventListener("DOMContentLoaded", async (e) => {
		if (e && e.preventDefault) { e.preventDefault(); }
		const checkout = document.getElementById("checkingOut");
		let incrementQuantity = document.querySelectorAll('.plus');
		let decrementQuantity = document.querySelectorAll('.minus');
		let removeItem = document.querySelectorAll('.removeBtn');

		checkout.addEventListener("click", getData);

		//increment function
		incrementQuantity.forEach((button) => {
			button.addEventListener('click', (e) => {
				console.log("inside increment")
				let itemsInCart = JSON.parse(localStorage.getItem('cardDatainCart'));
				let cart = [];
				const total = Number(localStorage.getItem('totalCost'));
				let cartQuantity = Number(localStorage.getItem('cart_numbers'));
				let keys = Object.keys(itemsInCart);
				keys.forEach((key) => {
					cart.push(itemsInCart[key])
				});
				cart.forEach((item) => {
					if (item.id == e.target.dataset.itemid) {
						console.log("original item quantity = " + item.inCart)
						item.inCart++;
						cartQuantity++;
						localStorage.setItem('cardDatainCart', item.inCart + 1);
						localStorage.setItem('cart_numbers', cartQuantity)
						localStorage.setItem('totalCost', total + item.price)
						localStorage.setItem("cardDatainCart", JSON.stringify(cart));
						location.reload();
					}
				})
				onLoadCartNumbers();
			})
		});

		//decrement function
		decrementQuantity.forEach((button) => {
			button.addEventListener('click', (e) => {
				console.log('inside decrement')
				let itemsInCart = JSON.parse(localStorage.getItem('cardDatainCart'));
				let cart = [];
				let cartQuantity = Number(localStorage.getItem('cart_numbers'));
				const total = Number(localStorage.getItem('totalCost'));
				let keys = Object.keys(itemsInCart);
				keys.forEach((key) => {
					cart.push(itemsInCart[key])
				});
				cart.forEach((item) => {
					if (item.id == e.target.dataset.itemid) {
						console.log("original item quantity = " + item.inCart)
						if (item.inCart >= 2) {
							--item.inCart;
							--cartQuantity;
							localStorage.setItem('cardDatainCart', item.inCart - 1)
							localStorage.setItem('cart_numbers', cartQuantity);
							localStorage.setItem('totalCost', total - item.price)
							localStorage.setItem("cardDatainCart", JSON.stringify(cart));
						} else {
							item.inCart === 1;
							console.log(item.inCart)
						}
						location.reload();
					};
				})
			})
			onLoadCartNumbers();
		});

		//remove an item from the cart
		removeItem.forEach((button) => {
			button.addEventListener('click', (e) => {
				console.log('inside removing item')
				let itemsInCart = JSON.parse(localStorage.getItem('cardDatainCart'));
				let cart = [];
				let cartQuantity = Number(localStorage.getItem('cart_numbers'));
				const total = Number(localStorage.getItem('totalCost'));
				let keys = Object.keys(itemsInCart);
				keys.forEach((key) => {
					cart.push(itemsInCart[key])
				});
				cart.forEach((item) => {

					if (item.id == e.target.dataset.itemid) {
						for (var i = cart.length; i--;) {
							if (cart[i] === item) cart.splice(i, 1);
						}
						localStorage.removeItem('cardDatainCart', item)
						localStorage.setItem('totalCost', total - (item.inCart * item.price))
						localStorage.setItem('cart_numbers', cartQuantity - item.inCart)
						localStorage.setItem('cardDatainCart', item.inCart = 0);
						localStorage.setItem('cardDatainCart', itemsInCart - item);
						localStorage.setItem("cardDatainCart", JSON.stringify(cart));
					}
					location.reload();
				})
			})
			onLoadCartNumbers();
		})

	})
}


//modal
const modal = document.getElementById("myModal");
const closeModal = document.getElementById('closeBtn');
const openModal = document.getElementById("modalOpen");
const body = document.querySelector("body");
const modalOverlay = document.getElementById("modal-overlay");


openModal.addEventListener("click", function () {
	modal.style.display = "block";
	modalOverlay.style.display = "block";

});

closeModal.addEventListener("click", function () {
	modal.style.display = "none";
	modalOverlay.style.display = "none";
});

window.addEventListener("click", function (event) {
	if (event.target === modalOverlay) {
		modal.style.display = "none";
		modalOverlay.style.display = "none";
	}
});

//stripe client side
STRIPE_PUBLIC_KEY = 'pk_test_51NhCsxFmGRsKaDfvIYsZHFAiznxVWW199fU1ysxbLITI3jeIfv9U5OX9yer9Yz5bp43UGNjLi5S12hKcp58DaMtg00JQKJPNDU';
const getData = async function () {
	let cart = localStorage.getItem('cardDatainCart');
	cart = JSON.parse(cart)
	const session = await fetch('/create-checkout-session', {
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		body: JSON.stringify(cart)
	}).then(async res => {
		const checkoutLink = await res.json();
		window.location.href = checkoutLink.url;
	})
		.catch((e) => {
			console.error("Error in checkout call to server" + e)
		})
}



onLoadCartNumbers();
displayCart();

