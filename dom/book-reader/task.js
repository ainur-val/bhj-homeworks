const buttons = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener ("click", function(event) {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        buttons[i].classList.add("font-size_active");
        if (buttons[i].classList.contains("font-size_small")) {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big");
        } else if (buttons[i].classList.contains("font-size_big")) {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-big");
            book.classList.remove("book_fs-small");
        }
    });
}