require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

const cardData = [
	{
		heading: 'Coffee',
		tag: 'coffee',
		image: './img/coffee.jpeg',
		price: 2500,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 1,
		inCart: 0
	},
	{
		heading: 'Cafe Au Lait',
		tag: 'cafeauLait',
		image: 'img/cafe_au_lait.jpeg',
		price: 3500,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 2,
		inCart: 0
	},
	{
		heading: 'Double Espresso',
		tag: 'dblEspresso',
		image: 'img/dbl_esp.jpeg',
		price: 4500,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 3,
		inCart: 0
	},
	{
		heading: 'Cafe Mocha',
		tag: 'cafeMocha',
		image: 'img/cafe_mocha.jpeg',
		price: 5000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 4,
		inCart: 0
	},
	{
		heading: 'Salted Caramel Mocha',
		tag: 'caramelMocha',
		image: 'img/caramel_mocha.jpeg',
		price: 5500,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 5,
		inCart: 0
	},
	{
		heading: 'Americano',
		tag: 'americano',
		image: 'img/americano.jpeg',
		price: 5250,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 6,
		inCart: 0
	},
	{
		heading: 'Cappuccino',
		tag: 'cappucino',
		image: 'img/cappucino.jpeg',
		price: 5000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 7,
		inCart: 0
	},
	{
		heading: 'Iced Coffee',
		tag: 'icedcoffee',
		image: 'img/ice_coffee.jpeg',
		price: 5000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 8,
		inCart: 0
	},
	{
		heading: 'Pecan Tart',
		tag: 'pecanTart',
		image: 'img/pecan_tart.jpeg',
		price: 7000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 9,
		inCart: 0
	},
	{
		heading: 'Chocolate Croissant',
		tag: 'choccroissant',
		image: 'img/choc_croissant.jpeg',
		price: 5000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 10,
		inCart: 0

	},
	{
		heading: 'Croissant',
		tag: 'croissant',
		image: 'img/croissant.jpeg',
		price: 5000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 11,
		inCart: 0
	},
	{
		heading: 'Brownie Cheesecake',
		tag: 'brownieCheesecake',
		image: 'img/brownie_cheesecake.jpeg',
		price: 10000,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 12,
		inCart: 0
	},
	{
		heading: 'Brownie Cookie',
		tag: 'cookie',
		image: 'img/brownie.jpeg',
		price: 4500,
		buttonAddress: '#',
		buttonText: 'ADD',
		id: 13,
		inCart: 0
	},
]

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// allow preflight
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

app.post('/create-checkout-session', async (req, res) => {
	try {
		const keys = Object.keys(req.body);
		let cart = [];
		let line_items = [];
		keys.forEach((key) => {
			cart.push(req.body[key]);
		});
		cart.forEach((item) => {
			line_items.push({
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.heading
					},
					unit_amount: item.price * 100,
				},
				quantity: item.inCart,
				adjustable_quantity: {
					enabled: true,
				}
			})
		});

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: line_items,
			mode: 'payment',
			success_url: `${process.env.SERVER_URL}/success.html`,
			cancel_url: `${process.env.SERVER_URL}/cancel.html`,
		})
		res.send({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
})
app.listen(3000, () => console.log(`listening on port ${3000}`))
