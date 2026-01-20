import { useState } from 'react';

export default function MultiSwitch() {
  const [switches, setSwitches] = useState({ Sistema_A: false, Sistema_B: false, Sistema_C: false });

  return (
    <div>
      {Object.entries(switches).map(([key, val]) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              checked={val}
              onChange={() => setSwitches({ ...switches, [key]: !val })}
            />
            {key}
          </label>
        </div>
      ))}
      <p>Seleccionado: {Object.entries(switches).filter(([, v]) => v).map(([k]) => k).join(', ') || 'ninguno'}</p>
    </div>
  );
}
