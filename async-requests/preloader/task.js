const loader = document.getElementById("loader");
const item = document.querySelector(".item");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		let valute = JSON.parse(xhr.responseText).response.Valute;
		loader.classList.remove("loader_active");
		for (el in valute) {
			item.insertAdjacentHTML("afterEnd",
				`<div class="item">
            <div class="item__code">
            ${valute[el].CharCode}
            </div>
            <div class="item__value">
            ${valute[el].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`);
		}
	}
};
xhr.send();