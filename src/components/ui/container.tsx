import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
  id?: string
}

export function Container({ children, className, size = 'default', id }: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-[1200px]',
    lg: 'max-w-7xl'
  }

  return (
    <div 
      id={id}
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}