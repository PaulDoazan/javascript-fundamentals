// const btn = document.querySelector('.btnBackground')
// const container = document.querySelector('.background-container')

// btn.addEventListener("click", () => {
//     changeBackground(container)
// })

// function changeBackground(cont) {
//     cont.textContent = "";
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             let newDiv = document.createElement("div");
//             newDiv.classList.add('colored-rect')
//             newDiv.style.left = `${i * 10}vw`;
//             newDiv.style.top = `${j * 10}vh`;
//             let randomColor = getRandomColor();
//             newDiv.style.backgroundColor = randomColor
//             cont.appendChild(newDiv)
//         }
//     }
// }

// function getRandomColor() {
//     return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
// }

// 1. Implémenter un click sur btn qui change la couleur de fond du container
// Exo annexe : Après recherche de 2 nouveaux types d'event, implémenter le script qui permet de changer la couleur du container en survol du bouton, et sorti du bouton, la couleur du container revient au gris initial

// const container = document.querySelector('.container')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', onBtnClick)

// function onBtnClick() {
//     container.style.backgroundColor = "black"
// }


// 2. Alterner 2 couleurs du container avec un click
// const container = document.querySelector('.container')
// const mainContainer = document.querySelector('.main-container')
// const btn = document.querySelector('.btn')

// const newDiv = document.createElement("div");
// newDiv.classList.add('new-div')
// mainContainer.appendChild(newDiv)

// const newDiv2 = document.createElement("div");
// newDiv2.classList.add('new-div')
// mainContainer.appendChild(newDiv2)
// newDiv2.style.left = "10vw"
// newDiv2.style.backgroundColor = "green"

// btn.addEventListener('click', onBtnClick)

// let changeColorToBlack = true;
// let originColor = container.style.backgroundColor;

// function onBtnClick() {
//     if (changeColorToBlack) {
//         container.style.backgroundColor = 'black'
//     } else {
//         container.style.backgroundColor = originColor
//     }

//     changeColorToBlack = !changeColorToBlack
// }

// Implémenter la fonction pour créer une mosaique de div qui remplit tout le main-container, 10 colomnes et 10 lignes, couleur au choix
const container = document.querySelector('.container')
const mainContainer = document.querySelector('.main-container')
const btn = document.querySelector('.btn')

btn.addEventListener('click', onBtnClick)

const colors = ['yellow', 'red']

function onBtnClick() {
    mainContainer.textContent = ''
    let nbBlock = 0;
    for (let line = 0; line < 10; line++) {
        for (let col = 0; col < 10; col++) {
            (function (c, l) {
                setTimeout(function () {
                    const newDiv = document.createElement("div");
                    mainContainer.appendChild(newDiv)
                    newDiv.classList.add('new-div')
                    newDiv.style.left = `${c}0vw`
                    newDiv.style.top = `${l}0vh`
                    newDiv.style.backgroundColor = colors[(col + line) % 2]
                }, 50 * nbBlock)
            })(col, line)
            nbBlock++
        }
    }
}