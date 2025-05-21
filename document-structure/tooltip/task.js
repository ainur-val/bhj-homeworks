const hasTooltip = document.querySelectorAll(".has-tooltip");
hasTooltip[0].insertAdjacentHTML("afterEnd", "<div class='tooltip' style='left: 0; top: 0'>Проверка!</div>");
const tooltip = document.querySelector(".tooltip");

for (let i = 0; i < hasTooltip.length; i++) {
	hasTooltip[i].addEventListener("click", (event) => {
		event.preventDefault();
		let text = hasTooltip[i].getAttribute("title");

		if (tooltip.innerText == text) {
			tooltip.classList.toggle("tooltip_active");
		} else {
			tooltip.classList.add("tooltip_active");
			tooltip.innerText = text;
			tooltip.style.top = `${(hasTooltip[i].getBoundingClientRect().top + 20)}px`;
			tooltip.style.left = `${hasTooltip[i].getBoundingClientRect().left}px`;
		}
	});

}