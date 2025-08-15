import { motion } from "framer-motion"
import { prefersReducedMotion } from "@/lib/utils"

interface LoopDecoProps {
  children?: React.ReactNode
  duration?: number
  className?: string
  type?: 'float' | 'rotate' | 'pulse'
}

export function LoopDeco({ 
  children, 
  duration = 4,
  className,
  type = 'float'
}: LoopDecoProps) {
  const reducedMotion = prefersReducedMotion()

  if (reducedMotion) {
    return (
      <div className={className}>
        {children || (
          <div className="absolute -right-16 top-12 h-40 w-40 bg-[--brand-2] opacity-20 rounded-full" />
        )}
      </div>
    )
  }

  const animations = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className={className}
      animate={animations[type]}
    >
      {children || (
        <div className="absolute -right-16 top-12 h-40 w-40 bg-[--brand-2] opacity-20 rounded-full" />
      )}
    </motion.div>
  )
}