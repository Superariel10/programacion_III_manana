import { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('es');
  const messages = {
    es: 'Bienvenido al sistema urbano',
    en: 'Welcome to the urban system',
    fr: 'Bienvenue dans le système urbain'
  };

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
      <p>{messages[lang]}</p>
    </div>
  );
}
