import {Vehiculo, Moto} from "./11_herencia_mp";

const miCarro = new Vehiculo('Chevrolet', 'BeMax');
console.log(miCarro.marca);
console.log(miCarro.tipo);
miCarro.moverse();

const miMotocicleta = new Moto('Susuki', 'Plateado');
console.log(miMotocicleta.marca);
console.log(miMotocicleta.tipo);
miMotocicleta.moverse();