import { useState } from 'react';

export default function CheckboxSummary() {
  const [checked, setChecked] = useState({ Sistema_a: false, Sistema_b: false });

  return (
    <div>
      <label><input type="checkbox" checked={checked.Sistema_a} onChange={() => setChecked({ ...checked, Sistema_a: !checked.Sistema_a})} /> Sistema A</label>
      <label><input type="checkbox" checked={checked.Sistema_b} onChange={() => setChecked({ ...checked, Sistema_b: !checked.Sistema_b })} /> Sistema B</label>
      <p>Seleccionado: {Object.entries(checked).filter(([, v]) => v).map(([k]) => k).join(', ') || 'ninguno'}</p>
    </div>
  );
}
