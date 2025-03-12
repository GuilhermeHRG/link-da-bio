import { useEffect, useState } from 'react';
import profile from '../../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHtml5, FaReact, FaNodeJs, FaFigma, FaSearch, FaMobileAlt, FaBriefcase, FaBook } from 'react-icons/fa';
import './home.css';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    created_at: string;
    stargazers_count: number;
    language: string;
}

const CACHE_KEY = 'github_repos';
const CACHE_EXPIRATION = 3600 * 1000; // 1 hora em milissegundos

function Home() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRepos, setTotalRepos] = useState(0);
    const reposPerPage = 6;

    useEffect(() => {
        const fetchRepos = async () => {
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const { timestamp, data } = JSON.parse(cachedData);
                if (Date.now() - timestamp < CACHE_EXPIRATION) {
                    console.log('Usando dados do cache');
                    setRepos(paginate(data, currentPage, reposPerPage));
                    setTotalRepos(data.length);
                    return;
                }
            }

            try {
                console.log('Buscando novos dados da API...');
                const response = await fetch('https://api.github.com/users/GuilhermeHRG/repos');
                const data: Repo[] = await response.json();

                const filteredRepos = data
                    .filter(repo => !repo.fork && repo.stargazers_count > 0)
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

                localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: filteredRepos }));

                setRepos(paginate(filteredRepos, currentPage, reposPerPage));
                setTotalRepos(filteredRepos.length);
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            }
        };

        fetchRepos();
    }, [currentPage]);

    const paginate = (data: Repo[], page: number, perPage: number) => {
        return data.slice((page - 1) * perPage, page * perPage);
    };

    const changePage = (newPage: number) => {
        if (newPage >= 1 && newPage <= Math.ceil(totalRepos / reposPerPage)) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="home-container">
            <header className="profile-container">
                <img src={profile} alt="Perfil" className="profile-image" />
                <h1 className="name">Guilherme Guelere</h1>
                <h2 className="subtitle">Desenvolvedor Web</h2>
            </header>

            <section className="section-about">
                <h3 className="section-title">Sobre mim</h3>
                <p>
                    Sou um desenvolvedor web apaixonado por tecnologia e inovação. Transformo ideias em experiências digitais incríveis,
                    criando interfaces intuitivas e otimizadas para performance.
                </p>
            </section>


            <section className="section skills">
                <h3 className="section-title">Habilidades</h3>
                <ul className="skill-list">
                    <li><FaHtml5 color="#E34F26" size={20} /> HTML, CSS, JavaScript</li>
                    <li><FaReact color="#61DAFB" size={20} /> React.js, Next.js</li>
                    <li><FaNodeJs color="#83CD29" size={20} /> Node.js</li>
                    <li><FaFigma color="#F24E1E" size={20} /> UI/UX Design</li>
                    <li><FaSearch color="#FFBA00" size={20} /> SEO</li>
                    <li><FaMobileAlt color="#0088cc" size={20} /> Sites Responsivos</li>
                </ul>
            </section>

            <section className="section projects">
                <h3 className="section-title">Projetos</h3>
                <div className="project-grid">
                    {repos.length > 0 ? (
                        repos.map(repo => (
                            <div key={repo.id} className="project-card">
                                <h5>{repo.language}</h5>
                                <div className='project-title'>
                                    <h4>{repo.name}</h4>
                                </div>
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


            <div className="pagination">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === Math.ceil(totalRepos / reposPerPage)}>Próxima</button>
            </div>

            <section className="section-exp">
                <h3 className="section-title">Experiência Profissional</h3>

                <div className="card-exp">
                    <div className="icon-wrapper">
                        <FaBriefcase className="icon" />
                    </div>
                    <div className="exp-content">
                        <h4>Escritório Visão</h4>
                        <span className="exp-time">2018 - 2023</span>
                        <p>
                            Trabalhei por 5 anos exercendo as funções de Office Boy, Arquivista de documentos e Auxiliar de Escritório.
                        </p>
                    </div>
                </div>

                <div className="card-exp">
                    <div className="icon-wrapper">
                        <FaBriefcase className="icon" />
                    </div>
                    <div className="exp-content">
                        <h4>Gerencial Software</h4>
                        <span className="exp-time">2023 - Atual</span>
                        <p>
                            Atuei por 1 ano como Help Desk e atualmente sou Programador Frontend Jr.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-exp">
                <h3 className="section-title">Formação</h3>

                <div className="card-exp">
                    <div className="icon-wrapper">
                        <FaBook className="icon" />
                    </div>
                    <div className="exp-content">
                        <h4>Instituto Federal do Paraná - IFPR</h4>
                        <span className="exp-time">2021 - 2025</span>
                        <p>
                            Cursando 8° Semestre de Sistemas de Informação
                        </p>
                    </div>
                </div>
            </section>
            <section className="section social">
                <h3 className="section-title">Conecte-se comigo</h3>
                <div className="social-links">
                    <div className="social-item">
                        <a href="https://wa.me/5543996138645" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                            <FaWhatsapp size={24} />
                        </a>
                        <p className="social-username">(43) 9 9613-8645</p>
                    </div>
                    <div className="social-item">
                        <a href="https://github.com/GuilhermeHRG" target="_blank" rel="noopener noreferrer" className="social-icon github">
                            <FaGithub size={24} />
                        </a>
                        <p className="social-username">@GuilhermeHRG</p>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/guilhermehrg/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <FaLinkedin size={24} />
                        </a>
                        <p className="social-username">@guilhermehrg</p>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/guilherme.guelere/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <FaInstagram size={24} />
                        </a>
                        <p className="social-username">@guilherme.guelere</p>
                    </div>
                </div>
            </section>

            <footer className="footer">© {new Date().getFullYear()} Guilherme Guelere - Elevando sua presença digital.</footer>
        </div>
    );
}

export default Home;
