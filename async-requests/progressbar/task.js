const load = document.getElementById('form');
const progress = document.getElementById("progress");
load.addEventListener('submit', (e) => {
	e.preventDefault();
	const request = new XMLHttpRequest();
	request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	request.upload.addEventListener('progress', (i) => {
		progress.value = i.loaded / i.total;
	});
	const formData = new FormData(load);
	request.send(formData);
});