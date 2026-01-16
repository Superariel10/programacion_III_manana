console.log("FUNCIONES");
console.log("FORMA CLASICA");
function saludar(){
    console.log("Hola desde una funcion clasica");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a,b){
    return a+b;
}
let resultado =sumar(4,9);
console.log("La suma es ", resultado);

console.log("FUNCIONES FLECHA");
const resta = (a,b)=>{
    return a-b;
}
let resultadoresta = resta(9,5);
console.log("La resta es ", resultadoresta)

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("Cuadrado de 5: ", cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo = saludar("Francisco");
let saludo2 = saludar("Francisco", "Buenos dias");
console.log(saludo);
console.log(saludo2);

const triangulo = y => y*y;
console.log("Area del Triagulo: ",triangulo(2));