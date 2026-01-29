"use client"

import { useState, useRef, useEffect } from "react"

interface UseTiltOptions {
  max?: number
  perspective?: number
  scale?: number
  speed?: number
  easing?: string
}

export function useTilt(options: UseTiltOptions = {}) {
  const { max = 15, perspective = 1000, scale = 1.05, speed = 500, easing = "cubic-bezier(.03,.98,.52,.99)" } = options

  const tiltRef = useRef<HTMLDivElement>(null)
  const [tiltValues, setTiltValues] = useState({ tiltX: 0, tiltY: 0, percentX: 0, percentY: 0 })

  useEffect(() => {
    if (!tiltRef.current) return

    const element = tiltRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      // Calculate mouse position relative to the element
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate percentage position
      const percentX = Math.min(Math.max(x / width, 0), 1)
      const percentY = Math.min(Math.max(y / height, 0), 1)

      // Calculate tilt values
      const tiltX = percentY * max * 2 - max
      const tiltY = percentX * max * 2 - max

      setTiltValues({
        tiltX,
        tiltY,
        percentX,
        percentY,
      })
    }

    const handleMouseEnter = () => {
      element.style.transition = `transform ${speed}ms ${easing}`
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(${scale}, ${scale}, ${scale})`
    }

    const handleMouseLeave = () => {
      element.style.transition = `transform ${speed}ms ${easing}`
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`

      // Reset tilt values
      setTiltValues({ tiltX: 0, tiltY: 0, percentX: 0, percentY: 0 })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [max, perspective, scale, speed, easing])

  return { tiltRef, tiltValues }
}
