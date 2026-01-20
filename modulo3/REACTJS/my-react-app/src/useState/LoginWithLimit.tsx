import { useState } from 'react';

export default function LoginWithLimit() {
  const [access, setAccess] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordSaved = '12345';
  const emailSaved = 'javier@gmail.com'

  const handleAccess = () => {
    if (attempts >= 3) return;
    if (password==passwordSaved && email==emailSaved){
      const success = window.confirm("¿Tienes premiso para acceder?");
      if(success) setAccess(true);
    } else {
      window.confirm("Acceso denegado");
      setAttempts(attempts+1)};
  };

  return (
    <div>
      {!access ? (
        <>
          <input
          type="email" value={email} placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}/>
          <input
          type="password" value={password} placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleAccess} disabled={attempts >= 3}>
            Intentar acceso
          </button>
          {attempts >= 3 && <p>🔒 Acceso bloqueado por demasiados intentos.</p>}
        </>
      ) : (
        <p>✅ Acceso concedido</p>
      )}
    </div>
  );
}
