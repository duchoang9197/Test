const button = document.getElementById("btn");
const n = document.getElementById("n");
const inputNumber = document.getElementById("input");
button.addEventListener('click', () => {
     if (inputNumber.value < n.value/2) {
        let oppositeNumber = inputNumber.value + n.value/2;
        alert(`Đối số ${inputNumber.value} là ${oppositeNumber}`)
        
    }
    else if (inputNumber.value >= n.value/2){
        let oppositeNumber = inputNumber.value - n.value/2;
        alert(`Đối số ${inputNumber.value} là ${oppositeNumber}`)
    }
});