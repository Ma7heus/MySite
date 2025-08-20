import React from "react";

// --- ÍCONES (Substitutos para não precisar de bibliotecas externas) ---
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// Define the type for a project object
interface Project {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  stargazers_count: number;
  html_url: string;
  homepage: string | null;
}

// Define the props for the ProjectCard component
interface ProjectCardProps {
  project: Project;
}

// --- COMPONENTE DE CARD DE PROJETO ---
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.name}</h3>
      <p className="text-gray-400 mb-4 text-sm flex-grow">
        {project.description || "Sem descrição disponível."}
      </p>
      <div className="flex flex-wrap mb-4">
        {project.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="bg-gray-700 text-white px-2 py-1 rounded-full mr-2 mb-2 text-xs font-semibold"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
      <span className="text-gray-500 text-xs">
        ⭐ {project.stargazers_count}
      </span>
      <div>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 mr-4 transition-colors"
        >
          <GitHubIcon />
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;