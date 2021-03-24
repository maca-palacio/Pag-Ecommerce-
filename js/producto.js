class Producto {
    constructor(cod, name, descr, cant, val) {
        this.cod = cod;
        this.name = name;
        this.descr = descr;
        this.cant = cant;
        this.val = val;

    }
    getcod() { return this.cod; }
    setcod(value) { this.cod = value; }
    getname() { return this.name; }
    setname(value) { this.name = value; }
    getdescr() { return this.descr; }
    setdescr(value) { this.descr = value; }
    getcant() { return this.cant; }
    setcant(value) { this.cant = value; }
    getval() { return this.val; }
    setval(value) { this.val = value; }
    toString() {
        return "los productos agregado " + '\n' + this.cod + '\n' + this.name + '\n' + this.descr + '\n' + this.cant + '\n' + this.val;
    }

}

let prod1 = new Producto(1, 'Té Dharamsala', '10 cajas x 20 bolsas', 1, 18);
let prod2 = new Producto(2, 'Cerveza tibetana Barley', '24 - bot. 12 l', 1, 19);
let prod3 = new Producto(3, 'Sirope de regaliz', '12 - bot. 550 ml', 1, 10);
let prod4 = new Producto(4, 'Especias Cajun del chef Anton', '48 - frascos 6 l', 1, 22);
let prod5 = new Producto(5, 'Mezcla Gumbo del chef Anton', '36 cajas', 1, 21.35);
let prod6 = new Producto(6, 'Mermelada de grosellas de la abuela', '12 - frascos 8 l', 1, 25);
let prod7 = new Producto(7, 'Peras secas orgánicas del tío Bob', '12 - paq. 1 kg', 1, 30);
let prod8 = new Producto(8, 'Salsa de arándanos Northwoods', '12 - frascos 12 l', 1, 40);
let prod9 = new Producto(9, 'Buey Mishi Kobe', '18 - paq. 500 g', 1, 97);
let prod10 = new Producto(10, 'Pez espada', '12 - frascos 200 ml', 1, 31);
let prod11 = new Producto(11, 'Queso Cabrales', 'paq. 1 kg', 1, 21);
let prod12 = new Producto(12, 'Queso Manchego La Pastora', '10 - paq. 500 g', 1, 38);
let prod13 = new Producto(13, 'Algas Konbu', 'caja 2 kg', 1, 6);
let prod14 = new Producto(14, 'Cuajada de judías', '40 - paq. 100 g', 1, 23.25);
let prod15 = new Producto(15, 'Salsa de soja baja en sodio', '24 - bot. 250 ml', 1, 15.5);
let prod16 = new Producto(16, 'Postre de merengue Pavlova', '32 - cajas 500 g', 1, 17.45);
let prod17 = new Producto(17, 'Cordero Alice Springs', '20 - latas 1 kg', 1, 39);
let prod18 = new Producto(18, 'Langostinos tigre Carnarvon', 'paq. 16 kg', 1, 62.5);
let prod19 = new Producto(19, 'Pastas de té de chocolate', '10 cajas x 12 piezas', 1, 9.2);
let prod20 = new Producto(24, 'Refresco Guaraná Fantástica', '12 - latas 355 ml', 1, 4.5);
let prod21 = new Producto(25, 'Crema de chocolate y nueces NuNuCa', '20 - vasos  450 g', 1, 14);
let prod22 = new Producto(26, 'Ositos de goma Gumbär', '100 - bolsas 250 g', 1, 31.23);
let prod23 = new Producto(27, 'Chocolate Schoggi', '100 - piezas 100 g', 1, 43.9);
let prod24 = new Producto(28, 'Col fermentada Rössle', '25 - latas 825 g', 1, 45.6);
let prod25 = new Producto(29, 'Salchicha Thüringer', '50 bolsas x 30 salch', 1, 123.79);
let prod26 = new Producto(30, 'Arenque blanco del noroeste', '10 - vasos 200 g', 1, 25.89);
let prod27 = new Producto(31, 'Queso gorgonzola Telino', '12 - paq. 100 g', 1, 12.5);
let prod28 = new Producto(32, 'Queso Mascarpone Fabioli', '24 - paq. 200 g', 1, 32);
let prod29 = new Producto(33, 'Queso de cabra', '500 g', 1, 2.5);
let prod30 = new Producto(34, 'Cerveza Sasquatch', '24 - bot. 12 l', 1, 14);
let prod31 = new Producto(35, 'Cerveza negra Steeleye', '24 - bot. 12 l', 1, 18);


let prods = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod20, prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29, prod30, prod31];


//Listar los productos en el HTML 
const $items = document.querySelector('#items');
function List_prod() {
    for (let info of prods) {
        //Contenedor de los productos  
        let miNodo = document.createElement('div');
        miNodo.classList.add('contenedor');
        //Card body 
        let miNodoCard = document.createElement('div');
        //name 
        let miNodoName = document.createElement('h2');
        miNodoName.textContent = info['name'];
        //Descripción del producto
        let miNodoDescr = document.createElement('h4');
        miNodoDescr.textContent = info['descr'];
        //Valor
        let miNodoVal = document.createElement('h4');
        miNodoVal.textContent = info['val'] + 'USD';
        //Creo el boton de agregar 
        let miNodoBoton = document.createElement('button');
        miNodoBoton.textContent = '+ agregar';
        miNodoBoton.setAttribute('id', info['cod']);
        miNodoBoton.addEventListener('click', add_prod);

        miNodoCard.appendChild(miNodoName);
        miNodoCard.appendChild(miNodoDescr);
        miNodoCard.appendChild(miNodoVal);
        miNodoCard.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCard);
        $items.appendChild(miNodo);
    }
}

let list_carrito=[];
if (localStorage.getItem('producto')) {
    list_carrito = JSON.parse(localStorage.getItem('producto'));
}

//Agregar productos al carrito 
function add_prod() {
    for (let i=0;i<prods.length;i++){
        let id_prod=prods[i].getcod();
        if(id_prod==this.getAttribute('id')){
            let new_cod=prods[i].getcod();
            let new_name=prods[i].getname();
            let new_descr=prods[i].getdescr();
            let new_cant=prods[i].getcant();
            let new_val=prods[i].getval();
            let add_newprod=new Producto(new_cod,new_name,new_descr,new_cant,new_val);
            list_carrito.push(add_newprod);
        }
    }
    
    localStorage.setItem('producto', JSON.stringify(list_carrito));
}


//carga los productos 
addEventListener('loadstart', List_prod());
