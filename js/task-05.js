const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onOutputContent);

function onOutputContent(event) {
    if (event.currentTarget.value !== "") {
       return output.textContent = event.currentTarget.value;
    } return output.textContent = "Anonymous";
}