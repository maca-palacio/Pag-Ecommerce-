localStorage.removeItem('claveprueba');
//Get a la ul a donde quiero appendear
var prod_div = document.getElementById("contenedor-carrito");

// recorrer todo el localstorage
let cart_prods = searchLocalStorage();

// Listar los productos en el HTML
const $items2 = document.querySelector('#contenedor-carrito');
function List_cart() {
    for (let info of cart_prods) {
        //Contenedor de los productos
        let miNodo = document.createElement('div');
        //Card body
        let miNodoCard = document.createElement('div');
        //name
        let miNodoName = document.createElement('h2');
        miNodoName.textContent = info['name'];
        //descr
        let miNodoDescr = document.createElement('h4');
        miNodoDescr.textContent = info['descr'];
        //valor
        let miNodoVal = document.createElement('h4');
        miNodoVal.textContent = info['val'] + 'USD';

        miNodoCard.appendChild(miNodoName);
        miNodoCard.appendChild(miNodoDescr);
        miNodoCard.appendChild(miNodoVal);
        miNodo.appendChild(miNodoCard);
        $items2.appendChild(miNodo);
    }
}
    
// función que recorre el local storage y trae los productos del carrito
function searchLocalStorage() {
    for (let i=0;i<localStorage.length;i++) {
        let key = localStorage.key(i);
        let cart_prods = JSON.parse(localStorage.getItem(key));
        //devuelve array de objetos cart_prods
        console.log(cart_prods);
        // Está bien acá el return o va fuera del for loop?
        return cart_prods;
    } 
}

//carga el carrito
addEventListener('loadstart', List_cart());