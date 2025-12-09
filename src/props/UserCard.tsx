export default function UserCard({ user }) {
    return <div>{user.name} - {user.apellido} - {user.age} años - Direccion: {user.direccion} - telefono {user.telefono}</div>;
  }