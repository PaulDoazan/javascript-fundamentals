// Exo 1
const div1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')

for (let i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener('click', onBtn1Click)
}

function onBtn1Click(event) {
    div1.style.backgroundColor = event.target.textContent
}