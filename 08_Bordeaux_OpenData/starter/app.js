const btn = document.querySelector('button')
const errorMsg = document.querySelector('.errorMsg')
const dataset = 'bor_frequentation_piscine_tr'

btn.addEventListener('click', fetchData)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?datset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        // btnChange()
        // displayData(data);
    }
    catch (error) {
        // btnChange()
        errorMsg.textContent = `Coucou`
    }
}