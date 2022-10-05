import "./style.css";
import "./normalize.css";
import {firstLoad} from "./first-load";
import { newSectionContainer } from "./first-load";
import {btnHome, btnMenu, btnContact} from "./first-load";
import {menu} from "./section-module";
import {hoursContainer} from "./section-module"

firstLoad();
menu();

btnHome.addEventListener("click", e => {
    newSectionContainer.appendChild(hoursContainer);
})

btnMenu.addEventListener("click", e => {
    hoursContainer.remove();
})

