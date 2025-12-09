import { useState } from 'react';

export default function PromedioForm() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`La suma es: ${(numero+numero2+numero3)/3}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Numero"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
       <input
        type="number"
        placeholder="Numero 2"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        />
        <input
        type="number"
        placeholder="Numero 3"
        value={numero3}
        onChange={(e) => setNumero3(Number(e.target.value))}
        />
      <button type="submit">Enviar</button>
    </form>
  );
}