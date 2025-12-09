import ButtonOne from "./ButtonOne";

export default function ParentButtonOne() {
  const handleClick = () => alert("¡Hola desde el padre!");
  return <ButtonOne onClick={handleClick} />;
}
