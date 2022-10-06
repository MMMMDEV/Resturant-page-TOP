import "./style.css";
import "./normalize.css";

import {firstLoad} from "./first-load";
import { newSectionContainer } from "./first-load";
import {btnHome, btnMenu, btnContact} from "./first-load";

import {hours} from "./hour-module";
import {hoursContainer} from "./hour-module";

import {menu} from "./menu-module";
import {menuContainer} from "./menu-module";

firstLoad();
// hours();
menu();

btnHome.addEventListener("click", e => {
    newSectionContainer.appendChild(hoursContainer);
})

btnMenu.addEventListener("click", e => {
    hoursContainer.remove();
})

