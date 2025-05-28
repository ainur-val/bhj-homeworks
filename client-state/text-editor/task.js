const editor = document.getElementById("editor");

editor.textContent = localStorage.getItem('text');

editor.addEventListener("input", function(){
    localStorage.setItem('text', editor.value);
})
