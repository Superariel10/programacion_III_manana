import { useEffect, useState } from 'react';

export default function FetchUser() {
  const [users, setUsers] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Usuario:</h3>
      {users ? (
        <><p>{users.name} - {users.email}</p>
        <p>Direccion:  {users.address.street}</p>
        <p>Latitud: {users.address.geo.lat}</p></>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
