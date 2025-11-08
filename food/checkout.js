import { cart, addToCart, removeFromCart } from "./cart.js";
import { updateTotalPrice } from "./pricing.js";

const addSound = new Audio('add to cart sound.mp3');

function playAddToCartSound() {
    addSound.currentTime - 0; //this will restart the soudn if spam clicked
    addSound.play();

}

    function generateCheckout() {
    let cartHTML = '';
    cart.forEach((cartItem) => {
    const id = cartItem.id;
    const name = cartItem.name;
    const price = cartItem.price;
    const images = cartItem.images;

    cartHTML += `
        <div id="delete-button-${id}" class="cart-item">
            <img src="${images}" alt="Jollof Rice">

            <div class="cart-info">
                <h3>${name}</h3>
                <p>₦${price}</p>
            </div>

            <button class="delete-btn js-delete-button" 
            data-product-id = "${id}">Remove</button>
        </div>
        
    `;
    console.log(id);
    
});
document.getElementById('cart-js').innerHTML = cartHTML;
deleteFood();
addFood();
}
generateCheckout();



//THIS IS USED TO ADD PRODUCTS FROM THE PAGE
function addFood() {
    document.querySelectorAll('.js-add-button').forEach((button) => {
    button.addEventListener('click', () => {
        playAddToCartSound();
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;
        const productPrice = button.dataset.productPrice;
        const productImage = button.dataset.productImage;
        console.log(productId, productName, productPrice, productImage);
        console.log(cart);
        addToCart(productId, productName, productPrice, productImage);
        generateCheckout();
        updateTotalPrice();
    }); 
});
}
addFood();

    //THIS IS USED TO DELETE A PRODUCT FROM THE PAGE
    function deleteFood() {
        document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        console.log(productId);
        removeFromCart(productId);
        const container = document.getElementById(`delete-button-${productId}`);
        console.log(cart);
        container.remove();
        generateCheckout();
        updateTotalPrice();
        
    });
});
console.log(cart);
    }
deleteFood();

