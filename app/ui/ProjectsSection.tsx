import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

// --- COMPONENTE DE PROJETOS ---
const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ma7heus/repos?sort=updated&direction=desc"
        );
        if (!response.ok) {
          throw new Error("Falha ao buscar os projetos do GitHub");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        Carregando projetos...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-red-500">
        Erro: {error}
      </div>
    );

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;