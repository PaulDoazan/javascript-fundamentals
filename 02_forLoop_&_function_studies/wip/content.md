# notions abordées :

1. Approfondissements des fonctions, création de fonctions simples qui retournent un résultat
2. boucle for classique; traitement de tableaux simples
3. traitement de tableaux d'objets

## Exercices :

const cities = [
    {
        name: 'Paris',
        superficy: 104.5,
        population: 10858874
    },
    {
        name: 'Londres',
        superficy: 1572,
        population: 8908081
    },
    {
        name: 'Madrid',
        superficy: 608,
        population: 3280782
    },
    {
        name: 'Lisbonne',
        superficy: 100.05,
        population: 509515
    },
    {
        name: 'Rome',
        superficy: 2213,
        population: 2844395
    },
    {
        name: 'Berlin',
        superficy: 891.7,
        population: 3748148
    },
    {
        name: 'Moscou',
        superficy: 2542,
        population: 12655050
    },
    {
        name: 'Varsovie',
        superficy: 546,
        population: 1793579
    },
    {
        name: 'Copenhague',
        superficy: 292,
        population: 1345562
    },
    {
        name: 'Dublin',
        superficy: 318,
        population: 1173179
    }
]

# Afficher la moyenne de population de toutes les villes
# Afficher tous les noms de ville dont la population est au-dessus de la moyenne
# Récupérer un tableau des villes dont la superficie est inférieure à la moyenne

2ème échantillon de données :

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

# 1. écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]

# 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas

# 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza

# 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques

# 5. Ecrire une fonction qui prend en parametre un ingredient et qui retourne un tableau des noms des pizzas qui ont cet ingredient
