import { useState } from 'react';
import LabAreaTriangulo_parent from "./LabAreaTriangulo_parent";

export default function LabAreaTriangulo_parent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(`Resultado, ${(num1*num2)/2}`);
  };
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="number"
      placeholder="Base"
      value={num1}
      onChange={(e) => setNum1(Number(e.target.value))}
    />
    <input
      type="number"
      placeholder="Altura"
      value={num2}
      onChange={(e) => setNum2(Number(e.target.value))}
    />
    <button type = "submit">Enviar</button>      
    </form>
  );
}