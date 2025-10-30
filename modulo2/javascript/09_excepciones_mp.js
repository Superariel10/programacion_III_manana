try {
console.log(variableNoDeclarada);
}catch(error){
    console.log("mensaje de error: ",error.message);
}

try {
    console.log("Intentando abrir base de datos . . .");
    throw new Error("Base no encontrada")
}catch(error){
    console.log("mensaje de error: ",error.message);
} finally {
    console.log('Finalizando intento de abrir base de datos');
}