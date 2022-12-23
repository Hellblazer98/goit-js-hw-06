const input = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');

input.addEventListener('change', onChangeFontSize);

function onChangeFontSize(event) {
    const fontSize = event.currentTarget.value
    textEl.style.fontSize = `${fontSize}px`;

}

