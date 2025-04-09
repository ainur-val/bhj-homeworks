const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let counterWin = dead.textContent;
let counterLost = lost.textContent;

getHole = index => document.getElementById(`hole${index}`);
	for (let i = 1; i <= 9; i++) {
		let hole = getHole(i);
		hole.onclick = function() {
			if (hole.className.includes('hole_has-mole')) {
				counterWin++;
				dead.textContent = counterWin;
				if (dead.textContent == 10) {
					alert("Вы выиграли!");
					counterWin = 0;
					dead.textContent = counterWin;
					counterLost = 0;
					lost.textContent = counterLost;
				}
			} else {
			counterLost++;
			lost.textContent = counterLost;
			if (lost.textContent == 5) {
				alert("Вы проиграли!");
				counterWin = 0;
				dead.textContent = counterWin;
				counterLost = 0;
				lost.textContent = counterLost;
			}
		}
	}
}