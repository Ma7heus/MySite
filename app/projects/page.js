import "dotenv/config.js"
import GitHubProjects from "../ui/git-hub-projects.tsx";
import { Suspense } from "react";

export default function Apresentacao() {
  const githubUsername = "Ma7heus";
  const githubToken = process.env.GIT_HUB_API_TOKEN;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-4">
      <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <GitHubProjects username={githubUsername} token={githubToken} />
      </Suspense>
      </div>
    </div>
  );
}
