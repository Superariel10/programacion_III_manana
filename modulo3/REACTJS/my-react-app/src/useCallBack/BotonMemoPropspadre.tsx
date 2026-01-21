
import { memo } from 'react';

interface BotonMemoProps {
  onClick: () => void;
}

function Boton({ onClick }: BotonMemoProps) {
  console.log("Render Botón");
  return <button onClick={onClick}>Botón memoizado</button>;
}

const BotonMemoProps = memo(Boton);

export default BotonMemoProps;
