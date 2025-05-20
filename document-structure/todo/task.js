const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const btn = document.getElementById("tasks__add");



let func = function(event){
	if ((taskInput.value !== "" && event.key === 'Enter') || (taskInput.value !== "" && event.button == 0)) {
		tasksList.insertAdjacentHTML("afterBegin", '<div class="task"><div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>');
		document.querySelector(".task__title").innerText = taskInput.value;
		event.preventDefault();
		taskInput.value = "";
	}
	const task = document.querySelectorAll(".task");
	const taskRemove = document.querySelectorAll(".task__remove");
	for (let i = 0; i < taskRemove.length; i++) {
		taskRemove[i].addEventListener("click", (e) => {
			e.preventDefault();
			task[i].remove();
		});
	}
};

taskInput.addEventListener("keydown", func);
btn.addEventListener("click", func);