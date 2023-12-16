// Variables

const buttonElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");
const copyIconElement = document.querySelector(".fa-copy");
const alertContainerElement = document.querySelector(".alert-container");

// Event listeners

buttonElement.addEventListener("click", () => {
    createPassword();
});

copyIconElement.addEventListener("click", () => {
    copyPassword();
    if (inputElement.value) {
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
            alertContainerElement.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputElement.value = password;
    alertContainerElement.innerText = password + " copied!";
}

function copyPassword() {
    inputElement.select();
    inputElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputElement.value);
}
