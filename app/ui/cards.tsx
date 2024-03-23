import React, { useState, useEffect } from 'react';
import NavLink from './Link';
import CenteredModal from './modal';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { LuFolderGit } from "react-icons/lu";
import { IoMdOpen } from "react-icons/io";
import { Button } from 'react-bootstrap';



export default function CardProject(project) {

  const gitHubProject = project.project;
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleClickMostrarTexto = () => {
    setMostrarTexto(true);
  };

  const handleOpenLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://private-user-images.githubusercontent.com/86833526/316196720-27474180-8d9b-4cc9-90b1-a25fb55679b9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTExNTMyMjcsIm5iZiI6MTcxMTE1MjkyNywicGF0aCI6Ii84NjgzMzUyNi8zMTYxOTY3MjAtMjc0NzQxODAtOGQ5Yi00Y2M5LTkwYjEtYTI1ZmI1NTY3OWI5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzIzVDAwMTUyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY5ZDM5NjRlZDdiYjNlMDliYTA5NDZmMzk1ZjUwMTY4NmFiZTE4YTUyZDhkMzNmMzc4Nzk0ZjJhOTJhNjk5ZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ofsj6KPI-Q3Zb7H_fQGIgLWzxtaX4AE6MroNZwxOGYg"
        alt={gitHubProject.name}
        className="w-full h-78 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{gitHubProject.name}</h3>
          <span
            key={gitHubProject.language}
            className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 mb-2"
            style={{ fontSize: "10px" }}
          >
            {gitHubProject.language}
          </span>

        <p className="text-gray-500 mb-4" onClick={handleClickMostrarTexto}>
          {mostrarTexto ? gitHubProject.description : "Clique para ler mais..."}
        </p>
        
        <div className="flex flex-row justify-center space-x-6 items-center">
          <Button className="flex justify-center rounded-md hover:bg-gray-300"
            variant="primary"
            style={{ width: "100px" }}
            onClick={() => 
              console.log(gitHubProject)  
            }
            title="Visualizar"
          >
            <FaEye/>
          </Button>

          <Button className="flex justify-center rounded-md hover:bg-gray-300"
            variant="primary"
            style={{ width: "100px" }}
            onClick={() => handleOpenLink(gitHubProject.html_url)}
            title="Abrir repositório Github"
          >
            <LuFolderGit/>
          </Button>

          <Button className="flex justify-center rounded-md hover:bg-gray-300"
            variant="primary"
            style={{ width: "100px" }}
            onClick={() => handleOpenLink(gitHubProject.homepage? gitHubProject.homepage: gitHubProject.html_url)}
            title="Ver Deploy"
          >
            <IoMdOpen/>
          </Button>
        </div>
      </div>
    </div>
  );
};