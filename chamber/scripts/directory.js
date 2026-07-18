const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    // console.table(data.members);
    displayMembers(data.members);
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
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;

    });
}