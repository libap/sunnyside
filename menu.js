var burger = document.getElementById('burger');
var menuTel = document.getElementById('listeMenu');
var closeMenu = document.getElementById('closeMenu');


burger.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

function showMenu(){
    console.log('Ca marche');
    menuTel.style.display = "flex";
}

function hideMenu(){
    console.log("yeahh man");
    menuTel.style.display = "none";
}