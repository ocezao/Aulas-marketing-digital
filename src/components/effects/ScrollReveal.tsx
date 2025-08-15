import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { prefersReducedMotion } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  y = 24, 
  duration = 0.6,
  className 
}: ScrollRevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reducedMotion = prefersReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration, 
        ease: "easeOut", 
        delay 
      }}
    >
      {children}
    </motion.div>
  )
}