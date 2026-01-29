"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dumbbell, BookOpen, Palette } from "lucide-react"

export default function Hobbies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="hobbies" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-[#00e0ff]">Hobbies</span>
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover text-center"
          >
            <div className="flex justify-center mb-4">
              <Dumbbell className="text-[#00e0ff] h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sports</h3>
            <p className="text-gray-300">
              I enjoy playing volleyball, cricket, and basketball. Sports help me stay active and teach valuable lessons
              about teamwork and perseverance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover text-center"
          >
            <div className="flex justify-center mb-4">
              <BookOpen className="text-[#00e0ff] h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reading</h3>
            <p className="text-gray-300">
              I love reading books on technology, science fiction, and personal development. Reading broadens my
              perspective and fuels my creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover text-center"
          >
            <div className="flex justify-center mb-4">
              <Palette className="text-[#00e0ff] h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Drawing</h3>
            <p className="text-gray-300">
              Drawing allows me to express my creativity and visualize ideas. I enjoy sketching UI designs and
              conceptualizing project layouts.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
