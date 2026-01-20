let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

let passaword = "urbanizacion123";
if (passaword === "urbanizacion123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

let nota =7;
if (nota >= 9) {
    console.log("Aprobado");
} else if (nota >= 6) {
    console.log("En revision");
} else {
    console.log("Denegado");
}

let edad=7;
let tiene_licencia = true;
if(edad>=18 && tiene_licencia) {
    if(tiene_licencia){
        console.log("Puede acceder");
    } else if (edad>=18) {
        console.log("Necesita un codigo de acceso");
    }
} else {
    console.log("No puede acceder");
}

//Estructura switch
let dia ="lunes";

switch(dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case  "vienres":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día Nomal");
}

let a = 80;
let b = 70;
let c = 90;
mayor = 0;
if (a>b) {
    mayor = a;
} if (c>mayor) {
    mayor = c;
} 
console.log("El mayor es:", mayor);