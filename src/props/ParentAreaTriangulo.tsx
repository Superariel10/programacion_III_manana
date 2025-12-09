import AreaTriangulo from "./AreaTriangulo";

export default function ParentAreaTriangulo() {
  const [numero, setNumero] = AreaTriangulo(0);
  const [numero2, setNumero2] = AreaTriangulo(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`La suma es: ${numero*numero2}`);
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
      <button type="submit">Enviar</button>
    </form>
  );
}