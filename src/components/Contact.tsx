import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pela mensagem!');
  };

  return (
    <section className="contact" id="contato">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensagem" rows={5} value={form.message} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
