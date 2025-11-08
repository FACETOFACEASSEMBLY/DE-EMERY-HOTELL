import { eventCateg } from "./eventCateg.js";

let eventHTML = '';

eventCateg.forEach((eventItem) => {
    const image = eventItem.image;
    const name = eventItem.head;
    const description = eventItem.description;
    const date = eventItem.date;
    
    eventHTML += `
        <div class="event-card">
            <div class="event-card-img">
                <img src="${image}">
            </div>
            <div class="event-card-body">
                <h3>${name}</h3>
                <p>${description}</p>
                <span class="event-date">${date}</span>
                <a href= "tel:+2347038887934"><button class="card-btn">View Details</button></a>
            </div>
        </div>
    `;

    document.getElementById('js-event-area').innerHTML = eventHTML;
});