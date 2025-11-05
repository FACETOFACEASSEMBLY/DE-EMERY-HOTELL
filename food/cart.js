export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    id: '28432321392hksh7wew9dbify78e7nhd7b8',
    name: 'Jollof Rice & Chicken',
    images: '/images/food images/jollor rice and chicken.png',
    price: 3500
}, {
    id: '234939fkgysigfyie457390nfify78e7nhd7b8',
    name: 'Fried Rice & Deluxe',
    images: '/images/food images/fried rice and chicken.png',
    price: 4000
}];

export function addToCart(productId, productName, productPrice, productImage) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        console.log('item has been added successfully');
    }
    else {
        cart.push({
                id: productId,
                name: productName,
                images: productImage,
                price: productPrice
            });
    }
    saveToStorage();
}
export function removeFromCart(productId) {
    cart = cart.filter(cartItem => 
        cartItem.id !== productId
    );
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

console.log(cart);
