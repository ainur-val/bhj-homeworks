const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function() {
    clickerCounter.textContent++;
    clickerCounter.textContent % 2 == 0 ? cookie.width  = 200 : cookie.width  = 250;
}