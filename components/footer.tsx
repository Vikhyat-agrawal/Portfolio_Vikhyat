"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    // Create circuit lines and dots
    const footer = footerRef.current
    const footerWidth = footer.offsetWidth
    const footerHeight = footer.offsetHeight

    // Clear any existing circuit elements
    const existingCircuits = footer.querySelectorAll(".circuit-line, .circuit-dot, .circuit-pulse")
    existingCircuits.forEach((el) => el.remove())

    // Create horizontal lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("div")
      line.className = "circuit-line"
      line.style.height = "1px"
      line.style.width = `${Math.random() * 30 + 20}%`
      line.style.top = `${Math.random() * 70 + 15}%`
      line.style.left = `${Math.random() * 50}%`
      footer.appendChild(line)
    }

    // Create vertical lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("div")
      line.className = "circuit-line"
      line.style.width = "1px"
      line.style.height = `${Math.random() * 30 + 20}%`
      line.style.left = `${Math.random() * 70 + 15}%`
      line.style.top = `${Math.random() * 50}%`
      footer.appendChild(line)
    }

    // Create dots
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement("div")
      dot.className = "circuit-dot"
      dot.style.top = `${Math.random() * 80 + 10}%`
      dot.style.left = `${Math.random() * 80 + 10}%`
      footer.appendChild(dot)
    }

    // Create pulsing dots
    for (let i = 0; i < 3; i++) {
      const pulse = document.createElement("div")
      pulse.className = "circuit-pulse"
      pulse.style.top = `${Math.random() * 80 + 10}%`
      pulse.style.left = `${Math.random() * 80 + 10}%`
      footer.appendChild(pulse)
    }

    // Animation for circuit elements
    const dots = footer.querySelectorAll(".circuit-dot")
    dots.forEach((dot) => {
      setInterval(
        () => {
          dot.classList.toggle("opacity-50")
        },
        Math.random() * 2000 + 1000,
      )
    })
  }, [])

  return (
    <footer ref={footerRef} className="py-8 relative overflow-hidden circuit-footer">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-2">Vikhyat Agrawal</h2>
            <p className="text-gray-400">Web Developer & Prompt Engineer | AI Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <div className="flex space-x-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e0ff] transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e0ff] transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00e0ff] transition-colors duration-300"
              >
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.692 14.889c.161.12.361.18.561.18.502 0 .954-.383.997-.886l.968-11.554c.05-.591-.399-1.104-.991-1.104-.419 0-.803.256-.969.648l-5.368 12.795c-.092.219-.141.457-.141.696 0 1.102.894 1.996 1.996 1.996.888 0 1.691-.583 1.941-1.448l.894-2.22h1.111l-.999 1.897zm-2.74-3.889l2.02-4.82-.02 4.82h-2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-[#1e293b] text-center"
        >
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Vikhyat Agrawal. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
