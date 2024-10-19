// src/components/Home.jsx
import profile from '../../assets/profile.jpg';
import './home.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Home() {

    return (
        <div className="main">
            <div className="container-profile">
                <img src={profile} alt="Perfil" className="img-profile" />
                <div className='section-title'>
                    <h1 className="title">Guilherme Guelere</h1>
                    <h2 className="subtitle">Desenvolvedor Web</h2>
                </div>
            </div>
            <iframe className="cardMsc " src="https://open.spotify.com/embed/track/4JZsOwl781NfirgQwQJbFP?utm_source=generator&theme=0"  frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <section className='section-about'>
                <h3>Sobre mim</h3>
                <p>Olá! Meu nome é Guilherme, tenho 22 anos e moro em Ivaiporã PR. Comigo, sua criatividade vira realidade digital.</p>
            </section>
            <section className='list-button'>
                <a href="https://wa.me/5543996138645" target="_blank" rel="noopener noreferrer">
                    <button>WhatsApp <WhatsAppIcon className='icon' /></button>
                </a>
                <a href="https://github.com/GuilhermeHRG" target="_blank" rel="noopener noreferrer">
                    <button>Github <GitHubIcon className='icon' /></button>
                </a>
                <a href="https://www.linkedin.com/in/guilhermehrg/" target="_blank" rel="noopener noreferrer">
                    <button>LinkedIn <LinkedInIcon className='icon' /></button>
                </a>
                <a href="https://www.instagram.com/guilherme.guelere/" target="_blank" rel="noopener noreferrer">
                    <button>Instagram <InstagramIcon className='icon' /></button>
                </a>
            </section>
            
                   
            <section className='section-services'>
                <h3>Serviços</h3>
                <ul>
                    <li>Landing Pages</li>
                    <li>Sites Institucionais</li>
                    <li>Páginas de Captura</li>
                    <li>Páginas de Lançamento</li>
                    <li>UX/UI Design</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
