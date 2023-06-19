const myContainer = document.querySelector('.container')
let maVariable = "Paul Doazan"
let maVariable2 = 'Je suis formateur à la Piscine.'
let maVariable3 = 'Je suis Français.'
let maVariable4 = 'Je suis bordelais.'
let maVariable5 = 'J\'ai 35 ans.'
let str = `Je m'appelle Paul Doazan`

let strTotal = maVariable + '. '
strTotal += maVariable2 + '. '
strTotal += maVariable3

const nb1 = 12
const nb2 = 2

let nbTotal = 0

let allowed = true

if (allowed) {
    nbTotal += nb1
} else {
    nbTotal += nb1 + nb2
}

myContainer.textContent = nbTotal