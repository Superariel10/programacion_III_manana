function saludar(nombre?:  string){
    return `Hola ${nombre}`;
}

console.log(saludar('Ariel'));
//funcion flecha
const sumar = (a: number, b: number): number => {
    return a + b
}
console.log(sumar(4,6));

function saludarDeNuevo(): void {
    console.log('Hola');
    console.log('Bienvenido al control de acceso con Typescript');
}

saludarDeNuevo();

function calcularAreaCirculo(radio: number): number{
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio: number): void{
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(2));
calcularAreaCirculoVoid(4);