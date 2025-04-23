import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={profileImg} alt="Minha foto" />
      <h1>Seu Nome</h1>
      <p>Desenvolvedor Front‑end · React · TypeScript</p>
      <a href="/src/assets/CV.pdf" download>Baixar CV</a>
    </section>
  );
}
