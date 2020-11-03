const numberFillOut = document.getElementById("number");
const button = document.getElementById("btn")
let arrNumber = Math.floor(Math.random() * 10) + 1;
button.addEventListener('click', () => {
    if (numberFillOut.value !== arrNumber) {
        alert("Wrong number. Try agin");
    }
    else if (numberFillOut.value === arrNumber) {
        alert("Congratulations");
    }
});


