"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import heavy components
export const ThreeBackgroundClient = dynamic(() => import("@/components/three-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0b0f1a]"></div>,
})

export const CustomCursorClient = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
})

export function DynamicComponents() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-[#0b0f1a]"></div>}>
        <ThreeBackgroundClient />
      </Suspense>
      <Suspense fallback={null}>
        <CustomCursorClient />
      </Suspense>
    </>
  )
}
