import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  stars?: number
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  stars = 0,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1b2838]/80 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-40">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2838] to-transparent opacity-70"></div>

        {stars > 0 && (
          <div className="absolute top-2 right-2 bg-[#1b2838]/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-white">{stars}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-white text-lg">{title}</h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{description}</p>

       

        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-[#67c1f5] border-[#67c1f5] text-xs bg-[#1b2838]/50 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end mt-3">
          {githubUrl ? (
            <Link href={githubUrl} target="_blank">
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "h-8 px-2 text-xs text-[#67c1f5] hover:bg-[#67c1f5]/10",
                  "transition-all duration-300 hover:scale-105",
                )}
              >
                <Github size={14} className="mr-1" /> Código
              </Button>
            </Link>
          ) : (
            <Button size="sm" variant="ghost" className="h-8 px-2 text-xs text-[#67c1f5] hover:bg-[#67c1f5]/10">
              <Github size={14} className="mr-1" /> Código
            </Button>
          )}

          
        </div>
      </div>
    </div>
  )
}
