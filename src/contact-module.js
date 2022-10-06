import { newSectionContainer } from "./first-load";

const contactContainer = document.createElement("div");
export function contact() {
    // creating objects
    const tittleContainer = document.createElement("div");
    const formTittle = document.createElement("p");
    formTittle.textContent = "Let us know how we can do better";

    const form = document.createElement("form");
    form.action = "#";
    form.method = "get";

    const email = document.createElement("div");
    const labelEmail = document.createElement("label");
    const inputEmail = document.createElement("input");
    labelEmail.textContent = "Email:"
    inputEmail.type = "email";
    inputEmail.pattern = "/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim";
    inputEmail.placeholder = "example@gmail.com";
    inputEmail.maxLength = "30";
    inputEmail.required = "true";

    const comment = document.createElement("div");
    const labelComment = document.createElement("label");
    const inputComment = document.createElement("textarea");
    inputComment.rows = "5";
    inputComment.cols = "30";
    labelComment.textContent = "Comment:";
    inputComment.minLength = "4";
    inputComment.maxLength = "120";
    inputComment.required = "true";

    const btnFormContainer = document.createElement("div");
    const submitFormBtn = document.createElement("button");
    submitFormBtn.textContent = "Submit";
    submitFormBtn.type = "submit";

    const gitLink = document.createElement("div");
    const myLink = document.createElement("a");
    myLink.href = "https://github.com/MMMMDEV";
    myLink.textContent = "Created by MMMMDEV";

    // adding class
    contactContainer.classList.add("contact-container");
    tittleContainer.classList.add("tittle-form-container");
    formTittle.classList.add("form-tittle");
    
    form.classList.add("form");

    email.classList.add("email");
    labelEmail.classList.add("label");
    labelEmail.classList.add("email-label");
    inputEmail.classList.add("input-email");

    comment.classList.add("comment");
    labelComment.classList.add("label");
    labelComment.classList.add("comment-label");
    inputComment.classList.add("input-comment");

    btnFormContainer.classList.add("btn-form-container");
    submitFormBtn.classList.add("submit-form-btn");

    gitLink.classList.add("gitLink");
    myLink.classList.add("my-link");

    // appending
    newSectionContainer.appendChild(contactContainer);
    contactContainer.insertAdjacentElement("beforeend", tittleContainer);
    contactContainer.insertAdjacentElement("beforeend", form);
    contactContainer.insertAdjacentElement("beforeend", gitLink);
    tittleContainer.insertAdjacentElement("beforeend", formTittle);
    form.insertAdjacentElement("beforeend", email);
    form.insertAdjacentElement("beforeend", comment);
    form.insertAdjacentElement("beforeend", btnFormContainer);
    email.insertAdjacentElement("beforeend", labelEmail);
    email.insertAdjacentElement("beforeend", inputEmail);
    comment.insertAdjacentElement("beforeend", labelComment);
    comment.insertAdjacentElement("beforeend", inputComment);
    btnFormContainer.insertAdjacentElement("beforeend", submitFormBtn);
    gitLink.insertAdjacentElement("beforeend", myLink);
}

export {contactContainer};