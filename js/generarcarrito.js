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
        //img
        let miNodoImg = document.createElement('img');
        miNodoImg.src = info['img'];
        //valor
        let miNodoVal = document.createElement('h4');
        miNodoVal.textContent = info['val'] + 'USD';

        //Creo el boton de agregar 
        let miNodoBoton = document.createElement('button');
        miNodoBoton.textContent = '- Eliminar';
        miNodoBoton.setAttribute('id', info['cod']);
        miNodoBoton.addEventListener('click', eliminar_producto);
        
        miNodoCard.appendChild(miNodoName);
        miNodoCard.appendChild(miNodoDescr);
        miNodoCard.appendChild(miNodoImg);
        miNodoCard.appendChild(miNodoVal);
        miNodo.appendChild(miNodoCard);
        $items2.appendChild(miNodo);
    }
}


    

function searchLocalStorage() {
    // validar que haya productos POR HACER
    let cart_prods = JSON.parse(localStorage.getItem('producto'));
    //devuelve array de objetos cart_prods
    console.log(cart_prods);
    return cart_prods;
}

function eliminar_producto(){
    

}




//carga el carrito
addEventListener('loadstart', List_cart());