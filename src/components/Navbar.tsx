import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
