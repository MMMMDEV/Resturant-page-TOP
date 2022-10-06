import "./style.css";
import "./normalize.css";

import {firstLoad} from "./first-load";
import { newSectionContainer } from "./first-load";
import {btnHome, btnMenu, btnContact} from "./first-load";

import {hours} from "./hour-module";
import {hoursContainer} from "./hour-module";

import {menu} from "./menu-module";
import {menuContainer} from "./menu-module";

import {contact} from "./contact-module";
import {contactContainer} from "./contact-module";

firstLoad();
hours();
menu();
contact();
menuContainer.remove();
contactContainer.remove();
btnHome.classList.add("active-btn");

btnHome.addEventListener("click", e => {
    menuContainer.remove();
    contactContainer.remove();
    newSectionContainer.appendChild(hoursContainer);
    btnHome.classList.add("active-btn");
    btnMenu.classList.remove("active-btn");
    btnContact.classList.remove("active-btn");
});

btnMenu.addEventListener("click", e => {
    hoursContainer.remove();
    contactContainer.remove();
    newSectionContainer.appendChild(menuContainer);
    btnHome.classList.remove("active-btn");
    btnMenu.classList.add("active-btn");
    btnContact.classList.remove("active-btn");
});

btnContact.addEventListener("click", e => {
    hoursContainer.remove();
    menuContainer.remove();
    newSectionContainer.appendChild(contactContainer);
    btnHome.classList.remove("active-btn");
    btnMenu.classList.remove("active-btn");
    btnContact.classList.add("active-btn");
});
