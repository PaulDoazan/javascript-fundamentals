const mainContainerTag = document.querySelector(".main-container")

const firstPart = `je m'appelle`
const firstname = `Paul`
const age = 29
const brotherAge = 28
let result1 = brotherAge % age
let result = `Bonjour, ${firstPart} ${firstname} et j'ai ${age} ans.`

const myArray = ['Paul', 'Pierre', 'Mathilde', 'Simon']

// if (brotherAge > 30 || age > 32) {
//     result = 'au moins une condition est vraie'
// } else {
//     result = `aucune des conditions n'est vraie`
// }

const identity_1 = {
    firstname: 'Paul',
    lastname: 'Doazan',
    age: 35,
    size: 1.78,
    weight: 75,
    town: { name: 'Bordeaux', population: 350000, superficy: 40 }
}

const identity_2 = {
    firstname: 'Pierre',
    lastname: 'Durand',
    age: 58,
    size: 1.85,
    weight: 80,
    town: { name: 'Paris', population: 2000000, superficy: 50 },
}

// let personBigIMC, personSmallIMC;

let res1 = calculIMC(identity_1);
let res2 = calculIMC(identity_2);

calculDensity(identity_1)
calculDensity(identity_2)

let personBigIMC, personSmallIMC, personInDensedCity, personInSpreadCity

if (res1 > res2) {
    personBigIMC = identity_1
    personSmallIMC = identity_2
} else {
    personBigIMC = identity_2
    personSmallIMC = identity_1
}

calculDensity(identity_1)
calculDensity(identity_2)

if (identity_1.town.density > identity_2.town.density) {
    personInDensedCity = identity_1
    personInSpreadCity = identity_2
} else {
    personInDensedCity = identity_2
    personInSpreadCity = identity_1
}

// formule de l'IMC : weight / size ** 2
mainContainerTag.textContent = `La ville de ${personInDensedCity.town.name} a une densité de ${personInDensedCity.town.density} pers/km2`

function calculIMC(person) {
    return Math.round(person.weight / person.size ** 2)
}

function calculDensity(person) {
    let result = person.town.population / person.town.superficy;
    person.town.density = result;
}