const editor = document.getElementById("editor");

if (localStorage.length !== 0) {
    editor.textContent = `${localStorage.getItem('text')}`
}
editor.addEventListener("input", function(){
    localStorage.setItem('text', `${editor.value}`);
})
