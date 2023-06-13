// implémenter la fonction onCLick pour changer la couleur de mainContainer en parcourant le tableau colors, donc une nouvelle couleur à chaque click

// const mainBtns = document.querySelectorAll(".main-btn")
// const mainContainer = document.querySelector('.main-container')

// const colors = ['red', "green", "yellow", "blue"]

// mainBtns[0].addEventListener("click", onClick)

// let nbClick = 0

// function onClick(event) {
//     if (nbClick >= colors.length) nbClick = 0
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++
// }

// Intégrer 3 boutons : red green blue, et ajouter les EventListener nécessaire pour changer la couleur du background en fonction du textContent de chaque bouton

// const mainBtns = document.querySelectorAll(".main-btn")
// const mainContainer = document.querySelector('.main-container')

// for (let i = 0; i < mainBtns.length; i++) {
//     mainBtns[i].addEventListener("click", onClick)
// }

// function onClick(event) {
//     mainContainer.style.backgroundColor = event.target.getAttribute("data-color")
// }


// Implémenter la fonction pour changer la couleur du main-container en fonction de la valeur du champs texte 

const mainBtn = document.querySelector(".main-btn")
const input = document.querySelector("input")
const mainContainer = document.querySelector('.main-container')

mainBtn.addEventListener("click", onClick)

function onClick() {
    mainContainer.style.backgroundColor = input.value
}