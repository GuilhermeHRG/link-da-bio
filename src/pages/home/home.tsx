import { useEffect, useState } from 'react';
import profile from '../../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHtml5, FaReact, FaNodeJs, FaFigma, FaSearch, FaMobileAlt } from 'react-icons/fa';
import './home.css';

// Definição da interface para os repositórios do GitHub
interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    created_at: string;
    stargazers_count: number;
}

function Home() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRepos, setTotalRepos] = useState(0);

    const reposPerPage = 5; // Número de repositórios por página

    useEffect(() => {
        // Fetch para pegar os repositórios
        fetch('https://api.github.com/users/GuilhermeHRG/repos')
            .then(response => response.json())
            .then((data: Repo[]) => {
                // Filtra os repositórios com estrelas e não forks
                const filteredRepos = data
                    .filter((repo) => !repo.fork && repo.stargazers_count > 0) // Remove forks e filtra apenas repositórios com estrelas
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); // Ordena por data de criação

                setTotalRepos(filteredRepos.length); // Total de repositórios
                // Pagina os repositórios
                const paginatedRepos = filteredRepos.slice((currentPage - 1) * reposPerPage, currentPage * reposPerPage);
                setRepos(paginatedRepos);
            })
            .catch(error => console.error('Erro ao buscar repositórios:', error));
    }, [currentPage]); // Recarrega a lista de repositórios quando a página muda

    // Função para mudar de página
    const changePage = (newPage: number) => {
        if (newPage >= 1 && newPage <= Math.ceil(totalRepos / reposPerPage)) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="home-container">
            {/* Perfil */}
            <header className="profile-container">
                <img src={profile} alt="Perfil" className="profile-image" />
                <h1 className="name">Guilherme Guelere</h1>
                <h2 className="subtitle">Desenvolvedor Web</h2>
            </header>

            {/* Sobre mim */}
            <section className="section-about">
                <h3 className="section-title">Sobre mim</h3>
                <p>
                    Sou um desenvolvedor web apaixonado por tecnologia e inovação. Transformo ideias em experiências digitais incríveis,
                    criando interfaces intuitivas e otimizadas para performance.
                </p>
            </section>

            {/* Habilidades */}
            <section className="section skills">
                <h3 className="section-title">Habilidades</h3>
                <ul className="skill-list">
                    <li><FaHtml5 color="#E34F26" size={20} /> HTML, CSS, JavaScript</li>
                    <li><FaReact color="#61DAFB" size={20} /> React.js, Next.js</li>
                    <li><FaNodeJs color="#83CD29" size={20} /> Node.js, Express.js</li>
                    <li><FaFigma color="#F24E1E" size={20} /> UI/UX Design</li>
                    <li><FaSearch color="#FFBA00" size={20} /> SEO</li>
                    <li><FaMobileAlt color="#0088cc" size={20} /> Sites Responsivos</li>
                </ul>
            </section>

            {/* Projetos dinâmicos */}
            <section className="section projects">
                <h3 className="section-title">Projetos</h3>
                <div className="project-grid">
                    {repos.length > 0 ? (
                        repos.map((repo) => (
                            <div key={repo.id} className="project-card">
                                <h4>{repo.name}</h4>
                                <p>{repo.description || "Sem descrição disponível"}</p>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Ver no GitHub
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>Carregando projetos...</p>
                    )}
                </div>
            </section>

            {/* Paginação */}
            <div className="pagination">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === Math.ceil(totalRepos / reposPerPage)}>Próxima</button>
            </div>

            {/* Redes Sociais */}
            <section className="section social">
                <h3 className="section-title">Conecte-se comigo</h3>
                <div className="social-links">
                    <a href="https://wa.me/5543996138645" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://github.com/GuilhermeHRG" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/guilhermehrg/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/guilherme.guelere/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="footer">© {new Date().getFullYear()} Guilherme Guelere - Elevando sua presença digital.</footer>
        </div>
    );
}

export default Home;
