import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Seu Nome.{' '}
      <a href="https://github.com/seunome" target="_blank" rel="noreferrer">GitHub</a>
    </footer>
  );
}
