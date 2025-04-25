"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-12">
      {/* Linha separadora */}
      <div className="w-full h-px bg-gray-700/40 mb-6" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        {/* Créditos */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Guilherme Guelere. Todos os direitos reservados.
        </div>

        {/* Links de redes */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/GuilhermeHRG"
            target="_blank"
            className="text-gray-400 hover:text-[#66c0f4] transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/guilhermehrg"
            target="_blank"
            className="text-gray-400 hover:text-[#66c0f4] transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:contato@exemplo.com"
            className="text-gray-400 hover:text-[#66c0f4] transition-colors"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
