import React, { useEffect, useState } from 'react';
import './Projects.css';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/seunome/repos?sort=updated')
      .then(res => res.json())
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="projects" id="projetos">
      <h2>Projetos</h2>
      {loading ? (
        <p>Carregando projetos...</p>
      ) : (
        <div className="project-grid">
          {repos.map(repo => (
            <div className="card" key={repo.name}>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Sem descrição'}</p>
              {repo.language && <span className="language">{repo.language}</span>}
              <a href={repo.html_url} target="_blank" rel="noreferrer">Ver no GitHub</a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
