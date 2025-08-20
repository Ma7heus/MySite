import React from "react";

// --- COMPONENTE SOBRE ---
const AboutSection: React.FC = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      name: "TypeScript",
      icon: "https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "React",
      icon: "https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    },
    {
      name: "Next.js",
      icon: "https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
    },
    {
      name: "Node.js",
      icon: "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "Python",
      icon: "https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    },
    {
      name: "Django",
      icon: "https://img.shields.io/badge/-Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      name: "Docker",
      icon: "https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Sobre Mim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/84333233?v=4"
              alt="Matheus Biasi"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500 shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 mb-4">
              Olá! Sou Matheus, um desenvolvedor de software com uma forte
              paixão por tecnologia e inovação. Minha jornada na programação
              começou com o desejo de construir coisas que pudessem resolver
              problemas reais e impactar positivamente a vida das pessoas.
            </p>
            <p className="text-gray-300 mb-4">
              Com experiência em todo o ciclo de vida do desenvolvimento de
              software, desde o conceito até o deploy, sou proficiente em
              tecnologias front-end e back-end. Tenho um carinho especial por
              criar interfaces de usuário limpas e intuitivas, e arquiteturas de
              back-end eficientes e seguras.
            </p>
            <p className="text-gray-300">
              Estou sempre em busca de novos desafios e oportunidades para
              aprender e crescer como profissional.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">
            Minhas Habilidades
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-gray-800 rounded-lg p-3 transform hover:scale-110 transition-transform duration-300"
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;