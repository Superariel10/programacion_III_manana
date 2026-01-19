
import { useState } from 'react';

export default function HoverFont() {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: hovered ? 'Sekuya' : 'Arial' }}>
      Pasa el cursor sobre este texto para cambiar la fuente
    </p>
  );
}
