"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

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
    description: "AI-powered travel companion app with blockchain integration for secure transactions.",
    longDescription:
      "TravelMate is an innovative travel companion application that leverages AI to suggest personalized itineraries and local experiences. The app integrates blockchain technology for secure payment processing and verification of travel documents, ensuring a seamless and secure travel experience.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Python", "TensorFlow", "Blockchain", "Google Maps API"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "AI-powered personalized travel recommendations",
      "Blockchain-based secure payment system",
      "Real-time language translation",
      "Interactive maps with points of interest",
      "Travel document verification and storage",
    ],
    technologies: [
      "React Native for cross-platform mobile development",
      "Python backend with Flask",
      "TensorFlow for recommendation engine",
      "Ethereum smart contracts for payments",
      "Google Maps API for location services",
    ],
  },
  {
    id: "resume-screener",
    title: "Resume Screener",
    description: "AI-powered tool that analyzes resumes and matches them to job descriptions using NLP.",
    longDescription:
      "This resume screening application uses natural language processing to analyze resumes and match them to job descriptions. It helps recruiters save time by automatically identifying the most qualified candidates based on skills, experience, and education.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "NLP", "Machine Learning", "Flask", "React"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Resume parsing and information extraction",
      "Job description analysis",
      "Candidate-job matching algorithm",
      "Skill gap identification",
      "Automated candidate ranking",
    ],
    technologies: [
      "Python with spaCy for NLP",
      "scikit-learn for machine learning models",
      "Flask for backend API",
      "React for frontend interface",
      "MongoDB for data storage",
    ],
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation Website",
    description: "A web platform to promote and track tree plantation initiatives with interactive maps.",
    longDescription:
      "This web platform promotes environmental conservation by tracking tree plantation initiatives. It features interactive maps showing plantation sites, user contributions, and environmental impact metrics. Users can sponsor trees, organize plantation events, and track the growth of their planted trees.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Leaflet", "Express"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Interactive map of plantation sites",
      "User contribution tracking",
      "Environmental impact calculator",
      "Event organization tools",
      "Tree growth monitoring",
    ],
    technologies: [
      "React for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Leaflet for interactive maps",
      "Chart.js for data visualization",
    ],
  },
  {
    id: "temple-run",
    title: "Temple Run-style Rights Game",
    description: "A 3D endless runner game built with modern web technologies and 3D rendering.",
    longDescription:
      "This Temple Run-inspired game educates players about human rights while providing entertaining gameplay. Players navigate obstacles while collecting rights-themed power-ups and answering questions about human rights to earn bonus points.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Three.js", "JavaScript", "HTML5 Canvas", "WebGL", "Blender"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Endless runner gameplay mechanics",
      "Educational content about human rights",
      "Progressive difficulty levels",
      "Character customization",
      "High score leaderboard",
    ],
    technologies: [
      "Three.js for 3D rendering",
      "JavaScript for game logic",
      "HTML5 Canvas for UI elements",
      "WebGL for graphics processing",
      "Blender for 3D modeling",
    ],
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe (React)",
    description: "A modern implementation of the classic game with AI opponent and multiplayer options.",
    longDescription:
      "This React-based Tic-Tac-Toe game features both single-player mode with an AI opponent and multiplayer functionality. The AI uses the minimax algorithm to provide a challenging experience, while the multiplayer mode allows real-time gameplay between friends.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "JavaScript", "CSS3", "Socket.io", "AI Algorithm"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Single-player mode with AI opponent",
      "Real-time multiplayer functionality",
      "Game history tracking",
      "Customizable difficulty levels",
      "Responsive design for all devices",
    ],
    technologies: [
      "React for UI components",
      "JavaScript for game logic",
      "CSS3 for styling",
      "Socket.io for real-time communication",
      "Minimax algorithm for AI opponent",
    ],
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description: "Comprehensive solution for hotel operations including booking and room management.",
    longDescription:
      "This hotel management system provides a comprehensive solution for hotel operations, including room booking, guest management, staff scheduling, and financial reporting. It streamlines hotel processes and improves operational efficiency.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Express", "MySQL", "Redux", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Room booking and availability management",
      "Guest check-in/check-out processing",
      "Staff scheduling and management",
      "Financial reporting and analytics",
      "Inventory and maintenance tracking",
    ],
    technologies: [
      "React for frontend interface",
      "Express for API development",
      "MySQL for database management",
      "Redux for state management",
      "Node.js for server-side logic",
    ],
  },
]

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Project Screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-[#1e293b] text-[#00e0ff] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-[#1e293b] text-gray-400 px-3 py-1 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff]/10 btn-glow"
                  aria-label={`View details for ${project.title} project`}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
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
