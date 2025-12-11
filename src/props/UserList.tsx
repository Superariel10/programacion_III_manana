export default function UserList(props) {
  return (
    <ul>
      {props.users.map((user, i) => (
        <li key={i}>
          {user} <button onClick={() => props.onRemove(i)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}