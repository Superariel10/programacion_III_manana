let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

let passaword = "admin123";
if (passaword === "admin123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

let nota =7;
if (nota >= 9) {
    console.log("Aprobado");
} else if (nota >= 6) {
    console.log("Bien");
} else {
    console.log("Insuficiente");
}

let edad=7;
let tiene_licencia = true;
if(edad>=18 && tiene_licencia) {
    if(tiene_licencia){
        console.log("Puede conducir");
    } else if (edad>=18) {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("No puede conducir, es menor de edad");
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