const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const btn = document.getElementById("tasks__add");

const removeTask = e => {
	e.target.closest(".task").remove();
}

btn.addEventListener("click", function(event) {
	event.preventDefault();
	let text = taskInput.value.trim();
	if (text !== "") {
		tasksList.insertAdjacentHTML("afterBegin", `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
		tasksList.querySelector(".task__remove").addEventListener("click", removeTask)
	};
	taskInput.value = "";
})