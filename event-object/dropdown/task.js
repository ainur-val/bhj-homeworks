let button = document.querySelector("div.dropdown__value");
const list = document.querySelector("ul.dropdown__list");
const item = document.querySelectorAll('a.dropdown__link');

button.addEventListener('click', function() {
        list.classList.add("dropdown__list_active");
});


Array.from(item).forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        button.textContent = element.textContent;
        list.classList.remove("dropdown__list_active");
}); 
});

