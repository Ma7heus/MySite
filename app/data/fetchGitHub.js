import axios from 'axios';
import React, { useEffect } from 'react';

const githubUsername = "Ma7heus";
const BASE_URL = `https://api.github.com`;

export async function getGitHubProjects({ token }) {
    const url = BASE_URL + "/users/${githubUsername}/repos";
    
    try {
        const headers = {
            'Authorization': `token ${token}`,
        };
        const response = await axios.get(url, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub projects", error);
        return [];
    }
}

export async function getRepositoryReadme({ token, repositoryName }) {
    const url = `${BASE_URL}/repos/${githubUsername}/${repositoryName}/readme`;

    try {
        const headers = {
            'Authorization': `token ${token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data.content;
    } catch (error) {
        console.error("Error fetching repository README", error);
        return null;
    }
}


