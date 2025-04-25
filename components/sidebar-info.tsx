"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
}

export default function SidebarInfo() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [stars, setStars] = useState<number>(0);

  // Data de hoje
  const today = new Date();
  const currentYear = today.getFullYear();

  // Próximo 3 de julho
  let targetDate = new Date(currentYear, 6, 3); // 6 = Julho (indexado)
  if (today > targetDate) {
    targetDate = new Date(currentYear + 1, 6, 3);
  }

  const msInDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.ceil((targetDate.getTime() - today.getTime()) / msInDay);

  const startOfYear = new Date(currentYear, 0, 1);
  const totalTime = targetDate.getTime() - startOfYear.getTime();
  const elapsed = today.getTime() - startOfYear.getTime();
  const progressPercentage = Math.min(100, Math.max(0, (elapsed / totalTime) * 100));

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Busca dados de perfil
        const profileRes = await fetch("https://api.github.com/users/GuilhermeHRG");
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Busca dados de repositórios para somar estrelas
        const reposRes = await fetch("https://api.github.com/users/GuilhermeHRG/repos?per_page=100");
        const reposData = await reposRes.json();
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
        setStars(totalStars);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <Card className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none overflow-hidden backdrop-blur-sm shadow-xl rounded-xl">
      <div className="p-4">
        <div className="flex flex-col items-center  mb-4">
          
          <h2 className="text-lg font-bold mt-2 text-white">Dados do Perfil </h2>
          <p className="text-sm text-[#66c0f4]">Github</p>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1 text-gray-100">
              <span>Faltam</span>
              <span>{daysLeft} dias</span>
            </div>
            <Progress
              value={progressPercentage}
              className="h-2 bg-[#1b2838]"
              indicatorClassName="bg-gradient-to-r from-[#66c0f4] to-[#4a9cc9]"
            />
          </div>

          {/* Cards de GitHub */}
          {profile ? (
            <>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-[#1b2838]/80 p-2 rounded-lg shadow-inner">
                  <p className="text-[#66c0f4] font-medium">Projetos</p>
                  <p className="text-white text-lg font-bold">{profile.public_repos}</p>
                </div>
                <div className="bg-[#1b2838]/80 p-2 rounded-lg shadow-inner">
                  <p className="text-[#66c0f4] font-medium">Estrelas</p>
                  <p className="text-white text-lg font-bold">{stars}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-[#1b2838]/80 p-2 rounded-lg shadow-inner">
                  <p className="text-[#66c0f4] font-medium">Seguidores</p>
                  <p className="text-white text-lg font-bold">{profile.followers}</p>
                </div>
                <div className="bg-[#1b2838]/80 p-2 rounded-lg shadow-inner">
                  <p className="text-[#66c0f4] font-medium">Seguindo</p>
                  <p className="text-white text-lg font-bold">{profile.following}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-sm text-gray-400">Carregando dados...</div>
          )}

          {/* Especialidades */}
          <div className="mt-3 space-y-2">
            <h3 className="text-xs font-medium text-[#66c0f4]">Stacks mais usadas:</h3>
            <div className="flex flex-wrap gap-1">
              <Badge
                variant="outline"
                className="text-[#66c0f4] border-[#67c1f5] text-xs bg-[#1b2838]/50 backdrop-blur-sm"
              >
                React
              </Badge>
              <Badge
                variant="outline"
                className="text-[#66c0f4] border-[#67c1f5] text-xs bg-[#1b2838]/50 backdrop-blur-sm"
              >
                TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="text-[#66c0f4] border-[#67c1f5] text-xs bg-[#1b2838]/50 backdrop-blur-sm"
              >
                CSS3
              </Badge>
              <Badge
                variant="outline"
                className="text-[#66c0f4] border-[#67c1f5] text-xs bg-[#1b2838]/50 backdrop-blur-sm"
              >
                Tailwind
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
