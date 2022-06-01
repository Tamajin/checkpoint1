// changement d'avatar au click 
// je stocke l'avatar actuel
// je crée un addEventListener au click dans lequel je donne comme instruction de changer la source de l'image

const myAvatar = document.querySelector(".avatar");
myAvatar.addEventListener("click",function(){
    myAvatar.src = "image/avatar-bis.png";
});

// instruction 2 : créer un bouton pour inviter l'utilisateur à renseigner son nom, puis insérer ce nom à la place de pseudo générique
// je crée un bouton
// je récupère et stocke la div dans la laquelle il va se situer
// je crée un prompt au click sur le bouton puis un changement de texte et de couleur, le tout dans la même fonction addEventListener

const btnName = document.createElement("button");
const btnPosition = document.querySelector(".pink-bg");
btnName.className = "btn-name";
btnName.innerText = "Modify text and color"
btnPosition.appendChild(btnName);
btnName.addEventListener("click", function(event){
    event.preventDefault();
    const enterName = prompt("Enter your Name");
    const enterColor = prompt("Choose a color");
    const changeName = document.querySelector("#name");
    const changeColor = document.querySelector(".pink-bg");
    changeName.innerHTML = enterName;
    changeName.style.color = "white";
    changeColor.style.backgroundColor = enterColor;
});
