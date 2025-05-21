const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const btn = document.getElementById("tasks__add");

const removeTask = e => {
	e.target.closest(".task").remove();
}

btn.addEventListener("click", function(event) {
	let text = taskInput.value.trim();
	if (text == "") {
		event.preventDefault();
		taskInput.value = "";
	} else {
		tasksList.insertAdjacentHTML("afterBegin", `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
		event.preventDefault();
		taskInput.value = "";

		[...(tasksList.getElementsByClassName("task__remove"))].forEach(element => {
			element.addEventListener("click", removeTask)
		});
	}
})