"use client"

import { useEffect, useState, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const trailsRef = useRef<{ x: number; y: number; opacity: number }[]>([])
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailElementsRef = useRef<HTMLDivElement[]>([])
  const isMobile = useMobile()

  // Skip custom cursor on mobile devices
  // if (isMobile) return null // Removed conditional return

  useEffect(() => {
    if (isMobile || typeof window === "undefined") return // Early return if mobile or no window

    // Create trail elements once
    trailsRef.current = Array(10)
      .fill(null)
      .map(() => ({ x: 0, y: 0, opacity: 0 }))
    trailElementsRef.current = trailsRef.current.map((_, i) => {
      const div = document.createElement("div")
      div.className = "cursor-trail"
      div.style.opacity = "0"
      document.body.appendChild(div)
      return div
    })

    let lastUpdateTime = 0
    let rafId: number

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)

      // Throttle trail updates for performance
      const now = performance.now()
      if (now - lastUpdateTime > 50) {
        lastUpdateTime = now

        // Update trails
        trailsRef.current.unshift({
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
        })
        trailsRef.current = trailsRef.current.slice(0, 10)

        // Update DOM directly for better performance
        trailsRef.current.forEach((trail, i) => {
          if (trailElementsRef.current[i]) {
            const el = trailElementsRef.current[i]
            el.style.left = `${trail.x}px`
            el.style.top = `${trail.y}px`
            el.style.opacity = `${trail.opacity}`
            el.style.width = `${8 + (1 - trail.opacity) * 5}px`
            el.style.height = `${8 + (1 - trail.opacity) * 5}px`
          }
        })
      }
    }

    const updateCursorDown = () => {
      setClicked(true)
    }

    const updateCursorUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll("a, button, [role=button]")

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true))
        link.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    // Fade out trails
    const fadeTrails = () => {
      trailsRef.current = trailsRef.current.map((trail) => ({
        ...trail,
        opacity: Math.max(0, trail.opacity - 0.05),
      }))

      trailsRef.current.forEach((trail, i) => {
        if (trailElementsRef.current[i]) {
          const el = trailElementsRef.current[i]
          el.style.opacity = `${trail.opacity}`
        }
      })

      rafId = requestAnimationFrame(fadeTrails)
    }

    document.addEventListener("mousemove", updateCursorPosition, { passive: true })
    document.addEventListener("mousedown", updateCursorDown)
    document.addEventListener("mouseup", updateCursorUp)
    document.addEventListener("mouseenter", () => setHidden(false))
    document.addEventListener("mouseleave", () => setHidden(true))

    // Set up link hover detection after a short delay to ensure DOM is ready
    setTimeout(handleLinkHoverEvents, 1000)

    // Start animation loop
    fadeTrails()

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousedown", updateCursorDown)
      document.removeEventListener("mouseup", updateCursorUp)
      document.removeEventListener("mouseenter", () => setHidden(false))
      document.removeEventListener("mouseleave", () => setHidden(true))
      cancelAnimationFrame(rafId)

      // Clean up trail elements
      trailElementsRef.current.forEach((el) => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el)
        }
      })
    }
  }, [isMobile]) // Added isMobile to dependency array

  // Update main cursor directly for better performance
  useEffect(() => {
    if (isMobile || !cursorRef.current) return // Early return if mobile or no cursor

    const cursor = cursorRef.current
    cursor.style.left = `${position.x}px`
    cursor.style.top = `${position.y}px`
    cursor.style.opacity = hidden ? "0" : "1"
    cursor.style.width = clicked ? "15px" : linkHovered ? "30px" : "20px"
    cursor.style.height = clicked ? "15px" : linkHovered ? "30px" : "20px"
    cursor.style.backgroundColor = linkHovered ? "rgba(0, 224, 255, 0.3)" : "rgba(0, 224, 255, 0.5)"
    cursor.style.border = linkHovered ? "2px solid rgba(0, 224, 255, 0.8)" : "none"
  }, [position, hidden, clicked, linkHovered, isMobile]) // Added isMobile to dependency array

  if (isMobile) return null // Render nothing if it's a mobile device

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
