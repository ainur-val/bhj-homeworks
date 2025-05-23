const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		pollTitle.textContent = JSON.parse(xhr.responseText).data.title;
		const answers = JSON.parse(xhr.responseText).data.answers;
		answers.forEach(item => {
			pollAnswers.insertAdjacentHTML("afterBegin", ` <button class="poll__answer">
        ${item}
      </button>`)
			document.querySelector(".poll__answer").addEventListener("click", function() {
				alert("Спасибо, ваш голос засчитан!");
			});
		})

	}
};
xhr.send();