import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Users } from "lucide-react";
import Link from "next/link";

export default function ContactCard() {
  return (
    <Card id="contato" className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#66c0f4]/20 p-2 rounded-full">
          <Users size={20} className="text-[#66c0f4]" />
        </div>
        <h3 className="text-lg font-bold text-white">Contatos</h3>
      </div>

      <div className="space-y-4">
        <Link
          href="https://github.com/GuilhermeHRG"
          target="_blank"
          className="flex items-center gap-3 bg-[#1b2838]/60 p-3 rounded-lg hover:bg-[#2a475e]/70 transition"
        >
          <Github size={18} className="text-[#66c0f4]" />
          <div className="text-sm text-white font-medium">GitHub</div>
        </Link>

        <Link
          href="https://linkedin.com/in/guilhermehrg"
          target="_blank"
          className="flex items-center gap-3 bg-[#1b2838]/60 p-3 rounded-lg hover:bg-[#2a475e]/70 transition"
        >
          <Linkedin size={18} className="text-[#66c0f4]" />
          <div className="text-sm text-white font-medium">LinkedIn</div>
        </Link>

        <Link
          href="mailto:contato@exemplo.com"
          className="flex items-center gap-3 bg-[#1b2838]/60 p-3 rounded-lg hover:bg-[#2a475e]/70 transition"
        >
          <Mail size={18} className="text-[#66c0f4]" />
          <div className="text-sm text-white font-medium">Email</div>
        </Link>
      </div>
    </Card>
  );
}
