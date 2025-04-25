"use client";

import { Button } from "@/components/ui/button";
import { Home, User, Code2, Award, Mail, Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    onMenuClick?: () => void;
}

const menuItems: { label: string; icon: React.ElementType; href: string }[] = [
    { label: "Início", icon: Home, href: "#inicio" },
    { label: "Sobre", icon: User, href: "#sobre" },
    { label: "Projetos", icon: Code2, href: "#projetos" },
    { label: "Habilidades", icon: Award, href: "#habilidades" },
    { label: "Contato", icon: Mail, href: "#contato" },
];

export default function Header({ onMenuClick }: HeaderProps) {
    const isMobile = useMobile();

    return (
        <header className="bg-[#171a21]/90 backdrop-blur-md fixed top-0 z-50 w-full border-b border-gray-700/50">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                {/* Logo e Menu */}
                <div className="flex items-center gap-3">
                    {isMobile && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onMenuClick}
                            className="text-gray-300"
                        >
                            <Menu size={20} />
                        </Button>
                    )}
                    <div className="w-12 md:w-12 overflow-hidden shadow-lg">
                        <Image
                            src="https://github.com/GuilhermeHRG.png"
                            alt="Perfil"
                            width={128}
                            height={128}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <span className="font-bold text-white text-sm md:text-base">
                        Guilherme Guelere
                    </span>
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex items-center gap-2">
                    {menuItems.map(({ label, icon: Icon, href }, idx) => (
                        <Link key={idx} href={href}>
                            <Button
                                variant="ghost"
                                className="text-gray-300 hover:text-white hover:bg-[#2a475e] transition"
                            >
                                <Icon size={16} className="mr-2" />
                                {label}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
