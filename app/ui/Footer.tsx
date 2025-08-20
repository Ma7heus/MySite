import React from "react";

// --- COMPONENTE FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 border-t border-gray-800">
      <p className="text-gray-500">
        Projetado e Construído por Matheus Biasi © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;