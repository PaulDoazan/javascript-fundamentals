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
// 2. Après recherche de 2 nouveaux types d'event, implémenter le script qui permet de changer la couleur du container en survol du bouton, et sorti du bouton, la couleur du container revient au gris initial

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener('mouseenter', onEnter)
btn.addEventListener('mouseleave', onLeave)

function onEnter() {
    container.style.backgroundColor = "black"
}

function onLeave() {
    container.style.backgroundColor = "#eeeeee"
}