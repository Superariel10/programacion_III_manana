import { IsNumber } from 'class-validator';
import { useState } from 'react';

export default function Suma() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Resultado, ${num1+num2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Primer numero"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Segundo numero"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button type="submit">Enviar</button>
    </form>
    
  );
}