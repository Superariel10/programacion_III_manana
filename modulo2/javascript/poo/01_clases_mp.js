class Car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
    start(){
        console.log('${this.brand} ${this.model} esta encendido')
    }
    run(){
        console.log('${this.brand} ${this.model} esta corriendo')
    }
    stop(){
        console.log('${this.brand} ${this.model} esta apagado')
    }
}

const ciudad = new Car('Quito', 'Guayaquil');
ciudad .start();
ciudad .run();
ciudad .stop()
console.log(ciudad .brand);
console.log(ciudad .model);