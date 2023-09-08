
Designed, developed and deployed a full stack e-commerce web application featuring a Node.js backend with an express server and Stripe integration for payment processing.

I designed this application to be easily templated, increasing reusaability.

The front end was designed to function similarly to a Single Page Application, creating a friendly and fluid user experience.

This application is fully functional. You can add items to the shopping cart and delete items from the shopping cart. You can increment and decrement the items as well. After you are done adding items to the shopping cart you can click the "checkout" button and it will bring you to the Stripe checkout page where you can input credit card and personal info (see below) to test the credit card functionality.

Directions for testing Stripe Integration:
  --> If you would like to test the Stripe integration, feel free to load the shopping cart with items and then use the following test cards to checkout. Do not input real credit card information!
  -Email: input any email (doesn't have to be real but must have a typical email format xx@xx.com
  -Credit cards:
      -Card for success: 4242 4242 4242 4242 exp 12/25 CVC 123
      -Card for failure (generic decline): 4000 0000 0000 0002 exp 12/25 CVC 123
  -Name on card: input any name
  -Zip code: input any 5 numbers
  -Then hit pay and it will let you know if the "payment" succeeded or failed

  Feel free to leave feedback!

