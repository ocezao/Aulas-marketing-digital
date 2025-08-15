import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utilities
export const animations = {
  spring: {
    type: "spring",
    stiffness: 220,
    damping: 24,
  },
  easeOut: {
    duration: 0.6,
    ease: "easeOut",
  },
  micro: {
    duration: 0.2,
    ease: "easeOut",
  },
} as const

// Reduced motion check
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Generate random number in range
export const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}