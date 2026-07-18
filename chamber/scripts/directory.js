const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    console.table(data.members);
}

getMembersData();