export default function ResultadoArea({ resultado }) {
    if (resultado === null) return null;
    return <h3>Área del triangulo: {resultado}</h3>;
  }