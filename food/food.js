import { breakfast } from "./breakfast.js";
import { lunch } from "./lunch-dinner.js";

let breakfastHTML = '';
let lunchHTML = '';
function breakfastGenerate() {
    breakfast.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;

    breakfastHTML += `
        <div class="meal-card">
            <img src="${image}" alt="Meal" />
            <h3>${name}</h3>
            <p>${details}</p>
            <span class="price">₦${price}</span>
            <button class="add-cart-btn add-button-js" 
            data-product-id="${id}"
            data-product-name="${name}"
            data-product-price="${price}"
            data-product-image="${image}"
            >Add to Cart</button>
        </div>
    `;

    document.getElementById('breakfast-js').innerHTML = breakfastHTML;
});
}

function lunchGenerate() {
        lunch.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    
    lunchHTML += `
        <div class="meal-card">
            <img src="${image}" alt="Meal" />
            <h3>${name}</h3>
            <p>${details}</p>
            <span class="price">₦${price}</span>
            <button class="add-cart-btn js-add-button" 
            data-product-id="${id}"
            data-product-name="${name}"
            data-product-price="${price}"
            data-product-image="${image}">Add to Cart</button>
        </div>
    `;
    document.getElementById('lunch-js').innerHTML = lunchHTML;
});
}
breakfastGenerate();
lunchGenerate();