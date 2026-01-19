interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 10,
    nombre: 'Ariel Orozco'
}
const usuario2: Usuario = {
    id: 11,
    nombre: 'Pablo Suarez',
    correo: 'pablo@suarez.com'
}
console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);
console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);