const tab = document.getElementsByClassName("tab");
const content = document.getElementsByClassName("tab__content");

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function(){
        for (let g = 0; g < tab.length; g++) {
            if (tab[g].className == "tab tab_active"){
                tab[g].classList.remove("tab_active");
                content[g].classList.remove("tab__content_active");
            }
        }
    tab[i].classList.add("tab_active");
    content[i].classList.add("tab__content_active");
        
    })
}