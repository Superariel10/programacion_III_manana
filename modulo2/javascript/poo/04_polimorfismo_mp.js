class Empleado{
    constructor(nombre, salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar(){
        console.log("Empleado trabajando . . .")
    }
    calcularVacaciones(){
        return this.salario*0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*4;
    }
}
class Programador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.20
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*1;
    }
}
class Diseñador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.10
    }
}
const procarlos = new Programador('Carlos', 2400); 
const disalberto = new Diseñador('Alberto', 1500);
procarlos.trabajar();
disalberto.trabajar();
console.log(procarlos.calcularVacaciones());
console.log(disalberto.calcularVacaciones());
console.log(procarlos.horasExtra(5));
console.log(disalberto.horasExtra(4));