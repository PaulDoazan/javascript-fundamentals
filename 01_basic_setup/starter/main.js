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

const price1 = 149
const price2 = 199
const coefTax = 1.2

const firstname = "Paul"
const lastname = "DOAZAN"

let nbTotal = 0

const myArray = [190, 23, 42, 50]
const myArray2 = [190, 23, 42, 50, 90, 87]

let allowed = true

// if (allowed) {
//     nbTotal += nb1
// } else {
//     nbTotal += nb1 + nb2
// }

const myObj = {
    firstname: 'Paul',
    lastname: 'DOAZAN',
    age: 35,
    town: 'Talence',
    hobbies: ['climbing', 'Pelote Basque']
}


myContainer.style.backgroundColor = 'green'
myContainer.style.color = 'white'

let nb10 = 10;

if (allowed) {
    nb10 += 2
}

myContainer.textContent = nb10


function addParameters(param1 = 0, param2 = 0, param3 = 0, param4 = 0) {
    const result = param1 + param2 + param3 + param4;
    return result;
}

function getLastPriceWithTax(pricesArr) {
    return pricesArr[pricesArr.length - 1] * coefTax;
}