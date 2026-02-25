"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Database, 
  Terminal, 
  GitBranch, 
  Github, 
  Figma, 
  Server, 
  Layers, 
  Cpu, 
  Globe, 
  Rocket, 
  CpuIcon as Prompt,
  Laptop,
  Box,
  Layout,
  FileCode
} from "lucide-react"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "languages"
  icon: any
}

const skills: Skill[] = [
  { name: "HTML5", level: 95, category: "frontend", icon: Globe },
  { name: "CSS3", level: 90, category: "frontend", icon: Layers },
  { name: "JavaScript", level: 85, category: "frontend", icon: FileCode },
  { name: "React.js", level: 85, category: "frontend", icon: Code2 },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: Layout },
  { name: "ShadCN UI", level: 80, category: "frontend", icon: Box },
  { name: "Next.js", level: 80, category: "frontend", icon: Rocket },
  { name: "Node.js", level: 75, category: "backend", icon: Server },
  { name: "Express.js", level: 75, category: "backend", icon: Terminal },
  { name: "Supabase", level: 70, category: "backend", icon: Database },
  { name: "Firebase", level: 75, category: "backend", icon: Database },
  { name: "PostgreSQL", level: 65, category: "backend", icon: Database },
  { name: "Prompt Eng.", level: 90, category: "languages", icon: Prompt },
  { name: "Python", level: 80, category: "languages", icon: Terminal },
  { name: "Git", level: 85, category: "tools", icon: GitBranch },
  { name: "GitHub", level: 85, category: "tools", icon: Github },
  { name: "Vercel", level: 80, category: "tools", icon: Globe },
  { name: "Figma", level: 70, category: "tools", icon: Figma },
]

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend", icon: Laptop },
  { id: "backend", label: "Backend", icon: Server },
  { id: "languages", label: "Languages", icon: Terminal },
  { id: "tools", label: "Tools", icon: Cpu },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState<string>("all")
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills)

  useEffect(() => {
    if (filter === "all") {
      setFilteredSkills(skills)
    } else {
      setFilteredSkills(skills.filter((skill) => skill.category === filter))
    }
  }, [filter])

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#00e0ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e0ff] to-[#38bdf8]">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I've spent years mastering these technologies to build high-performance applications and intelligent systems.
          </motion.p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00e0ff] to-transparent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                filter === cat.id 
                ? "bg-[#00e0ff] text-black border-[#00e0ff] shadow-[0_0_20px_rgba(0,224,255,0.3)]" 
                : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-[#0f172a]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-[#00e0ff]/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#00e0ff]/10 group-hover:text-[#00e0ff] transition-colors duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-[#00e0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.level}%
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00e0ff] transition-colors duration-300">
                {skill.name}
              </h3>

              <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00e0ff] to-[#38bdf8] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

