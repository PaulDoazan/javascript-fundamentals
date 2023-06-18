import games from "./games.json" assert { type: 'json' };

init()

function init() {

}

const house = {
    room: 5,
    width: 20,
    depth: 10,
    priceWithoutTaxe: 850000,
    district: 7,
    getFullPrice() {
        console.log(this)
        return this.priceWithoutTaxe * 1.2
    },
    getArea: () => {
        console.log(this)
        // return this.width * this.depth
    }
}

const fullPrice = house.getFullPrice()
house.getArea()
console.log(fullPrice)

// a. Logger le premier element du tableau games
// b. Logger l'annee du 3eme element du tableau games
// c. Logger le titre du dernier element du tableau

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console


