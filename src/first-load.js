import kitchen from "./images/kitchen.jpg";

const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnContact = document.createElement("button");

const newSectionContainer = document.createElement("div");

export function firstLoad() {
    // creating all objects
    const content = document.querySelector("#content");

    const logoContainer = document.createElement("div");
    const logo = document.createElement("p");
    logo.textContent = "Dulcis"

    const bannerContainer = document.createElement("div");
    const textTop = document.createElement("p");
    const textBottom = document.createElement("p");
    textTop.textContent = "Welcome";
    textBottom.textContent = "Have a nice and relaxing meal at the finest steak house in San Diego";
    const overlay = document.createElement("div");
    const mykitchen = new Image();
    mykitchen.src = kitchen;
    
    const chipContainer = document.createElement("div");
    const chipTop = document.createElement("div");
    btnHome.textContent = "Home";
    btnMenu.textContent = "Menu";
    btnContact.textContent = "Contact";
    const chipBorderLine = document.createElement("div");
    
    
    // adding classes
    content.classList.add("content");

    logoContainer.classList.add("logo-container");
    logo.classList.add("logo");
    
    bannerContainer.classList.add("banner-container");
    textTop.classList.add("text-top");
    textBottom.classList.add("text-bottom");
    overlay.classList.add("overlay");
    mykitchen.classList.add("kitchen-img");
    
    chipContainer.classList.add("chip-container");
    chipTop.classList.add("chip-top");
    btnHome.classList.add("btn-home");
    btnMenu.classList.add("btn-menu");
    btnContact.classList.add("btn-contact");
    chipBorderLine.classList.add("chip-border-line");
    
    newSectionContainer.classList.add("new-section-container");
    
    // appending
    content.insertAdjacentElement("beforeend", logoContainer);
    content.insertAdjacentElement("beforeend", bannerContainer);
    content.insertAdjacentElement("beforeend", chipContainer);
    content.insertAdjacentElement("beforeend", newSectionContainer);
    bannerContainer.appendChild(mykitchen);

    logoContainer.appendChild(logo);

    bannerContainer.insertAdjacentElement("beforeend", textTop);
    bannerContainer.insertAdjacentElement("beforeend", textBottom);
    bannerContainer.appendChild(overlay);
    
    chipContainer.insertAdjacentElement("beforeend", chipTop);
    chipTop.insertAdjacentElement("beforeend", btnHome);
    chipTop.insertAdjacentElement("beforeend", btnMenu);
    chipTop.insertAdjacentElement("beforeend", btnContact);
    chipContainer.insertAdjacentElement("beforeend", chipBorderLine);
};

export {newSectionContainer, btnHome, btnMenu, btnContact};