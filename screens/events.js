import { eventsData } from "../firebase/firebase-main.js";

console.log(eventsData);

const eventContainer = document.querySelector(".event-container");

const container = document.createElement('div');

eventsData.forEach((event) => {
    const eventEle = document.createElement('div');
    const eventDescription = document.createElement('div');
    const description = document.createElement('p');
    const title = document.createElement('h3');
    const eventImgContainer = document.createElement('div');
    const detail = document.createElement('details');
    const summary = document.createElement('summary'); 


    // add class to each element
    eventEle.className = 'event';
    eventDescription.className = 'event-description';
    description.className = 'description';
    title.className = 'event-title';
    eventImgContainer.className = 'event-img-container';

    summary.innerText = event.title;
    
    title.innerText = event.title;
    description.innerText = event.content;
    // eventDescription.appendChild(description);
    detail.append(summary,description)
    
    event.pdfurl.forEach((url) => {
        const img = document.createElement('img');
        img.className = 'event-img'
        img.src = url;
        eventImgContainer.appendChild(img);
        img.height = 250
    })
    eventImgContainer.appendChild(eventDescription);

    eventEle.append(detail,eventImgContainer);
    

    container.appendChild(eventEle);
})

if(eventsData.length != 0) eventContainer.innerHTML = container.innerHTML;