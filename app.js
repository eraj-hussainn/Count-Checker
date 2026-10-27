// var span = document.getElementById("number")
// var workOn = Number(span.innerText)

var result = 0;

const number = document.getElementById("number");

function increment() {
    result = result + 1;
    number.innerText = result;
}

function decrement() {
    result = result - 1;
    number.innerText = result;
}

function reset() {
    result = 0;
    number.innerText = result;
}
