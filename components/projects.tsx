"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import { useTilt } from "@/hooks/use-tilt"

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  liveLink?: string
  githubLink?: string
  features?: string[]
  technologies?: string[]
}

const projects: Project[] = [
  {
    id: "travelmate",
    title: "TravelMate",
    description: "Decentralized AI-powered travel platform with community features and blockchain payments.",
    longDescription:
      "A decentralized AI-powered travel platform featuring community creation, blockchain-based payments, real-time chat, voting systems, fund pooling, and AI-driven trip planning.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "AI", "Blockchain", "Payments"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Community creation & voting systems",
      "Blockchain-based secure payments",
      "Real-time chat & collaboration",
      "AI-driven trip planning & recommendations",
      "Fund pooling for group trips",
    ],
    technologies: ["React Native", "Node.js", "Blockchain", "AI Models", "Web3"],
  },
  {
    id: "micro-frontends",
    title: "Micro-Frontends Course",
    description: "Educational series on building scalable frontend architecture.",
    longDescription:
      "A complete educational series teaching scalable frontend architecture using React, Webpack 5, and Module Federation. It covers best practices for large-scale application development.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Webpack 5", "Module Federation", "Architecture"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Scalable architecture design",
      "Module Federation implementation",
      "Cross-application state management",
      "Shared dependencies & optimization",
      "Deployment strategies",
    ],
    technologies: ["React", "Webpack 5", "JavaScript", "CI/CD"],
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "Intelligent system for analyzing resumes and providing personalized feedback.",
    longDescription:
      "An intelligent system that scans resumes, analyzes skills and experience, and provides ratings with personalized improvement feedback to help job seekers optimize their profiles.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AI", "NLP", "Python", "Machine Learning"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Automated resume parsing",
      "Skill & experience analysis",
      "Personalized improvement feedback",
      "Match rating against job descriptions",
      "Detailed scoring metric",
    ],
    technologies: ["Python", "NLP Libraries", "React", "FastAPI"],
  },
  {
    id: "telegram-job-bot",
    title: "Telegram Job Bot",
    description: "Automated bot for fetching and posting entry-level technical job opportunities.",
    longDescription:
      "A Python-based bot that automatically fetches and posts filtered entry-level technical job opportunities from multiple APIs directly to Telegram channels.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "Telegram API", "Automation", "Bot"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Automated job fetching from APIs",
      "Filtering for entry-level roles",
      "Auto-posting to Telegram channels",
      "Customizable search criteria",
      "Real-time updates",
    ],
    technologies: ["Python", "Telegram Bot API", "Requests", "Scheduler"],
  },
]

const ProjectCard = ({
  project,
  index,
  isInView,
  onClick,
}: {
  project: Project
  index: number
  isInView: boolean
  onClick: () => void
}) => {
  const { tiltRef, tiltValues } = useTilt({ max: 5, scale: 1.02 })
  const isMobile = useMobile()

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card relative group"
      onClick={onClick}
      style={{
        transform: !isMobile
          ? `perspective(1000px) rotateX(${tiltValues.tiltY}deg) rotateY(${-tiltValues.tiltX}deg) scale3d(1, 1, 1)`
          : undefined,
        transition: "transform 0.1s ease",
      }}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${tiltValues.percentX * 100}% ${tiltValues.percentY * 100
            }%, rgba(0, 224, 255, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 bg-[#121a2e] h-full rounded-lg border border-[#1e293b] overflow-hidden group-hover:border-[#00e0ff]/50 transition-colors duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} - Project Screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={index < 3 ? "eager" : "lazy"}
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121a2e] to-transparent opacity-70"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs bg-[#1e293b] text-[#00e0ff] px-3 py-1 rounded-full border border-[#00e0ff]/20">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs bg-[#1e293b] text-gray-400 px-3 py-1 rounded-full border border-gray-700">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-black transition-all duration-300"
            aria-label={`View details for ${project.title} project`}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const isMobile = useMobile()

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-[#00e0ff]">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-modal-${selectedProject.id}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="project-modal-overlay"
                onClick={() => setSelectedProject(null)}
              ></motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="project-modal-content"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Project Screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 900px"
                    priority
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121a2e] to-transparent opacity-70"></div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-[#121a2e]/80 p-2 rounded-full hover:bg-[#1e293b] transition-colors"
                    aria-label="Close project details"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>

                <div className="p-8">
                  <h2 id={`project-modal-${selectedProject.id}`} className="text-3xl font-bold mb-4 text-white">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#1e293b] text-[#00e0ff] px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 text-lg">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  {selectedProject.features && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">Key Features</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.technologies && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">Technologies Used</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {selectedProject.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4 mt-8">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${selectedProject.title}`}
                      >
                        <Button className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black font-medium btn-glow">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}

                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${selectedProject.title}`}
                      >
                        <Button variant="outline" className="border-[#1e293b] text-white hover:bg-[#1e293b]/50">
                          <Github size={16} className="mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
