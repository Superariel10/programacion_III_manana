class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    mayor(){
        if (this.edad>=18){
            console.log("Es mayor de edad")
        } else {
            console.log("Es menor de edad")
        }
    }
    mostrar(){
        console.log(this.nombre, this.edad);
    }
}

const pedro = new Persona('Pedro', 17);
pedro.mayor();
pedro.mostrar();