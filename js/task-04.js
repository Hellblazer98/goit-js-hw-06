let counterValue = 0;

const btnIncrement = document.querySelector('button[data-action = "increment"]');
const btnDecrement = document.querySelector('button[data-action = "decrement"]');
const count = document.querySelector('#value');

btnIncrement.addEventListener("click", increse);

btnDecrement.addEventListener("click", decrese);

function increse(event) {
    counterValue +=1;
    count.textContent = counterValue;
}

function decrese(event) {
    counterValue -=1;
    count.textContent = counterValue;
}

