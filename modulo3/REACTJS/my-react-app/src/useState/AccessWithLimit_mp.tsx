import { useState } from 'react';

export default function AccessWithLimit() {
  const [access, setAccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleAccess = () => {
    if (attempts >= 3) return;
    const success = window.confirm("¿Tienes permiso para acceder al sistema urbano?");
    if (success) setAccess(true);
    else setAttempts(attempts + 1);
  };

  return (
    <div>
      {!access ? (
        <>
          <button onClick={handleAccess} disabled={attempts >= 3}>
            Intentar acceso
          </button>
          {attempts >= 3 && <p>🔒 Acceso bloqueado.</p>}
        </>
      ) : (
        <p>✅ Acceso concedido</p>
      )}
    </div>
  );
}
