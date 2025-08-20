import React from "react";

// --- COMPONENTE DE ARTIGOS ---
const ArticlesSection = () => {
  // Dados mocados para os artigos. Em um projeto real, isso viria de um CMS ou arquivos Markdown.
  const articles = [
    {
      id: 1,
      title: "Entendendo o Hook useEffect do React",
      summary:
        "Uma exploração profunda sobre como e quando usar o hook useEffect para gerenciar efeitos colaterais em seus componentes React.",
      tags: ["React", "JavaScript", "Hooks"],
      date: "15 de Ago, 2025",
    },
    {
      id: 2,
      title: "State Management com Zustand: Simples e Poderoso",
      summary:
        "Descubra como o Zustand oferece uma solução de gerenciamento de estado minimalista e eficaz para aplicações React, sem o boilerplate do Redux.",
      tags: ["React", "State Management", "Zustand"],
      date: "02 de Jul, 2025",
    },
    {
      id: 3,
      title: "Construindo APIs RESTful com Node.js e Express",
      summary:
        "Um guia passo a passo para criar uma API robusta e escalável utilizando o ecossistema Node.js com o framework Express.",
      tags: ["Node.js", "API", "Backend"],
      date: "21 de Mai, 2025",
    },
  ];

  return (
    <section
      id="articles"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">
          Artigos
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Compartilhando conhecimento e aprendizados.
        </p>
        <div className="space-y-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-300 mb-4">{article.summary}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-cyan-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;