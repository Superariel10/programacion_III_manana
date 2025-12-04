function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar('Ariel'));
//funcion flecha
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(4, 6));
function saludarDeNuevo() {
    console.log('Hola');
    console.log('Bienvenido al control de acceso con Typescript');
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(2));
calcularAreaCirculoVoid(4);
