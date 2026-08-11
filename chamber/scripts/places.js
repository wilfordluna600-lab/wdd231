import { places } from '../data/places.mjs';
console.log(places);

const showHere = document.querySelector("#allplaces");

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.name;
        thephoto.loading = 'lazy';
        thephoto.width = 300;
        thephoto.height = 200;
        thecard.appendChild(thephoto);
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);
        const thebutton = document.createElement('button');
        thebutton.innerText = 'Learn More';
        thecard.appendChild(thebutton);

        showHere.appendChild(thecard);
    })
}

displayItems(places);

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}
else {
    const timeBetweenVisits = currentVisit - Number(lastVisit);
    const days = Math.floor(timeBetweenVisits / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    }
    else if (days === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    }
    else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);