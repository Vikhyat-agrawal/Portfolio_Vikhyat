"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    date: "December 2022",
    credential: "#",
    description:
      "Comprehensive course covering Python programming fundamentals, data structures, and algorithm implementation.",
  },
  {
    title: "Programming in C",
    issuer: "NPTEL",
    date: "July 2022",
    credential: "#",
    description: "In-depth study of C programming language, memory management, and system-level programming concepts.",
  },
]

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-[#00e0ff]">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover"
            >
              <div className="flex items-start mb-4">
                <Award className="text-[#00e0ff] h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[#00e0ff]">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{cert.description}</p>

              <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-[#1e293b] text-white hover:bg-[#1e293b]/50">
                  <ExternalLink size={16} className="mr-2" />
                  View Credential
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
