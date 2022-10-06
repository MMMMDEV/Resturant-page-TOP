import { newSectionContainer } from "./first-load";

const menuContainer = document.createElement("div");
export function menu() {
    // create objects
    const menuLunch = document.createElement("div");
    const lunchTittle = document.createElement("p");
    const dish1 = document.createElement("p");
    const dish2 = document.createElement("p");
    const dish3 = document.createElement("p");
    const dish4 = document.createElement("p");
    const price1 = document.createElement("p");
    const price2 = document.createElement("p");
    const price3 = document.createElement("p");
    const price4 = document.createElement("p");
    lunchTittle.textContent = "Lunch";
    dish1.textContent = "BACON DEVILED EGGS";
    dish2.textContent = "PHILLY CHEESESTEAK EGG ROLLS";
    dish3.textContent = "SMOKED CHICKEN WINGS";
    dish4.textContent = "CHEESEBURGER";
    price1.textContent = "$10.95";
    price2.textContent = "$16.95";
    price3.textContent = "$17.25";
    price4.textContent = "$14.95";
    
    
    const menuEntrees = document.createElement("div");
    const entreeTittle = document.createElement("p");
    const dish5 = document.createElement("p");
    const dish6 = document.createElement("p");
    const dish7 = document.createElement("p");
    const dish8 = document.createElement("p");
    const price5 = document.createElement("p");
    const price6 = document.createElement("p");
    const price7 = document.createElement("p");
    const price8 = document.createElement("p");
    entreeTittle.textContent = "Entrées";
    dish5.textContent = "IMPOSSIBLE BURGER";
    dish6.textContent = "FILET MIGNON";
    dish7.textContent = "AGED RIBEYE";
    dish8.textContent = "FIREBIRDS CHICKEN PASTA";
    price5.textContent = "$18.25";
    price6.textContent = "$38.25 (9oz.)";
    price7.textContent = "$41.50 (16 oz.)";
    price8.textContent = "$15.50";

    const gitLink = document.createElement("div");
    const myLink = document.createElement("a");
    myLink.href = "https://github.com/MMMMDEV";
    myLink.textContent = "Created by MMMMDEV";

    // adding classes

    menuContainer.classList.add("menu-container");

    menuLunch.classList.add("menu-lunch");
    lunchTittle.classList.add("lunch-tittle");
    dish1.classList.add("dish");
    dish2.classList.add("dish");
    dish3.classList.add("dish");
    dish4.classList.add("dish");
    price1.classList.add("price");
    price2.classList.add("price");
    price3.classList.add("price");
    price4.classList.add("price");

    menuEntrees.classList.add("menu-entrees");
    entreeTittle.classList.add("entree-tittle");
    dish5.classList.add("dish");
    dish6.classList.add("dish");
    dish7.classList.add("dish");
    dish8.classList.add("dish");
    price5.classList.add("price");
    price6.classList.add("price");
    price7.classList.add("price");
    price8.classList.add("price");


    gitLink.classList.add("gitLink");
    myLink.classList.add("my-link");

    // appending

    newSectionContainer.insertAdjacentElement("beforeend", menuContainer);
    menuContainer.insertAdjacentElement("beforeend", menuLunch);
    menuContainer.insertAdjacentElement("beforeend", menuEntrees);
    menuContainer.insertAdjacentElement("beforeend", gitLink);
    menuLunch.insertAdjacentElement("beforeend", lunchTittle);
    menuLunch.insertAdjacentElement("beforeend", dish1);
    menuLunch.insertAdjacentElement("beforeend", price1);
    menuLunch.insertAdjacentElement("beforeend", dish2);
    menuLunch.insertAdjacentElement("beforeend", price2);
    menuLunch.insertAdjacentElement("beforeend", dish3);
    menuLunch.insertAdjacentElement("beforeend", price3);
    menuLunch.insertAdjacentElement("beforeend", dish4);
    menuLunch.insertAdjacentElement("beforeend", price4);
    menuEntrees.insertAdjacentElement("beforeend", entreeTittle);
    menuEntrees.insertAdjacentElement("beforeend", dish5);
    menuEntrees.insertAdjacentElement("beforeend", price5);
    menuEntrees.insertAdjacentElement("beforeend", dish6);
    menuEntrees.insertAdjacentElement("beforeend", price6);
    menuEntrees.insertAdjacentElement("beforeend", dish7);
    menuEntrees.insertAdjacentElement("beforeend", price7);
    menuEntrees.insertAdjacentElement("beforeend", dish8);
    menuEntrees.insertAdjacentElement("beforeend", price8);

    gitLink.insertAdjacentElement("beforeend", myLink);
};

export {menuContainer};