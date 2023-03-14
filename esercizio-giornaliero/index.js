const nameSave = document.querySelector("#name");
const buttonSave = document.querySelector("#btn-S");
const buttonClear = document.querySelector("#btn-C");

buttonSave.addEventListener('click', function () {
    const textSave = nameSave.value;
    localStorage.setItem('nome', textSave);
    
    const testo = document.querySelector("#testo");
    testo.innerText = textSave;
})


buttonClear.addEventListener('click', function () {
    localStorage.clear()
})

let counterDiv = document.getElementById("counter");
let count = sessionStorage.getItem("count") || 0;

function startTimer() {
    setInterval(() => {
        counterDiv.innerText = count++;
        sessionStorage.setItem("count", count);
    }, 1000);
}

