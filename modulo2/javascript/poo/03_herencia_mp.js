class ciudad{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("Quito")
    }
}
class persona extends ciudad{}
const mipersona = new persona('Guayaquil');
const miciudad = new ciudad ('Cuenca');
mipersona.hacerSonido();
miciudad.hacerSonido();
