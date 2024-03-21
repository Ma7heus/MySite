import React, { useState } from 'react';
import NavLink from './Link';

export default function CardProject({ title, textContent, link, linkDeployment }) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleClickMostrarTexto = () => {
    setMostrarTexto(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://via.placeholder.com/300x200" alt={title} className="w-full h-78 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4" onClick={handleClickMostrarTexto}>
          {mostrarTexto ? textContent : 'Clique para ler mais...'}
        </p>
        <div className="flex flex-row justify-center">
          <NavLink
            href="{link.href}"
            name="Repository"
          >
          </NavLink>
          <NavLink
            href="{link.href}"
            name="App"
          >
          </NavLink>
        </div>
      </div>
    </div>
  );
};

