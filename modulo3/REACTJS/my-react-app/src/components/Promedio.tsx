import { useState } from 'react';

export default function SimpleForm() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`Resultado, ${(num1+num2+num3)/3}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Primera nota"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Segunda nota"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Tercera nota"
        value={num3}
        onChange={(e) => setNum3(Number(e.target.value))}
      />
      <button type="submit">Enviar</button>
    </form>
    
  );
}