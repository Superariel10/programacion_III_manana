console.log("FUNCIONES");
console.log("FORMA CLASICA");
function saludar(){
    console.log("Funcion clasica");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a,b){
    return a+b;
}
let resultado =sumar(5,5);
console.log("La suma es ", resultado);

console.log("FUNCIONES FLECHA");
const resta = (a,b)=>{
    return a-b;
}
let resultadoresta = resta(7,2);
console.log("La resta es ", resultadoresta)

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("Cuadrado de 2: ", cuadrado(2));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo = saludar("Ariel");
let saludo2 = saludar("Ariel", "Buenos dias");
console.log(saludo);
console.log(saludo2);

const triangulo = y => y*y;
console.log("Area del Triagulo: ",triangulo(4));