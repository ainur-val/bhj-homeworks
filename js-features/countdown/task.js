const timer = document.getElementById("timer");


const intervalId = setInterval(function() {
        timer.textContent -= 1;
        if(timer.textContent == 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(intervalId);
        }
  }, 1000)

