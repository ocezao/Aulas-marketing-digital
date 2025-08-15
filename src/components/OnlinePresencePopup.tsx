import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OnlinePresencePopupProps {
  className?: string
}

export function OnlinePresencePopup({ className }: OnlinePresencePopupProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [interestedCount, setInterestedCount] = useState(32)

  useEffect(() => {
    // Update interested count every 12-20 seconds
    const updateInterval = setInterval(() => {
      const randomDelay = Math.random() * 8000 + 12000 // 12-20 seconds
      setTimeout(() => {
        setInterestedCount(() => {
          // Generate random number between 10-60
          return Math.floor(Math.random() * 51) + 10
        })
      }, randomDelay)
    }, 20000)

    // Handle ESC key to close
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      clearInterval(updateInterval)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'fixed bottom-6 left-6 z-50 max-w-sm',
            className
          )}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="bg-[--panel] border border-[--muted]/20 rounded-xl p-4 shadow-elevated backdrop-blur-custom">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Users className="w-6 h-6 text-[--brand]" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <div 
                    className="text-2xl font-bold text-[--text] font-sora"
                    aria-live="polite"
                  >
                    {interestedCount}
                  </div>
                  <p className="text-xs text-[--muted] font-inter">
                    pessoas interessadas
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-[--muted] hover:text-[--text] transition-colors p-1"
                aria-label="Fechar popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}