import { useId, useState } from 'react';

export default function Mayor3numeros() {
  const num1 = useId();
  const num2 = useId();
  const num3 = useId();

  const [valorNum1, setValorNum1] = useState('');
  const [valorNum2, setValorNum2] = useState('');
  const [valorNum3, setValorNum3] = useState('');

  const n1 = parseFloat(valorNum1);
  const n2 = parseFloat(valorNum2);
  const n3 = parseFloat(valorNum3);

  const mayor = (e) => {
    e.preventDefault();

    let mayorNumero;
    if (n1 > n2 && n1 > n3) {
      mayorNumero = n1;
    } else if (n2 > n1 && n2 > n3) {
      mayorNumero = n2;
    } else {
      mayorNumero = n3;
    }

    alert(`El número mayor es: ${mayorNumero}`);
  };

  return (
    <form onSubmit={mayor}>
      <label htmlFor={num1}>Número 1:</label>
      <input
        id={num1}
        type="number"
        value={valorNum1}
        onChange={(e) => setValorNum1(e.target.value)}
      />
      <label htmlFor={num2}>Número 2:</label>
      <input
        id={num2}
        type="number"
        value={valorNum2}
        onChange={(e) => setValorNum2(e.target.value)}
      />
      <label htmlFor={num3}>Número 3:</label>
      <input
        id={num3}
        type="number"
        value={valorNum3}
        onChange={(e) => setValorNum3(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}