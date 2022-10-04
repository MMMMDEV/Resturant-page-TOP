import { newSectionContainer } from "./first-load";

export function menu() {
    // creating objects
    const hoursContainer = document.createElement("div");
    const hours = document.createElement("div");
    const address = document.createElement("div");
    const gitLink = document.createElement("div");

    // adding classes
    hoursContainer.classList.add("hours-container");
    hours.classList.add("hours");
    address.classList.add("address");
    gitLink.classList.add("gitLink");

    // appending
    newSectionContainer.appendChild(hoursContainer);
}