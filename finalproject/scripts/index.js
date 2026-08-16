document.addEventListener("DOMContentLoaded", () => {

  const firstPage = [
    {
    subtitle: "Club Members",
    content: "Our club has 60 members, with a president along with nine other members who run this club. We accept people who are of legal age and want to participate.",
    image: "images/image-running-one.jpg",
    imageName: "first image running",
    },
    {
    subtitle: "Weekly Practices",
    content: "We have weekly practices at Pisco Beach and Paracas Beach, which are located in the city of Pisco; all members are invited to come and practice with the group while enjoying the relaxing view of the sea.",
    image: "images/image-running-two.jpg",
    imageName: "second image running",
    },
  ];

  function createContentCard(showContent) {
    document.querySelector(".first-content").innerHTML = "";
    showContent.forEach(contents => {
      let card = document.createElement("section");
      let eachSubtitle = document.createElement("h2");
      let eachContent = document.createElement("p");
      let img = document.createElement("img");

      eachSubtitle.textContent = contents.subtitle;
      eachContent.textContent = contents.content;
      img.src = contents.image;
      img.alt = contents.imageName;
      img.setAttribute("loading", "lazy");
      img.setAttribute("width", 400);     

      card.appendChild(eachSubtitle);
      card.appendChild(eachContent);
      card.appendChild(img);

      document.querySelector(".first-content").appendChild(card);
    });
  };

  const firstContainer = document.querySelector(".first-content");
  if (firstContainer) {
    createContentCard(firstPage);
  }
});