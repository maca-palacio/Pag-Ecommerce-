class Producto {
    constructor(cod,name,descr,cant,val) {
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
        return "los productos agregado " + '\n' + this.id + '\n' + this.name + '\n' + this.descr + '\n' + this.cant + '\n' + this.val;
    }

}



function add_prod() {
    let codigo= document.getElementById("cod");
    let nombre= document.getElementById("name");
    let descripcion= document.getElementById("descr");
    let cantidad= document.getElementById("cant");
    let valor= document.getElementById("val");

    let new_prod= new Producto(codigo,nombre,descripcion,cantidad,valor);
    localStorage.setItem('item', JSON.stringify(new_prod));
}

let btn = document.getElementById("btn");
btn.addEventListener('click',(event)=>{
  add_prod();
    
})



