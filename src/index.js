import "./style.css";
import "./normalize.css";
import kitchen from "./images/kitchen.jpg";

const content = document.querySelector("#content");
const logoContainer = document.createElement("div");
const bannerContainer = document.createElement("div");
const chipContainer = document.createElement("div");
const hoursContainer = document.createElement("div");
const mykitchen = new Image();
mykitchen.src = kitchen;

content.classList.add("content");
logoContainer.classList.add("logo-container");
bannerContainer.classList.add("banner-container");
chipContainer.classList.add("chip-container");
hoursContainer.classList.add("hours-container");
mykitchen.classList.add("kitchen-img")

content.insertAdjacentElement("beforeend", logoContainer);
content.insertAdjacentElement("beforeend", bannerContainer);
content.insertAdjacentElement("beforeend", chipContainer);
content.insertAdjacentElement("beforeend", hoursContainer);
bannerContainer.appendChild(mykitchen);
