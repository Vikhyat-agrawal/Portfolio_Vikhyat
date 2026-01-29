"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "languages"
}

const skills: Skill[] = [
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Tailwind", level: 80, category: "frontend" },
  { name: "Python", level: 85, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "Node.js", level: 65, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "Git", level: 70, category: "tools" },
  { name: "GitHub", level: 75, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "Linux", level: 60, category: "tools" },
  { name: "Blender", level: 50, category: "tools" },
  { name: "Unity", level: 45, category: "tools" },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [filter, setFilter] = useState<string>("all")
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills)
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    frontend: 0,
    backend: 0,
    tools: 0,
    languages: 0,
  })

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newCounters = { ...prev }
          if (newCounters.frontend < skills.filter((s) => s.category === "frontend").length) {
            newCounters.frontend += 1
          }
          if (newCounters.backend < skills.filter((s) => s.category === "backend").length) {
            newCounters.backend += 1
          }
          if (newCounters.tools < skills.filter((s) => s.category === "tools").length) {
            newCounters.tools += 1
          }
          if (newCounters.languages < skills.filter((s) => s.category === "languages").length) {
            newCounters.languages += 1
          }
          return newCounters
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isInView])

  useEffect(() => {
    if (filter === "all") {
      setFilteredSkills(skills)
    } else {
      setFilteredSkills(skills.filter((skill) => skill.category === filter))
    }
  }, [filter])

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-[#00e0ff]">Skills</span> & Tools
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] text-center"
          >
            <h3 className="text-4xl font-bold text-[#00e0ff] mb-2 achievement-counter">{counters.frontend}</h3>
            <p className="text-gray-300">Frontend Skills</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] text-center"
          >
            <h3 className="text-4xl font-bold text-[#00e0ff] mb-2 achievement-counter">{counters.backend}</h3>
            <p className="text-gray-300">Backend Skills</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] text-center"
          >
            <h3 className="text-4xl font-bold text-[#00e0ff] mb-2 achievement-counter">{counters.languages}</h3>
            <p className="text-gray-300">Programming Languages</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] text-center"
          >
            <h3 className="text-4xl font-bold text-[#00e0ff] mb-2 achievement-counter">{counters.tools}</h3>
            <p className="text-gray-300">Tools & Software</p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all" ? "bg-[#00e0ff] text-black" : "bg-[#121a2e] text-white hover:bg-[#1e293b]"
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "frontend" ? "bg-[#00e0ff] text-black" : "bg-[#121a2e] text-white hover:bg-[#1e293b]"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "backend" ? "bg-[#00e0ff] text-black" : "bg-[#121a2e] text-white hover:bg-[#1e293b]"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("languages")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "languages" ? "bg-[#00e0ff] text-black" : "bg-[#121a2e] text-white hover:bg-[#1e293b]"
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setFilter("tools")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "tools" ? "bg-[#00e0ff] text-black" : "bg-[#121a2e] text-white hover:bg-[#1e293b]"
            }`}
          >
            Tools
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm text-[#00e0ff]">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#1e293b] h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="bg-gradient-to-r from-[#00e0ff] to-[#38bdf8] h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
