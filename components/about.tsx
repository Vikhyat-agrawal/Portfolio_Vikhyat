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
              I'm a passionate Web Developer and AI Enthusiast currently pursuing B.Tech at PCE RTU with a CGPA of 8.58
              (class of 2027). Originally from Hathras, I'm now based in Jaipur, where I'm actively involved in the tech
              community.
            </p>

            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 text-[#00e0ff]" />
              <span>Jaipur, India (Originally from Hathras)</span>
            </div>

            <p className="text-lg text-gray-300">
              As the Webmaster at Udaan and a Core Team member at AWS and HIS, I've had the opportunity to collaborate
              on exciting projects and participate in multiple hackathons, enhancing my problem-solving skills and
              technical expertise.
            </p>

            <p className="text-lg text-gray-300">
              I specialize in web development and AI applications, constantly exploring new technologies and frameworks
              to stay at the cutting edge of the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <Cpu className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
              <p className="text-gray-400">
                Focused on machine learning and AI applications with practical implementations.
              </p>
            </div>

            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <Code className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
              <p className="text-gray-400">
                Creating responsive, modern web applications with the latest technologies.
              </p>
            </div>

            <div className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover">
              <BookOpen className="text-[#00e0ff] mb-4 h-10 w-10" />
              <h3 className="text-xl font-semibold mb-2">Core Team Roles</h3>
              <p className="text-gray-400">
                Webmaster at Udaan, Core Team at AWS and HIS, contributing to collaborative projects.
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
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">
                B.Tech at PCE RTU with 8.58 CGPA, class of 2027, focused on computer science.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
