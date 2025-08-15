import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { prefersReducedMotion } from "@/lib/utils"

interface ParallaxLayerProps {
  children: React.ReactNode
  from?: number
  to?: number
  className?: string
}

export function ParallaxLayer({ 
  children, 
  from = -30, 
  to = 30,
  className 
}: ParallaxLayerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  })
  const y = useTransform(scrollYProgress, [0, 1], [from, to])
  const reducedMotion = prefersReducedMotion()

  if (reducedMotion) {
    return (
      <div ref={ref} className={`relative ${className || ''}`}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative will-change-transform transform-gpu ${className || ''}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}