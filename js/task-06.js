const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

console.log(dataLength);

input.addEventListener('blur', onInput);

function onInput(event) {
    if (event.currentTarget.value.length === Number(dataLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid"); 
    }
}