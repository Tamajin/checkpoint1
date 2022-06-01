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
    const changeColor = document.querySelectorAll(".pink-bg");
    const changeTextColor = document.querySelectorAll(".pink-text");
    changeName.innerHTML = enterName;
    changeName.style.color = "white";

    changeColor.forEach(e => e.style.backgroundColor = enterColor);
    changeTextColor.forEach(e => e.style.color = enterColor);
});

// Change all a color

const links = document.querySelectorAll("a");
links.forEach(e => e.style.color = "#750ff7");

// modify all li elements in front dev tools with click on btn

const btnToolsPosition = document.querySelector("#front-dev-tools");
const frontToolsLi = btnToolsPosition.querySelectorAll("li");
const btnTools = document.createElement("button");
btnTools.className = "btn-tools";
btnTools.innerHTML = "Modify";
btnToolsPosition.appendChild(btnTools);

btnTools.addEventListener("click", function(event){
    event.preventDefault();
    for (let i = 0; i < frontToolsLi.length; i++){
        frontToolsLi[0].innerHTML = "VSCode";
        frontToolsLi[1].innerHTML = "GitHub";
        frontToolsLi[2].innerHTML = "Inspector";
    }
});