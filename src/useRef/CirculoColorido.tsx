import { useRef } from 'react';

export default function CirculoColorido() {
  const circuloRef = useRef(null);
  const cuadradoRef = useRef(null)
  const cambiarColor = () => {
    const colores = ['crimson', 'royalblue', 'mediumseagreen', 'orange', 'violet'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    circuloRef.current.style.backgroundColor = color;
  };
  const cambiarColorCuadrado = () => {
    const colores = ['yellow', 'royalblue', 'green', 'pink', 'black'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    cuadradoRef.current.style.backgroundColor = color;
  };
  return (
    <>
      <div
        ref={circuloRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'gray',
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={cambiarColor}>Cambiar color del círculo</button>

      <div
        ref={cuadradoRef}
        style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'red',
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={cambiarColorCuadrado}>Cambiar color del cuadrado</button>
    </>
  );
}
