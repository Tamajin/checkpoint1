// changement d'avatar au click 
// je stocke l'avatar actuel
// je crée un addEventListener au click dans lequel je donne comme instruction de changer la source de l'image

const myAvatar = document.querySelector(".avatar");
myAvatar.addEventListener("click",function(){
    myAvatar.src = "image/avatar-bis.png";
});