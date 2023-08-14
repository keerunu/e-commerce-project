let DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/";
DATA_URL += localStorage.catID + '.json';

const containerProductos = document.getElementById("containerProductos");
const tituloProductos = document.getElementById("tituloProductos");

function showProducts(productsArray) {
    tituloProductos.innerHTML += productsArray.catName;

    for (let i = 0; i < productsArray.products.length; i++) {
        containerProductos.innerHTML +=
        `<div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${productsArray.products[i].image}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${productsArray.products[i].name} - ${productsArray.products[i].cost} ${productsArray.products[i].currency}</h4>
                        <small class="text-muted">${productsArray.products[i].soldCount} vendidos</small>
                    </div>
                <p class="mb-1">${productsArray.products[i].description}</p>
                </div>
            </div>
        </div>`
    }
}

async function getProducts() {
    const response = await fetch(DATA_URL);
    const json = await response.json();
    showProducts(json);
}

getProducts();