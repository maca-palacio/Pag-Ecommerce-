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

let pro1 = new Producto(1, 'Té Dharamsala', '10 cajas x 20 bolsas', 1, 18);
let pro2 = new Producto(2, 'Cerveza tibetana Barley', '24 - bot. 12 l', 1, 19);
let pro3 = new Producto(3, 'Sirope de regaliz', '12 - bot. 550 ml', 1, 10);
let pro4 = new Producto(4, 'Especias Cajun del chef Anton', '48 - frascos 6 l', 1, 22);
let pro5 = new Producto(5, 'Mezcla Gumbo del chef Anton', '36 cajas', 1, 21.35);
let pro6 = new Producto(6, 'Mermelada de grosellas de la abuela', '12 - frascos 8 l', 1, 25);
let pro7 = new Producto(7, 'Peras secas orgánicas del tío Bob', '12 - paq. 1 kg', 1, 30);
let pro8 = new Producto(8, 'Salsa de arándanos Northwoods', '12 - frascos 12 l', 1, 40);
let pro9 = new Producto(9, 'Buey Mishi Kobe', '18 - paq. 500 g', 1, 97);
let pro10 = new Producto(10, 'Pez espada', '12 - frascos 200 ml', 1, 31);
let pro11 = new Producto(11, 'Queso Cabrales', 'paq. 1 kg', 1, 21);
let pro12 = new Producto(12, 'Queso Manchego La Pastora', '10 - paq. 500 g', 1, 38);
let pro13 = new Producto(13, 'Algas Konbu', 'caja 2 kg', 1, 6);
let pro14 = new Producto(14, 'Cuajada de judías', '40 - paq. 100 g', 1, 23.25);
let pro15 = new Producto(15, 'Salsa de soja baja en sodio', '24 - bot. 250 ml', 1, 15.5);
let pro16 = new Producto(16, 'Postre de merengue Pavlova', '32 - cajas 500 g', 1, 17.45);
let pro17 = new Producto(17, 'Cordero Alice Springs', '20 - latas 1 kg', 1, 39);
let pro18 = new Producto(18, 'Langostinos tigre Carnarvon', 'paq. 16 kg', 1, 62.5);
let pro19 = new Producto(19, 'Pastas de té de chocolate', '10 cajas x 12 piezas', 1, 9.2);
let pro24 = new Producto(24, 'Refresco Guaraná Fantástica', '12 - latas 355 ml', 1, 4.5);
let pro25 = new Producto(25, 'Crema de chocolate y nueces NuNuCa', '20 - vasos  450 g', 1, 14);
let pro26 = new Producto(26, 'Ositos de goma Gumbär', '100 - bolsas 250 g', 1, 31.23);
let pro27 = new Producto(27, 'Chocolate Schoggi', '100 - piezas 100 g', 1, 43.9);
let pro28 = new Producto(28, 'Col fermentada Rössle', '25 - latas 825 g', 1, 45.6);
let pro29 = new Producto(29, 'Salchicha Thüringer', '50 bolsas x 30 salch', 1, 123.79);
let pro30 = new Producto(30, 'Arenque blanco del noroeste', '10 - vasos 200 g', 1, 25.89);
let pro31 = new Producto(31, 'Queso gorgonzola Telino', '12 - paq. 100 g', 1, 12.5);
let pro32 = new Producto(32, 'Queso Mascarpone Fabioli', '24 - paq. 200 g', 1, 32);
let pro33 = new Producto(33, 'Queso de cabra', '500 g', 1, 2.5);
let pro34 = new Producto(34, 'Cerveza Sasquatch', '24 - bot. 12 l', 1, 14);
let pro35 = new Producto(35, 'Cerveza negra Steeleye', '24 - bot. 12 l', 1, 18);

let prods = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod20, prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29,prod30, prod31,prod32, prod33,prod34, prod35];





function add_prod(objeto_prods) {
    let codigo = document.getElementById("cod");
    objeto_prods.setid(codigo.value);
    let nombre = document.getElementById("name");
    objeto_prods.setname(nombre.value);
    let descripcion = document.getElementById("descr");
    objeto_prods.setdescr(descripcion.value);
    let cantidad = document.getElementById("cant");
    objeto_prods.setcant(cantidad.value);
    let valor = document.getElementById("val");
    objeto_prods.setval(valor.value);
    localStorage.setItem('item', JSON.stringify(objeto_prods));
}

let btn = document.getElementById("btn");
btn.addEventListener('click', (event) => {
    add_prod();

})



