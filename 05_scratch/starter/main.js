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