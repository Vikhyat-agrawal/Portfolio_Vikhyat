"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, Code, BookOpen, MapPin } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-[#00e0ff]">Me</span>
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Hello! I’m Vikhyat Agrawal from Hathras, Uttar Pradesh. I specialize in full-stack web development and
              prompt engineering, with a strong interest in integrating AI into modern web solutions.
            </p>

            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 text-[#00e0ff]" />
              <span>Hathras, Uttar Pradesh, India</span>
            </div>

            <p className="text-lg text-gray-300">
              I am a Core Team Member of HIS – Web Development Department, where I actively work on tech-driven projects
              and initiatives that bridge the gap between academic learning and real-world industry practices.
            </p>

            <p className="text-lg text-gray-300">
              From building decentralized platforms to designing scalable frontend architectures, I constantly explore
              emerging technologies to create impactful and future-ready digital experiences.
            </p>

            <div className="p-4 bg-[#121a2e] rounded-lg border border-[#1e293b]">
              <h3 className="text-xl font-bold mb-2 text-[#00e0ff]">My Mission</h3>
              <p className="text-gray-300">
                To build innovative web solutions that solve real-world problems and deliver seamless user experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <Cpu className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">Prompt Engineer</h3>
              <p className="text-gray-400">
                Expert in crafting effective prompts for AI models to automate workflows and enhance solutions.
              </p>
            </div>

            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <Code className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
              <p className="text-gray-400">
                Creating responsive, modern web applications with React, Next.js, and scaling architectures.
              </p>
            </div>

            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <BookOpen className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">Core Team – HIS</h3>
              <p className="text-gray-400">
                Leading web initiatives and mentoring peers in the Web Development Department.
              </p>
            </div>

            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <svg
                className="text-[#00e0ff] mb-4 h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M13 7h-2v6h6v-2h-4z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Based in Hathras, Uttar Pradesh.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
