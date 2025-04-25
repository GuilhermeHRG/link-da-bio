"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, ExternalLink, Github, Linkedin, Mail, User, Users, Globe, FileCode, Menu, X } from "lucide-react"
import ProfileHeader from "@/components/profile-header"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import SidebarInfo from "@/components/sidebar-info"
import TechStack from "@/components/tech-stack"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import geoparque from '../public/images/geoparque.jpg'
import taskmaster from '../public/images/taskmaster.jpg'
import timework from '../public/images/timework.jpg'
import bot from '../public/images/bot.jpg'
import Footer from "@/components/footer"
import ContactCard from "@/components/contactCard"


export default function Home() {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false)
    }
  }, [isMobile])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] text-gray-100">
      <ProfileHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Ajustar o espaçamento do conteúdo principal para compensar o header menor */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* Mobile Sidebar Toggle */}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="fixed bottom-6 right-6 z-50 bg-[#66c0f4] text-white p-3 rounded-full shadow-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Sidebar */}
          <div
            className={cn(
              "lg:w-80 space-y-6 transition-all duration-300 ease-in-out",
              isMobile ? "fixed inset-0 z-40 bg-[#1b2838]/95 p-4 pt-20 overflow-auto" : "w-full",
              isMobile && !sidebarOpen ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100",
            )}
          >
            <SidebarInfo />

            {/* Status */}
            <Card className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none p-4 backdrop-blur-sm shadow-xl">
              <h3 className="text-[#66c0f4] font-medium mb-2 flex items-center gap-2">
                <User size={16} />
                Status
              </h3>
              <p className="text-sm text-gray-100">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse">
                  
                </span>
                Online
              </p>
              <p className="text-xs text-gray-400 mt-2">Desenvolvedor Front-end</p>
            </Card>

            {/* Tech Stack */}
            <Card className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none p-4 backdrop-blur-sm shadow-xl">
              <h3 className="text-[#66c0f4] font-medium mb-3 flex items-center gap-2">
                <FileCode size={16} />
                Top 10 Stacks mais usadas
              </h3>
              <div className="space-y-2">
                
                <TechStack  />
                
              </div>
            </Card>

            {/* Contatos */}
            <ContactCard/>
          </div>

          {/* Main Content */}
          <div
            className={cn(
              "flex-1 space-y-6",
              isMobile && sidebarOpen ? "opacity-20 pointer-events-none" : "opacity-100 pointer-events-auto",
            )}
          >
            {/* Sobre */}
            <Card id="sobre" className="bg-[#2a475e]/90 border-none p-6 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] to-transparent "></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <h2 className="text-xl font-bold text-white">Sobre</h2>
                 
                </div>
                <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                Desenvolvo interfaces modernas e responsivas utilizando React, TypeScript e outras tecnologias, sempre com foco em performance e na melhor experiência para o usuário.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React"  />
                  <SkillBadge name="TypeScript"  />
                  <SkillBadge name="Tailwind CSS"  />
                  <SkillBadge name="CSS3"  />
                  <SkillBadge name="Vite"  />
                </div>
              </div>
            </Card>

            {/* Projeto Principal */}
            <Card className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
              <div className="relative h-48 md:h-64 w-full">
                <Image
                  src={geoparque}
                  alt="Site do Geoparque Caiuá"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2838] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Site do Geoparque Caiuá</h2>
                    <Badge
                      variant="outline"
                      className="border-[#67c1f5] text-[#67c1f5] bg-[#1b2838]/50 backdrop-blur-sm"
                    >
                      Publicado
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Site institucional do Geoparque Caiuá para a Prefeitura Municipal de Cruzeiro do Oeste PR.
                    </p>
                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-white">Características:</h4>
                        <ul className="mt-1 text-sm text-gray-300 list-disc pl-5 space-y-1">
                          <li>Design responsivo para todos os dispositivos</li>
                          <li>Animações suaves para melhor experiência do usuário</li>
                          <li>Integração com redes sociais e plataformas de contato</li>
                          <li>Performance otimizada com Vite e React</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="text-[#67c1f5] border-[#67c1f5] text-xs bg-[#1b2838]/50">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-[#67c1f5] border-[#67c1f5] text-xs bg-[#1b2838]/50">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="text-[#67c1f5] border-[#67c1f5] text-xs bg-[#1b2838]/50">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-[#67c1f5] border-[#67c1f5] text-xs bg-[#1b2838]/50">
                            Vite
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col gap-3">
                    <Link href="https://github.com/GuilhermeHRG/Geoparque-Caiua" target="_blank">
                      <Button className="w-full bg-[#1b2838] hover:bg-[#1b2838]/80 border border-[#67c1f5]/30">
                        <Github className="mr-2 h-4 w-4" /> Ver no GitHub
                      </Button>
                    </Link>
                    <Link href="https://www.geoparquecaiua.org" target="_blank">
                      <Button className="w-full bg-gradient-to-r from-[#67c1f5] to-[#4a9cc9] hover:from-[#67c1f5]/90 hover:to-[#4a9cc9]/90">
                        <Globe className="mr-2 h-4 w-4" /> Visitar Site
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projetos Tabs */}
            <Card id="projetos" className="bg-gradient-to-r from-[#0d0d0d] bg-[#2a475e]/90 border-none backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Code2 size={20} />
                    Projetos no GitHub
                  </h2>
                  <Link href="https://github.com/GuilhermeHRG?tab=repositories" target="_blank">
                    <Button variant="link" className="text-[#67c1f5] p-0 h-auto">
                      Ver todos <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="bg-[#1b2838] mb-4">
                    <TabsTrigger value="all">Todos</TabsTrigger>
                    <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Geoparque-Caiua"
                        description="Landing page para o Geoparque Caiuá usando NextJs"
                        //@ts-ignore
                        image={geoparque}
                        tags={["NextJs", "TypeScript", "Landing Page"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/Geoparque-Caiua"
                        stars={1}
                      />

                      <ProjectCard
                        title="Task-Master"
                        description="Sistema Kanban para gerenciar projetos, organizando por etapas"
                        //@ts-ignore
                        image={taskmaster}
                        tags={["TypeScript", "React", "Kanban"]}
                        clasName="object-fit"
                        githubUrl="https://github.com/GuilhermeHRG/Task-Master"
                        stars={1}
                      />

                      <ProjectCard
                        title="TimeWork"
                        description="Extensão para VS Code que monitora o tempo de trabalho e inatividade"
                        //@ts-ignore
                        image={timework}
                        tags={["TypeScript", "VS Code", "Extensão"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/TimeWork"
                        stars={1}
                      />

                      <ProjectCard
                        title="Bot--Reminder"
                        description="Bot que envia lembretes automatizados para contatos via WhatsApp"
                        //@ts-ignore
                        image={bot}
                        tags={["JavaScript", "WhatsApp", "Automação"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/Bot--Reminder"
                        stars={1}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="typescript" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Geoparque-Caiua"
                        description="Landing page para o Geoparque Caiuá usando NextJs"
                        image="/placeholder.svg?height=150&width=300"
                        tags={["NextJs", "TypeScript", "Landing Page"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/Geoparque-Caiua"
                        stars={1}
                      />

                      <ProjectCard
                        title="Task-Master"
                        description="Sistema Kanban para gerenciar projetos, organizando por etapas"
                        image="/placeholder.svg?height=150&width=300"
                        tags={["TypeScript", "React", "Kanban"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/Task-Master"
                        stars={1}
                      />

                      <ProjectCard
                        title="TimeWork"
                        description="Extensão para VS Code que monitora o tempo de trabalho e inatividade"
                        image="/placeholder.svg?height=150&width=300"
                        tags={["TypeScript", "VS Code", "Extensão"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/TimeWork"
                        stars={1}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="javascript" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProjectCard
                        title="Bot--Reminder"
                        description="Bot que envia lembretes automatizados para contatos via WhatsApp"
                        image="/placeholder.svg?height=150&width=300"
                        tags={["JavaScript", "WhatsApp", "Automação"]}
                        
                        githubUrl="https://github.com/GuilhermeHRG/Bot--Reminder"
                        stars={1}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>

          </div>
        </div>
            <Footer/>
      </div>
    </div>
  )
}
