"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useMobile } from "@/hooks/use-mobile"

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (!containerRef.current) return

    // Reduce particle count on mobile for better performance
    const particlesCount = isMobile ? 800 : 2000

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup with optimizations
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // Disable antialiasing on mobile
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()

    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100
      posArray[i + 1] = (Math.random() - 0.5) * 100
      posArray[i + 2] = (Math.random() - 0.5) * 100

      // Scale (for visual variety)
      scaleArray[i / 3] = Math.random() * 2
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x00e0ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    // Points
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Lines between particles - only on desktop for performance
    let linesMesh: THREE.LineSegments | null = null

    if (!isMobile) {
      const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x00e0ff,
        transparent: true,
        opacity: 0.2,
      })

      const linesGeometry = new THREE.BufferGeometry()
      const linesPositions = new Float32Array(particlesCount * 6) // 2 points per line, 3 values per point
      linesGeometry.setAttribute("position", new THREE.BufferAttribute(linesPositions, 3))

      linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
      scene.add(linesMesh)
    }

    // Mouse interaction
    const mouse = new THREE.Vector2()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    // Animation loop
    const clock = new THREE.Clock()
    let frameId: number

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.03

      // Update particle positions based on mouse
      const positions = particlesGeometry.attributes.position.array as Float32Array
      const scales = particlesGeometry.attributes.scale.array as Float32Array

      // Optimize by updating only a subset of particles each frame
      const updateCount = isMobile ? 100 : 200
      const startIndex = Math.floor(Math.random() * (particlesCount - updateCount))

      for (let i = startIndex; i < startIndex + updateCount; i++) {
        const ix = i * 3

        // Subtle movement
        positions[ix] += Math.sin(elapsedTime + i) * 0.01
        positions[ix + 1] += Math.cos(elapsedTime + i) * 0.01

        // Mouse influence - only if mouse has moved
        if (mouse.x !== 0 || mouse.y !== 0) {
          const x = positions[ix]
          const y = positions[ix + 1]
          const mouseDistance = Math.sqrt(Math.pow(x / 50 - mouse.x, 2) + Math.pow(y / 50 - mouse.y, 2))

          if (mouseDistance < 0.2) {
            positions[ix] += (mouse.x - x / 50) * 0.1
            positions[ix + 1] += (mouse.y - y / 50) * 0.1
            scales[i] = Math.min(scales[i] + 0.01, 3)
          } else {
            scales[i] = Math.max(scales[i] - 0.01, 0.5)
          }
        }
      }

      // Connect nearby particles - only on desktop
      if (!isMobile && linesMesh) {
        // Update lines less frequently for performance
        if (Math.floor(elapsedTime * 10) % 2 === 0) {
          let lineIndex = 0
          const linePositions = linesMesh.geometry.attributes.position.array as Float32Array

          // Only check a subset of particles for connections
          const checkCount = 200
          const startParticle = Math.floor(Math.random() * (particlesCount - checkCount))

          for (let i = startParticle; i < startParticle + checkCount; i++) {
            const ix = i * 3

            for (let j = i + 1; j < particlesCount; j++) {
              const jx = j * 3
              const distance = Math.sqrt(
                Math.pow(positions[ix] - positions[jx], 2) +
                  Math.pow(positions[ix + 1] - positions[jx + 1], 2) +
                  Math.pow(positions[ix + 2] - positions[jx + 2], 2),
              )

              if (distance < 5 && lineIndex < linePositions.length - 6) {
                linePositions[lineIndex++] = positions[ix]
                linePositions[lineIndex++] = positions[ix + 1]
                linePositions[lineIndex++] = positions[ix + 2]
                linePositions[lineIndex++] = positions[jx]
                linePositions[lineIndex++] = positions[jx + 1]
                linePositions[lineIndex++] = positions[jx + 2]
              }
            }
          }

          // Fill remaining line positions with invisible lines
          while (lineIndex < linePositions.length) {
            linePositions[lineIndex++] = 0
          }

          linesMesh.geometry.attributes.position.needsUpdate = true
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true
      particlesGeometry.attributes.scale.needsUpdate = true

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    // Start animation after a short delay to allow page to load
    const timeoutId = setTimeout(() => {
      setIsReady(true)
      animate()
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(frameId)

      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      // Dispose of Three.js resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      if (linesMesh) {
        linesMesh.geometry.dispose()
        ;(linesMesh.material as THREE.Material).dispose()
      }
      renderer.dispose()
    }
  }, [isMobile])

  return (
    <div
      ref={containerRef}
      className={`three-canvas ${isReady ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    />
  )
}
