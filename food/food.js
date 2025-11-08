import { breakfast } from "./breakfast.js";
import { lunch, seafoodStarter, protein, pasta, specialNoodles, sideStarters } from "./lunch-dinner.js";

let breakfastHTML = '';
let lunchHTML = '';
let seafoodStarterHTML = '';
let proteinHTML = '';
let pastaHTML = '';
let noodlesHTML = '';
let sideStartersHTML = '';
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
            <button class="add-cart-btn js-add-button" 
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
function seafoodStarterGenerate() {
        seafoodStarter.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    
    seafoodStarterHTML += `
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
    document.getElementById('seafood-js').innerHTML = seafoodStarterHTML;
});
}
function proteinGenerate() {
        protein.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    console.log(id, name);
    
    proteinHTML += `
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
    document.getElementById('proteins-js').innerHTML = proteinHTML;
});
}
function pastaGenerate() {
        pasta.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    console.log(id, name);
    
    pastaHTML += `
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
    document.getElementById('pasta-js').innerHTML = pastaHTML;
});
}
function specialNoodlesGenerate() {
        specialNoodles.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    console.log(id, name);
    
    noodlesHTML += `
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
    document.getElementById('noodles-js').innerHTML = noodlesHTML;
});
}
function sideStarterGenerate() {
        sideStarters.forEach((food) => {
    const id = food.id;
    const name = food.name;
    const details = food.details;
    const price = food.price;
    const image = food.images;
    console.log(id, name);
    
    sideStartersHTML += `
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
    document.getElementById('sides-js').innerHTML = sideStartersHTML;
});
}
breakfastGenerate();
lunchGenerate();
seafoodStarterGenerate();
proteinGenerate();
pastaGenerate();
specialNoodlesGenerate();
sideStarterGenerate();