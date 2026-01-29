"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Start with a faster initial progress to improve perceived performance
    setProgress(30)

    // Use requestAnimationFrame for smoother progress animation
    let startTime: number
    let rafId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Complete in 2 seconds max
      const duration = 2000
      const newProgress = Math.min(30 + (elapsed / duration) * 70, 100)

      setProgress(newProgress)

      if (newProgress < 100) {
        rafId = requestAnimationFrame(animate)
      } else {
        // Ensure we show 100% for a moment before hiding
        setTimeout(() => setLoading(false), 200)
      }
    }

    rafId = requestAnimationFrame(animate)

    // Fallback timer in case animation frame doesn't complete
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
          aria-busy={loading}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="loading-logo"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="60" cy="60" r="58" stroke="#00e0ff" strokeWidth="4" />
              <path
                d="M40 40L80 80M80 40L40 80"
                stroke="#00e0ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="60" r="20" stroke="#00e0ff" strokeWidth="4" />
            </svg>
          </motion.div>

          <div
            className="loading-progress"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <motion.div className="loading-progress-bar" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>

          <div className="loading-text">
            {progress < 33 && "Initializing..."}
            {progress >= 33 && progress < 66 && "Loading assets..."}
            {progress >= 66 && progress < 100 && "Preparing interface..."}
            {progress >= 100 && "Ready!"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
