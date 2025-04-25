"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface TechStackItem {
  name: string;
  percentage: number;
}

export default function TechStackList() {
  const [stacks, setStacks] = useState<TechStackItem[]>([]);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        // Busca até 100 repositórios (não apenas 10)
        const reposRes = await fetch("https://api.github.com/users/GuilhermeHRG/repos?per_page=100");
        const reposData = await reposRes.json();

        const languageTotals: { [key: string]: number } = {};

        // Conta as linguagens principais
        for (const repo of reposData) {
          if (repo.language) {
            languageTotals[repo.language] = (languageTotals[repo.language] || 0) + 1;
          }
        }

        const totalLanguages = Object.values(languageTotals).reduce((acc, count) => acc + count, 0);

        const stacksArray: TechStackItem[] = Object.entries(languageTotals)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLanguages) * 100),
          }))
          .sort((a, b) => b.percentage - a.percentage) // Ordena do maior para o menor
          .slice(0, 10); // PEGA APENAS AS TOP 10

        setStacks(stacksArray);
      } catch (error) {
        console.error("Erro ao buscar linguagens do GitHub:", error);
      }
    }

    fetchLanguages();
  }, []);

  return (
    <div className="space-y-2 text-gray-100" id="habilidades">
      {stacks.length > 0 ? (
        stacks.map((stack, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs mb-1">
              <span>{stack.name}</span>
              <span>{stack.percentage}%</span>
            </div>
            <Progress
              value={stack.percentage}
              className="h-2 bg-[#1b2838]/80 shadow-inner"
              indicatorClassName="bg-gradient-to-r from-[#66c0f4] to-[#4a9cc9]"
            />
          </div>
        ))
      ) : (
        <p className="text-xs text-gray-400 text-center">Carregando stacks...</p>
      )}
    </div>
  );
}
