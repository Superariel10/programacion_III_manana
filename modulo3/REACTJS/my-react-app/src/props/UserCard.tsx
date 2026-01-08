export default function UserCard({ user }) {
  return <div>{user.name}- {user.apellido} - {user.age} años - direccion {user.direccion}  - telefono: {user.telefono}</div>;
}
