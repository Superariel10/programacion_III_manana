for (let i=1; i <=10;i++){
    console.log("numero", i);
}
console.log("sumatoria indices de nombre");

suma=0
for(let i=1; i <=10;i++){
    suma+=i;
}
console.log("sumatoria indices de nombre", suma);
let nombre="ariel";
for(let i=0; i <=nombre.length;i++){
    console.log(nombre[i]);
}
for(let i=1; i <=5;i++){
    console.log("cuadrado de ", i," es ",i**2);
}
console.log("Bucle While");
let i=1
while(i<=5){
    console.log("indice ", i)
    i++;
}
let miArreglo=[2,0,1,4,3];
let indice=1
while(indice<=miArreglo.length){
    console.log("valor ",indice, "es", miArreglo[indice]);
    indice++;
}
let numero=1
while(numero<=8){
    if(numero%2==0)
    console.log("Numero ",numero, "es par");
    numero++;
}

let x = 4
do {
    console.log("x es: ", x)
    x--;
} while (x!=0)

let mult = 1
while(mult<=10) {
    console.log(mult, "*4=", mult*4);
    mult++; 
} 
let arreglo=[0,1,2,3,4,];
let n = 0
let n2= 0
while(n<=arreglo.lenght) {
    if (arreglo[n]>n2){
        n2=arreglo[n]
    }
    n++;
} 
console.log(mayor);