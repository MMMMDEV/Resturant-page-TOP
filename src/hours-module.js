import { newSectionContainer } from "./first-load";

export function menu() {
    // creating objects
    const hoursContainer = document.createElement("div");

    const hours = document.createElement("div");
    const hourTittle = document.createElement("p");
    const timeM = document.createElement("p");
    const timeT = document.createElement("p");
    const timeW = document.createElement("p");
    const timeTT = document.createElement("p");
    const timeF = document.createElement("p");
    const timeSA = document.createElement("p");
    const timeSU = document.createElement("p");
    hourTittle.textContent = "Hours";
    timeM.textContent = "Monday: 11am-9pm";
    timeT.textContent = "Tuesday: closed";
    timeW.textContent = "Wednesday: 11am-9pm";
    timeTT.textContent = "Thursday: Closed";
    timeF.textContent = "Friday: 11am-9pm";
    timeSA.textContent = "Saturday: 1am-8pm";
    timeSU.textContent = "Sunday: 1am-8pm";

    const address = document.createElement("div");
    const addressTittle = document.createElement("p");
    const addressTxt = document.createElement("p");
    addressTittle.textContent = "Address";
    addressTxt.textContent = "7279 Fawn Dr.San Diego, CA 92126";

    const gitLink = document.createElement("div");

    // adding classes
    hoursContainer.classList.add("hours-container");

    hours.classList.add("hours");
    hourTittle.classList.add("hour-tittle");
    timeM.classList.add("timesTxt");
    timeT.classList.add("timesTxt");
    timeW.classList.add("timesTxt");
    timeTT.classList.add("timesTxt");
    timeF.classList.add("timesTxt");
    timeSA.classList.add("timesTxt");
    timeSU.classList.add("timesTxt");

    address.classList.add("address");
    addressTittle.classList.add("address-tittle");
    addressTxt.classList.add("address-txt");

    gitLink.classList.add("gitLink");

    // appending
    newSectionContainer.appendChild(hoursContainer);
    hoursContainer.insertAdjacentElement("beforeend", hours);
    hoursContainer.insertAdjacentElement("beforeend", address);
    hoursContainer.insertAdjacentElement("beforeend", gitLink);
    hours.insertAdjacentElement("beforeend", hourTittle);
    hours.insertAdjacentElement("beforeend", timeM);
    hours.insertAdjacentElement("beforeend", timeT);
    hours.insertAdjacentElement("beforeend", timeW);
    hours.insertAdjacentElement("beforeend", timeTT);
    hours.insertAdjacentElement("beforeend", timeF);
    hours.insertAdjacentElement("beforeend", timeSA);
    hours.insertAdjacentElement("beforeend", timeSU);
    address.insertAdjacentElement("beforeend", addressTittle);
    address.insertAdjacentElement("beforeend", addressTxt);
}