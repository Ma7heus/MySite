import React, { useState, useEffect, useRef } from "react";
import ConsoleBackground from "./ConsoleBackground"; // Assuming ConsoleBackground is in the same directory or accessible path.

import Image from 'next/image';
interface HeroSectionProps {
  setPage: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setPage }) => {
  const [text, setText] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const fullText = "DDesenvolvedor de Software Fullstack";

  useEffect(() => {
    // Mostra o prompt após um pequeno delay
    const promptTimer = setTimeout(() => setShowPrompt(true), 500);

    // Inicia a digitação após o prompt aparecer
    const typingTimer = setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < fullText.length) {
          setText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
      return () => clearInterval(typing);
    }, 1000);

    return () => {
      clearTimeout(promptTimer);
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start text-white relative px-4 sm:px-8 font-mono"
    >
      <div className="z-10 p-4 max-w-4xl">
        {showPrompt && (
          <div>
            <div className="flex justify-center md:justify-start mb-8"><Image src="/foto.png" alt="Foto de Perfil" width={200} height={200} className="rounded-full border-4 border-green-500"/></div>
            <p className="text-green-400 text-lg mb-2">
              <span className="text-cyan-400">user@matheusbiasi</span>:
              <span className="text-white">~</span>$ ./boas-vindas.sh
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
              Matheus Biasi.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-6 h-12">
              {text}
              <span className="bg-green-400 w-3 h-8 inline-block animate-ping ml-1"></span>
            </h2>
            <p className="max-w-2xl text-gray-300 mb-8">
              // Bem-vindo ao meu portfólio. <br />
              // Navegue pelos menus para executar os comandos e conhecer meu trabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setPage("projects")}
                className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-6 rounded-none hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                ls -a projetos
              </button>
              <button
                onClick={() => setPage("contact")}
                className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-6 rounded-none hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                mail matheus
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;