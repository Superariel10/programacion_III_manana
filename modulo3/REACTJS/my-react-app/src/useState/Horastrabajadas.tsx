import { useState } from 'react';

export default function Horastrabajadas() {
  const [horastrabajadas, setHorastrabajadas] = useState(0);
  const [valorhora, setValorhora] = useState(0);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`Resultado, ${(horastrabajadas*valorhora)*5}`);
  };
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="number"
      placeholder="horastrabajadas"
      value={horastrabajadas}
      onChange={(e) => setHorastrabajadas(Number(e.target.value))}
    />
    <input
      type="number"
      placeholder="valorhora"
      value={valorhora}
      onChange={(e) => setValorhora(Number(e.target.value))}
    />
    <button type = "submit">Salario Semanal</button>      
    </form>
  );
}