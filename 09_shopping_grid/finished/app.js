const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');
const select = document.querySelector('.form-select');

let data;
fetchData()

checks.forEach((check) => {
    check.addEventListener('change', onListChange)
})

select.addEventListener('change', onSelect)

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        console.log(data)
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}

function displayData(data, categories = []) {
    orderList(data);
    containerRow.textContent = ''
    data.forEach((product) => {
        if (categories.length !== 0) {
            if (!categories.includes(product.category)) return;
        }
        const listItem = document.createElement("div");
        let ratingHTML = ''
        for (let i = 0; i < Math.round(product.rating.rate); i++) {
            ratingHTML += '<i class="fa-solid fa-star"></i>'
        }

        for (let i = 0; i < (5 - Math.round(product.rating.rate)); i++) {
            ratingHTML += '<i class="fa-regular fa-star"></i>'
        }

        ratingHTML += ` <span class='rate'>${product.rating.rate}</span>`

        listItem.className = "col-md-4";
        listItem.innerHTML = `
            <div class="card p-3 m-1">
                <div class="d-flex flex-row mb-3"><img class="" src="${product.image}" width="70">
                    <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${product.title}</h5><span class="text-black-50">${product.category}</span><div class="ratings mt-1">${ratingHTML}</div></div></div>
                </div>
                <div>${product.description.slice(0, 120)}...</div>
                <div class="d-flex justify-content-between install mt-3"><h6>${product.price}$</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
    `;
        containerRow.appendChild(listItem);
    })
}

function onListChange(e) {
    let categories = []
    checks.forEach((check) => {
        if (check.checked) {
            categories.push(check.value)
        }
    })

    displayData(data, categories)
}

function orderList(data) {
    if (select.value === 'Trier par') return

    let asc = select.value.includes('asc')
    let criteria = select.value.split(' ')

    let result = 1
    if (!asc) {
        result = -1
    }

    data.sort((a, b) => {
        let propertyA, propertyB

        if (criteria.includes('price')) {
            propertyA = a.price
            propertyB = b.price
        } else {
            propertyA = a.rating.rate
            propertyB = b.rating.rate
        }
        if (propertyA < propertyB) {
            return -result;
        } else if (propertyA > propertyB) {
            return result;
        } else {
            return 0;
        }
    });
}


function onSelect(e) {
    onListChange()
}
