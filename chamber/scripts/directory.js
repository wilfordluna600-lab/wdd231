const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    const goldSilverMembers = data.members.filter(
        (member) => member.membership === "Gold membership" || member.membership === "Silver membership"
    );

    const randomMembers = selectRandomMembers(goldSilverMembers, 3);

    // console.table(data.members);
    displayMembers(randomMembers);
}

function selectRandomMembers(members, number) {
    const shuffled = [...members].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, number);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        // img email phone url

        let businessName = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membershipLebel = document.createElement('p');

        businessName.textContent = `${member.name}`;

        logo.setAttribute('src', `${member.image}`);
        logo.setAttribute('alt', `${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '80');
        logo.setAttribute('height', '80');

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membershipLebel.textContent = `${member.membership}`;

        card.appendChild(businessName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLebel);

        cards.appendChild(card);
    });
}

const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "2fdc2d4b07b9aaaa089c967e73c9bb77"
const myLat = "-14.0754"
const myLong = "-75.7336"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data)   ;
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('SRC', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();