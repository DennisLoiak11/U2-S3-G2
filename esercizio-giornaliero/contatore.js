let counterDiv = document.getElementById("counter");
let count = sessionStorage.getItem("count") || 0;

function startTimer() {
    setInterval(() => {
        counterDiv.innerText = count++;
        sessionStorage.setItem("count", count);
    }, 1000);
}