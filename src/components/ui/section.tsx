import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'panel' | 'surface'
}

export function Section({ 
  children, 
  className, 
  id,
  background = 'default'
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-[--bg]',
    panel: 'bg-[--panel]',
    surface: 'bg-[--surface]'
  }

  return (
    <section 
      id={id}
      className={cn(
        'relative section-padding',
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
}