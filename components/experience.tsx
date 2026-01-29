"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Award, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Frontend/Backend Intern",
    company: "Bussibees EdTech",
    period: "May 2023 - Aug 2023",
    location: "Remote",
    description:
      "Developed responsive web interfaces and implemented backend functionality for educational platform. Collaborated with cross-functional teams to deliver features on time.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
  },
  {
    title: "Top 10 in Digital Campus 2.0",
    organization: "Google Cloud",
    period: "Feb 2023",
    location: "Virtual",
    description:
      "Recognized among the top 10 participants in the Google Cloud Digital Campus program. Demonstrated proficiency in cloud technologies and solutions.",
    skills: ["Google Cloud Platform", "Cloud Computing", "DevOps", "Kubernetes"],
  },
]

const hackathons = [
  {
    name: "Smart India Hackathon 2023",
    position: "Finalist",
    description:
      "Developed an AI-powered solution for healthcare accessibility in rural areas. Implemented machine learning models for disease prediction based on symptoms.",
  },
  {
    name: "Smart India Hackathon 2024",
    position: "Participant",
    description:
      "Created a blockchain-based supply chain tracking system for agricultural products to ensure fair pricing for farmers.",
  },
  {
    name: "Hack The League",
    position: "Winner",
    description:
      "Built a real-time disaster management platform that coordinates emergency responses using geospatial data and predictive analytics.",
  },
  {
    name: "Hack on Block",
    position: "Runner-up",
    description:
      "Developed a decentralized identity verification system using blockchain technology to prevent identity theft and fraud.",
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-[#00e0ff]">Experience</span> & Achievements
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-3 text-[#00e0ff]" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover"
                >
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <h5 className="text-[#00e0ff] font-medium mb-2">{exp.company || exp.organization}</h5>

                  <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-[#1e293b] text-[#00e0ff] px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-3 text-[#00e0ff]" />
              Hackathons
            </h3>

            <div className="space-y-8">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121a2e] p-6 rounded-lg border border-[#1e293b] card-hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">{hackathon.name}</h4>
                    <span className="badge badge-pulse">{hackathon.position}</span>
                  </div>

                  <p className="text-gray-300">{hackathon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
