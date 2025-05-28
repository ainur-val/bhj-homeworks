const signinForm = document.getElementById("signin__form");

const form = document.forms.signin__form;
const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('id') !== null) {
		document.querySelector('.signin').classList.remove('signin_active');
		document.querySelector('.welcome').classList.add('welcome_active');
				document.getElementById('user_id').textContent = localStorage.getItem('id');
    }
  });

signinForm.addEventListener("submit", (e) => {
	e.preventDefault();

	xhr.addEventListener('load', () => {
		const response = xhr.response;
		if (response['success']) {
				document.querySelector('.signin').classList.remove('signin_active');
				document.querySelector('.welcome').classList.add('welcome_active');

				localStorage.setItem('id', response['user_id']);
				document.getElementById('user_id').textContent = response['user_id'];
		} else {
				alert('Неверный логин/пароль');
		}
		
		signinForm.reset();
	});

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	const formData = new FormData(form);
	xhr.responseType = 'json';
	xhr.send(formData);
})