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
    id: "intellihire",
    title: "IntelliHire – AI Recruitment Platform",
    description: "AI-powered recruitment platform designed to simplify the hiring process.",
    longDescription:
      "IntelliHire is an AI-powered recruitment platform designed to simplify the hiring process for companies and candidates. It analyzes candidate profiles and provides intelligent insights to improve hiring decisions and reduce delays caused by traditional keyword-based ATS systems.",
    image: "/projects/intelli-hire.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "AI"],
    liveLink: "https://v0-intelli-hire-clone.vercel.app/",
    features: [
      "AI-based candidate evaluation",
      "Smart recruitment workflow",
      "Resume and eligibility analysis",
      "Clean recruiter dashboard",
      "Fast and efficient hiring pipeline",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "atom-print",
    title: "Atom Print – Online Printing Platform",
    description: "Modern web platform designed to simplify document printing services.",
    longDescription:
      "Atom Print is a modern web platform designed to simplify document printing services. Users can upload files, preview documents, and manage print requests through an intuitive interface.",
    image: "/projects/atom-print.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://atom-print.vercel.app/",
    features: [
      "Document upload and preview",
      "Online printing request management",
      "Simple and responsive UI",
      "Fast processing workflow",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "travelmate",
    title: "TravelMate – Smart Travel Community Platform",
    description: "Community-driven travel planning platform for discovering destinations and collaborating.",
    longDescription:
      "TravelMate is a community-driven travel planning platform where users can discover travel destinations, collaborate with other travelers, and plan trips efficiently. The platform focuses on connecting travelers and simplifying travel planning.",
    image: "/projects/travel-mate.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://travel-mate-sepia.vercel.app/",
    features: [
      "Travel community creation",
      "Trip planning tools",
      "Destination discovery",
      "Interactive UI for travelers",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "udaan",
    title: "Udaan Aeromodelling Club Website",
    description: "Official website for the Udaan Aeromodelling Club showcasing activities and achievements.",
    longDescription:
      "Official website for the Udaan Aeromodelling Club that showcases club activities, projects, achievements, and member profiles. The platform acts as a digital hub for aeromodelling enthusiasts.",
    image: "/projects/udaan-aeromodelling.png",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveLink: "https://udaanaeromodelingclub.vercel.app/",
    features: [
      "Club information and activities",
      "Project gallery and achievements",
      "Member profiles",
      "Event announcements",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    description: "Interactive Tic-Tac-Toe game demonstrating game logic and front-end interactivity.",
    longDescription:
      "A simple interactive Tic-Tac-Toe game built to demonstrate game logic and front-end interactivity.",
    image: "/projects/tic-tac-toe.png",
    tags: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://tic-tak-toe-eta-murex.vercel.app/",
    features: ["Two-player game mode", "Dynamic board updates", "Win detection logic", "Responsive UI"],
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "breatho",
    title: "Breatho – Health Awareness Website",
    description: "Health-focused website spreader awareness about breathing exercises and respiratory health.",
    longDescription:
      "Breatho is a health-focused website designed to spread awareness about breathing exercises and respiratory health. It provides information, guidance, and resources for improving breathing habits.",
    image: "/projects/breatho.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://breatho-website-master.vercel.app/",
    features: ["Health awareness content", "Educational resources", "Clean and user-friendly design", "Mobile responsive interface"],
    technologies: ["HTML", "CSS", "JavaScript"],
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
