localStorage.clear();

var objeto_prueba = {cod:"123773",name:"remera",descr:"remera de verano roja",cant:10,val:1200};
console.log(objeto_prueba);

localStorage.setItem("claveprueba",JSON.stringify(objeto_prueba));


//Getear la ul a donde quiero appendear
var prod_div = document.getElementById("contenedor-carrito");

// recorrer todo el localstorage
for (let i=0;i<localStorage.length;i++) {
    let key = localStorage.key(i);
    console.log(key);
    let producto_r = localStorage.getItem(key);
    console.log(producto_r);
    objeto_product = JSON.parse(producto_r);
    // acá habría que appendear ese valor (únicamente las propiedades que necesito) al li que quiero sumar al DOM
    let cod_r = objeto_product.cod;
    let name_r = objeto_product.name;
    let descr_r = objeto_product.descr;
    let cant_r = objeto_product.cant;
    let val_r = objeto_product.val;

    console.log(name_r);

    addNewProd(cod_r,name_r,descr_r,cant_r,val_r);
    
}

// funcion que crea un li y le agrega los valores que quiero rescatar
function addNewProd (cod_r,name_r,descr_r,cant_r,val_r) {
    let new_div = document.createElement("div");
    let titulo = document.createElement("h1");
    titulo.textContent = name_r;
    new_div.appendChild(titulo);

    prod_div.appendChild(new_div);
}