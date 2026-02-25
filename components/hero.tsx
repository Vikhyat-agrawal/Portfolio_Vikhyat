"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Phone, Mail, Github, Linkedin, TextIcon as Telegram, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTilt } from "@/hooks/use-tilt"
import { useMobile } from "@/hooks/use-mobile"
import Magnetic from "@/components/ui/magnetic"

export default function Hero() {
  const controls = useAnimation()
  const imageRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const { tiltRef, tiltValues } = useTilt({ max: isMobile ? 5 : 10 })
  const [typedText, setTypedText] = useState("")
  const fullText = "Web Developer | Prompt Engineer"

  const typingSpeed = 100

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    })

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [controls, fullText])

  const imageStyle = {
    transform: `perspective(1000px) rotateX(${tiltValues.tiltY}deg) rotateY(${-tiltValues.tiltX}deg)`,
    transition: "transform 0.1s ease",
  }

  return (
    <section id="hero" className="min-h-screen flex items-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[#121a2e] border border-[#1e293b]">
              <span className="w-3 h-3 rounded-full bg-[#00e0ff] mr-2 badge-pulse"></span>
              <span className="text-sm text-gray-300">Available for freelance work</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 glow-text"
          >
            Vikhyat Agrawal
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-white"
          >
            Web Developer & Prompt Engineer
          </motion.h2>

          {/* Fixed height container for typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-8 mb-6"
          >
            <h2 className="text-xl md:text-2xl text-[#38bdf8] whitespace-normal md:whitespace-nowrap">
              Building modern, scalable, and AI-powered web experiences
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg mb-8 text-gray-300 max-w-xl"
          >
            I’m a passionate web developer focused on creating high-performance, responsive, and user-centric web applications. I love transforming ideas into digital products that are both visually appealing and functionally powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="/resume.pdf" download aria-label="Download Resume" className="inline-block">
              <Magnetic>
                <Button className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black font-medium btn-glow">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Magnetic>
            </a>
            <a href="#projects" aria-label="View Projects" className="inline-block">
              <Magnetic>
                <Button variant="outline" className="border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff]/10 btn-glow">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Magnetic>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-6"
          >
            <Magnetic>
              <a href="tel:+916398644252" aria-label="Phone" className="text-white hover:text-[#00e0ff] glow-on-hover">
                <Phone size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:vikhyatagrawal1410@gmail.com"
                aria-label="Email"
                className="text-white hover:text-[#00e0ff] glow-on-hover"
              >
                <Mail size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-[#00e0ff] glow-on-hover"
              >
                <Github size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-[#00e0ff] glow-on-hover"
              >
                <Linkedin size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-white hover:text-[#00e0ff] glow-on-hover"
              >
                <Telegram size={24} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          ref={tiltRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div ref={imageRef} style={imageStyle} className="tilt-card">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#00e0ff] glow-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikhyat.JPG-Acos4X0VfUHDZtr2AnMTWV1p6kQNpq.jpeg"
                alt="Vikhyat Agrawal - Web Developer and AI Enthusiast"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 300px, 400px"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f1a]/40 to-transparent"></div>

              {/* Animated border */}
              <div className="absolute inset-0 border-4 border-transparent rounded-full">
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-[#00e0ff] opacity-0 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
