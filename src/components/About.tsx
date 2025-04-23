import './About.css';

export default function About() {
  return (
    <section className="about" id="sobre">
      <h2>Sobre</h2>
      <p>Breve descrição sobre você, suas habilidades e experiência.</p>
      <div className="skills">
        <span className="skill">React</span>
        <span className="skill">TypeScript</span>
        <span className="skill">CSS</span>
        <span className="skill">JavaScript</span>
      </div>
    </section>
  );
}
