import { memo } from 'react';

interface BotonMemoProps {
  onClick: () => void;
}

const BotonMemoProps = memo(({ onClick }: BotonMemoProps) => {
  console.log("Render Botón");
  return <button onClick={onClick}>Botón memorizado</button>;
});

export default BotonMemoProps;
