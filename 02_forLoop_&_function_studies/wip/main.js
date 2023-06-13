// let valeurRetournee = sum2args(8, 7);

// let valeurRetournee = "Je m'appelle Paul. "
// valeurRetournee = valeurRetournee + 18
// valeurRetournee = valeurRetournee + " "
// valeurRetournee = valeurRetournee + 36
// valeurRetournee = valeurRetournee + " Hello tout le monde"

// Ecrire 3 fonctions : la première retourne la somme de 2 args
// La deuxième retourne le résultat de la soustraction de 2 args
// La troisième affiche la phrase : "Le résultat des 2 fonctions précédentes est ${} !"

// let role = "user";

// let value1 = sum2args(8, 7);
// let value2 = substract2args(value1, 10);
// logMessage(value2);

function sum2args(arg1, arg2) {
    // écrire une fonction qui affiche "La somme de ... avec ... est égale à ..."
    // if (role !== "admin") return 0;
    let myResult = arg1 + arg2
    return myResult
}

function substract2args(a1, a2) {
    return a1 - a2
}

function logMessage(arg) {
    console.log(`Le résultat des 2 fonctions précédentes est ${arg} !`)
}

const myNumbers = [12, 6, 13, 9, 12, 11];
const myNumbers2 = [40, 61, 13, 19, 12, 11, 212, 23];

// const res = sumEvenNumbers(myNumbers)
// const res2 = sumEvenNumbers(myNumbers2)

// console.log(res);
// console.log(res2);

// for (let i = 0; i < myNumbers.length; i++) {
//     console.log(myNumbers[i])
// }
let strangeResult = strangeSum(myNumbers);
// console.log(strangeResult);

function strangeSum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0) continue;
        result += arr[i]
    }

    return result;
}

function giveMyFullName() {
    let firstname = 'Paul'
    let lastname = ' Doazan'

    let fullname = firstname + lastname;
    return fullname;
}

let words = ["bonjour", "hello", "Guten Tag", "Buongiorno", "halo"]
let sentence = "";
// for (let i = 0; i < words.length; i++) {
//     if (i === words.length - 1) {
//         sentence += words[i]
//     } else if (i === 0) {
//         sentence += '--' + words[i] + ', ';
//     } else if (i === 2) {
//         continue;
//     } else {
//         sentence += words[i] + ', ';
//     }
// }

// phrase inversée
for (let i = words.length - 1; i >= 0; i--) {
    sentence += words[i] + ' ';
}
// console.log(sentence);

// Exos
// 1. Ecrire une fonction qui retourne la valeur minimum d'un tableau
// console.log(getMaximum(myNumbers2))
function getMinimum(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) result = arr[i]
    }

    return result;
}
// 2. Ecrire une fonction qui retourne la valeur max d'un tableau
function getMaximum(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) result = arr[i]
    }

    return result;
}
// 3. Ecrire une fonction qui retourne un tableau de nombres, tous supérieurs à la moyenne des éléments du tableau en argument
// console.log(getNumbersSuperiorToAvg(myNumbers))

function getNumbersSuperiorToAvg(arr) {
    // On calcule la moyenne
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    let avg = total / arr.length

    // Deuxième étape, on tri le tableau en fonction de la moyenne
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

// ajoute d'un dernier élément au tableau
// words.push('Bom dia')

// retire le dernier élément du tableau
const myVar = words.pop()

// retire le premier élément du tableau
words.shift()
// ajoute un premier élément au tableau
words.unshift()


// ---------------------------------------------


const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

const pizzas2 = [
    {
        name: '8 fromages',
        price: 10,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: '12 fromages',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
]

// écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]
// console.log(getAllNames(pizzas2))

function getAllNames(tab) {
    let pizzaNames = [];

    for (let i = 0; i < tab.length; i++) {
        pizzaNames.push(tab[i].name)
    }
    return pizzaNames;
}

// # 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas
// console.log(getAveragePrice(pizzas2));

function getAveragePrice(arr) {
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }
    return (totalPrice / arr.length).toFixed(2)
}

// # 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza

// console.log(getIngredientsByPizzaName('Montagnarde', pizzas));

function getIngredientsByPizzaName(name, arr) {
    let targetPizza

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            targetPizza = arr[i];
            break;
        }
    }

    let result = []
    if (targetPizza) {
        console.log(targetPizza)
        result = targetPizza.ingredients
    }

    return result
}
// # 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques
// const result = getAllIngredients(pizzas)
// // console.log(result);
// function getAllIngredients(tableau) {
//     let allIngredients = [];

//     for (let i = 0; i < tableau.length; i++) {
//         const currentPizza = tableau[i];
//         for (let j = 0; j < currentPizza.ingredients.length; j++) {
//             if (!allIngredients.includes(currentPizza.ingredients[j])) {
//                 allIngredients.push(currentPizza.ingredients[j])
//             }
//         }
//     }

//     return allIngredients;
// }

// # 5. Ecrire une fonction qui prend en parametre un ingredient et un tableau de pizzas, la fonction retourne un tableau des noms des pizzas qui ont cet ingredient

const result = getPizzasByIngredientName(pizzas2, 'tomate');
console.log(result);

function getPizzasByIngredientName(arr, ingredientName) {
    let pizzaNames = []

    for (let i = 0; i < arr.length; i++) {
        const currentPizza = arr[i]
        if (currentPizza.ingredients.includes(ingredientName)) {
            pizzaNames.push(currentPizza.name)
        }
    }

    return pizzaNames
}