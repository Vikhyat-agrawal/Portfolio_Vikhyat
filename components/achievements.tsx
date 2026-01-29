"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Award, Medal, Star } from "lucide-react"

const achievements = [
  {
    title: "Smart India Hackathon",
    description: "Finalist in the prestigious national-level hackathon organized by the Government of India.",
    icon: Trophy,
    year: "2023",
  },
  {
    title: "Hack the League",
    description: "Winner of the regional hackathon focused on innovative solutions for urban challenges.",
    icon: Award,
    year: "2022",
  },
  {
    title: "NPTEL C Programming",
    description: "Achieved top percentile in the National Programme on Technology Enhanced Learning certification.",
    icon: Medal,
    year: "2021",
  },
  {
    title: "Web Development Competition",
    description: "First place in the university-level web development competition.",
    icon: Star,
    year: "2022",
  },
]

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-[#00e0ff]">Achievements</span> & Hackathons
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#1e293b]"></div>

          {/* Achievement items */}
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#00e0ff] z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#0b0f1a]"></div>
              </div>

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
                  <div className="flex items-center mb-4">
                    <achievement.icon className="text-[#00e0ff] h-8 w-8 mr-3" />
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-2">{achievement.description}</p>
                  <span className="text-sm text-[#00e0ff] font-medium">{achievement.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
