import { motion } from "framer-motion"
import { prefersReducedMotion } from "@/lib/utils"

interface HoverLiftProps {
  children: React.ReactNode
  y?: number
  className?: string
}

export function HoverLift({ 
  children, 
  y = -6,
  className 
}: HoverLiftProps) {
  const reducedMotion = prefersReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div 
      className={className}
      whileHover={{ 
        y, 
        boxShadow: "0 10px 30px rgba(0,0,0,.35)" 
      }} 
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}