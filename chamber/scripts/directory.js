const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    const goldSilverMembers = data.members.filter(
        (member) => member.membership === "gold" || member.membership === "silver"
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

        businessName.textContent = `${member.name}`;

        logo.setAttribute('src', `${member.image}`);
        logo.setAttribute('alt', `${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '80');
        logo.setAttribute('height', '80');

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;

        card.appendChild(businessName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}