const container = document.querySelector('.row')

fetchData();

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        displayData(data);
    }
    catch (error) {
        console.log(error)
    }
}

function displayData(arr) {
    console.log(arr)
    arr.forEach((el) => {
        const item = document.createElement('div')
        item.className = "col-md-4";
        let rateStars = buildStars(el.rating.rate)
        item.innerHTML = `
        <div class="card p-3 m-1">
        <div class="d-flex flex-row mb-3"><img class="" src="${el.image}" width="70">
            <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${el.title}</h5><span class="text-black-50">${el.category}</span><div class="ratings mt-1">${rateStars}</div></div></div>
        </div>
        <div>${el.description.slice(0, 120)}...</div>
        <div class="d-flex justify-content-between install mt-3"><h6>${el.price}€</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
    </div>
  </div>
        `
        container.appendChild(item)
    })
}

function buildStars(rate) {
    let result = ''
    for (let i = 0; i < Math.round(rate); i++) {
        result += `<i class="fa-solid fa-star"></i>`
    }

    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += `<i class="fa-regular fa-star"></i>`
    }

    return result
}