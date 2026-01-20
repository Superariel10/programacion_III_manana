let numeros = [10,5,26,9];
let arrayVicio = new Array();
let arrayVicio2 = [];

console.log("Arreglo de numeros original", numeros)
console.log(arrayVicio);
console.log(arrayVicio2);
console.log("Acceso a los elementos del array");
console.log(numeros[0]);
console.log(numeros[3]);
console.log("Modificar elemento del array");
numeros[0]=100;
console.log(numeros);
console.log("Agregar elemento al array");
numeros.push(500);
console.log(numeros);
console.log("Agregar elemento al inicio de array");
numeros.unshift(888);
console.log(numeros);
console.log("Eliminar el  ultimo elemento del array");
numeros.pop();
console.log(numeros);
console.log("Eliminar el primer elemento del array");
numeros.shift();
console.log(numeros);
console.log("Iteracion de array del array");
let indice=0
while(indice<numeros.length){
    console.log("valor ", indice, "es", numeros[indice]);
    indice++;
}
console.log("Iteracion con For");
for (let i=0; i <numeros.length;i++){
    console.log(numeros[i]);
}
console.log("Iteracion con For .. of");
for(let valor of numeros){
    console.log(valor);
}
console.log("Iteracion con For Each");
numeros.forEach(function(valor, indice){
    console.log(indice, valor);
});