import movies from "./movies.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note, solution alternative avec .sort() / .reduce()
// let bestMovie = movies[0]

// movies.forEach((movie) => {
//     if(movie.rate >= bestMovie.rate){
//         bestMovie = movie
//     }
// })

// // console.log(bestMovie.title)

// // alternative .sort()
// movies.sort((a, b) => {
//     return b.rate - a.rate;
// })

// console.log(movies[0].title)

// e. Logger le titre du film le plus ancien, solution alternative avec .sort()
// let oldestMovie = movies[0]

// movies.forEach((currentElement) => {
//     if(currentElement.year < oldestMovie.year){
//         oldestMovie = currentElement
//     }
// })

// console.log(oldestMovie.title)

// alternative .sort()

// movies.sort((a, b) => {
//     return b.year - a.year
// })

// console.log(movies[0].title)

// e.bis calculer la somme totale des éléments du tableau
// let arr = [1, 12, 8, 2, 5]
// let total = 0;

// // arr.forEach((currentNumber) => {
// //     total += currentNumber
// // })

// // console.log(total)

// const logElementFlechee = (element) => {
//     console.log(`Mon élément à afficher dans une fonction fléchée : ${element}`)
// }

// total = 12

// arr.forEach((curr) => {
//     total += curr
// })

// let arrStr = ['Bye', 'Tchüss', 'Ciao', 'Au revoir']

// let sentence = ''

// arrStr.forEach((word, ind) => {
//     if(ind === arrStr.length - 1){
//         sentence += word
//     } else {
//         sentence += word + ', '
//     }
// })

// console.log(sentence)
// console.log(total)

// f. Logger tous les titres de film qui ont au moins 3 acteurs / .filter() avec un .map() / .reduce()
// let movieTitles = []

// movies.forEach((currentElement) => {
//     if(currentElement.actors.length >= 3){
//         movieTitles.push(currentElement.title)
//     }
// })

// const filteredMovies = movies.filter((el) => {
//     return el.actors.length >= 3
// })

// const filteredMovieTitles = filteredMovies.map((currentElement) => {
//     return currentElement.title
// })

// console.log(filteredMovieTitles)

// const arr = ['hello -- english', 'salut -- français', 'bye -- english', 'au revoir -- français', 'Guten tag -- deutsch']

// const newArr = movies.map((movie) => {
//     return movie.title + ' -- super film'
// })

// function filterByLanguage(lang, array) {
//     const filteredArr = array.filter((el) => {
//         return el.includes(lang)
//     })  

//     return filteredArr
// }

// const result = filterByLanguage('italiano', arr)

// let users = [{name: 'Paul', role: 'user'}, {name: 'Rihab', role: 'admin'}, {name: 'Laurian', role: 'admin'}, {name: 'Céline', role: 'client'}]

// const filteredUsers = users.filter((user) => {
//     return user.role === 'client'
// })
// console.log(filteredUsers)

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films / .map()
// function getAllTitles(arr){
//     const mappedArr = arr.map((element) => {
//         return element.title
//     })

//     return mappedArr;
// }

// const result = getAllTitles(movies)

// console.log(result)
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee / .filter()
// function getMoviesByYear(annee, arr){
//     const filteredArray = arr.filter((element) => {
//         return element.year === annee
//     })

//     const mappedFilteredArray = filteredArray.map((el) => {
//         return el.title
//     })

//     return mappedFilteredArray;
// }

// const res = getMoviesByYear(1994, movies)

// console.log(res)

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur / .map()
function getMoviesByDirector(directorName, arr) {
    let filteredArr = arr.filter((el) => {
        return el.director === directorName
    })

    let mappedArr = filteredArr.map((el) => {
        return el.title
    })
    return mappedArr
}
const result = getMoviesByDirector('Christopher Nolan', movies)

console.log(result)