import { routes } from '../data/routes.mjs';
console.log(routes);


const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


const showHere = document.querySelector("#allroutes");

function displayItems(routes) {
    routes.forEach(x => {
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
        const thedistance = document.createElement('p');
        thedistance.innerText = x.distance;
        thecard.appendChild(thedistance);
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        showHere.appendChild(thecard);
    })
}

displayItems(routes);