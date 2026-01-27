console.log("OBJETOS");
let persona = {
    nombre: "Ariel",
    edad: 19,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion de objeto");
persona.nombre="Alexa"
console.log(persona);
console.log("Incluir clave al objeto");
persona.direccion="Av. Cotocollao";
console.log(persona);
console.log("Eliminar clave al objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));
console.log("Objetos Animados");
let estudiante = {
    nombre: "Pepe",
    apellido: "Rodriguez",
    contacto: {
        correo: "pepe@gmail.com",
        telefono: "010232145",
        celular: "0123257845"
    },
    Urbanizacion: [
    {
        nombre: "Cotocollao",
        Ventas: 2
    },
    {
        nombre: "Los Cerezos",
        Ventas: 4
    },
  ],
}
console.log("Urbanizador:  ", urbanizador);