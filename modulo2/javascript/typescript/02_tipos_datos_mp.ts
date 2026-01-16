let edad: number = 19;
let nombre: string = "Ariel";
let activo: boolean = true;
let valor: any = 10;

if (edad>18 && activo){
    console.log('trabajador activo');
} else {
    console.log('No trabaja');
}

let frutas: string[] =['manzana','banana','yellow'];
for (let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}

enum Estado {
    Pendiente,
    Enviado,
    Entregado
}
console.log(Estado);
console.log(Estado.Entregado);