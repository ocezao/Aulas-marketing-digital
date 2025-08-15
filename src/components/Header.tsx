import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Container } from './ui/container'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-[--bg]/80 backdrop-blur-custom border-b border-[--muted]/10 shadow-soft' 
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold font-sora text-[--text]">
              Marketing<span className="text-[--brand]">Pro</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('conteudo')}
              className="text-[--muted] hover:text-[--text] transition-colors font-inter"
            >
              Conteúdo
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-[--muted] hover:text-[--text] transition-colors font-inter"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-[--muted] hover:text-[--text] transition-colors font-inter"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('oferta')}
            variant="primary"
            size="sm"
            className="font-semibold"
          >
            Garantir minha vaga
          </Button>
        </div>
      </Container>
    </motion.header>
  )
}