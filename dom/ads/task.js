const firstCase = document.querySelector(".rotator__case");
setInterval(function() {
	let start = document.querySelector(".rotator__case_active");
	start.classList.remove("rotator__case_active");
	if (start.nextElementSibling !== null) {
		start.nextElementSibling.classList.add("rotator__case_active");
	} else {
		firstCase.classList.add("rotator__case_active");
	}

}, 1000);