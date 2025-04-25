"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./header";
import background from "../public/images/bg.jpg";

interface ProfileHeaderProps {
  onMenuClick?: () => void;
}

export default function ProfileHeader({ onMenuClick }: ProfileHeaderProps) {
  return (
    <header className="w-full">
      {/* Top Header */}
      <Header onMenuClick={onMenuClick} />

      {/* Banner */}
      <div className=" w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
        {/* Imagem de fundo */}
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30 "
        />
        {/* Gradiente escuro por cima */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2838] to-transparent" />

        {/* Profile Info */}
        <div className="container mx-auto px-4 relative z-10 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32  overflow-hidden  shadow-lg">
                <Image
                  src="https://github.com/GuilhermeHRG.png"
                  alt="Perfil"
                  width={128}
                  height={128}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#1b2838] animate-ping"></div>
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2"></div>
            </div>

            {/* Nome e Botões */}
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white">Guilherme Guelere</h1>
              <p className="text-[#66c0f4] text-sm md:text-base">Desenvolvedor Front-end Jr</p>

              
            </div>
          </div>
        </div>
      </div>

     
    </header>
  );
}
