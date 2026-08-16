import { routes } from '../data/routes.mjs';
console.log(routes);


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
        thedistance.innerText = `Distance: ${x.distance}`;
        thecard.appendChild(thedistance);

        const thedifficulty = document.createElement('p');
        thedifficulty.innerText = `Difficulty: ${x.difficulty}`;
        thecard.appendChild(thedifficulty);

        const thetime = document.createElement('p');
        thetime.innerText = `Estimated time: ${x.estimated_time}`;
        thecard.appendChild(thetime);

        const thedesc = document.createElement('p');
        thedesc.innerText = `Description: ${x.description}`;
        thecard.appendChild(thedesc);
        showHere.appendChild(thecard);
    })
}

displayItems(routes);