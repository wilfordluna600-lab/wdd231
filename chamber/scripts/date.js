document.getElementById("lastModified").innerHTML = document.lastModified;

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear();