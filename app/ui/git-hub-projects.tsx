"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProject from './cards';
import { Suspense } from 'react';
import { getRepositoryReadme } from  '../data/fetchGitHub.js'

export default function GitHubProjects({ username, token }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `token ${token}`
          }
        });
        setProjects(response.data);
        
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, [username, token]);

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map(project => (
          <div key={project.id}>
            <CardProject 
              link={project.html_url}
              title={project.name}
              textContent={project.description}
              linkDeployment={project.html_url}
            />
          </div>
        ))}
      </div>
    </div>
    </Suspense>
  );
};

