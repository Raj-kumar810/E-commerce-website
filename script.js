const header = document.quarySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrolly > 0);
})

let menu = Document.querySelector('#menu-icon');
let navmenu = Document.querySelector('navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}