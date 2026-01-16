import { useEffect, useRef } from 'react';

export default function FocoAutomatico() {
  const inputRef = useRef(null); // Creamos una referencia vacía

  useEffect(() => {
    // Al montar el componente, enfocamos el input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input placeholder="Escribe tu nombre aquí..." />
      <label>Apellido: </label>
      <input ref={inputRef} placeholder="Escribe su apellido aquí..." />
    </div>
  );
}
