import { motion } from 'framer-motion'
import { Star, Users, Clock, CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ScrollReveal } from '../effects/ScrollReveal'
import { ParallaxLayer } from '../effects/ParallaxLayer'
import { HoverLift } from '../effects/HoverLift'
import { LoopDeco } from '../effects/LoopDeco'

export function HeroSection() {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Parallax Layers */}
      <ParallaxLayer from={-20} to={20}>
        <div id="hero-bg-gradient" className="absolute inset-0 bg-gradient-to-br from-[--panel] via-[--bg] to-[--surface]" />
      </ParallaxLayer>
      
      <ParallaxLayer from={-40} to={40}>
        <div id="hero-bg-shape-1" className="absolute -right-16 top-12 h-40 w-40 bg-[--brand-2] opacity-10 rounded-full blur-3xl" />
      </ParallaxLayer>
      
      <ParallaxLayer from={30} to={-30}>
        <div id="hero-bg-shape-2" className="absolute -left-20 bottom-20 h-60 w-60 bg-[--brand] opacity-5 rounded-full blur-3xl" />
      </ParallaxLayer>

      {/* Decorative Loop Element */}
      <LoopDeco />

      <Container id="hero-container" className="relative z-10">
        <div id="hero-content" className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal>
            <div id="hero-badge-wrapper" className="flex justify-center mb-6">
              <Badge id="hero-badge" variant="outline" className="px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-[--brand]" />
                Aulas ao vivo 1x1 com Cesar Machado
              </Badge>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-[--text] mb-6 leading-tight">
              Domine Marketing, Tráfego e IA com
              <span id="hero-headline-highlight" className="text-[--brand] block">
                aulas ao vivo 100% personalizadas
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.2}>
            <p id="hero-subtitle" className="text-lg md:text-xl text-[--muted] mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
              Do zero ao profissional no seu ritmo, com acompanhamento direto. 
              Aprenda Marketing Digital, Tráfego Pago e IA aplicada ao marketing.
            </p>
          </ScrollReveal>

          {/* Badges */}
          <ScrollReveal delay={0.3}>
            <div id="hero-badges" className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Users className="w-4 h-4 mr-2 text-[--brand]" />
                Ao vivo 1x1
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Clock className="w-4 h-4 mr-2 text-[--brand]" />
                Sem prazo de conclusão
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-[--brand]" />
                Pacote 3× por R$ 159,90
              </Badge>
            </div>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.4}>
            <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HoverLift>
                <Button 
                  id="hero-cta-primary"
                  onClick={scrollToOffer}
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4 font-semibold"
                >
                  Reservar aula a partir de R$ 79,90
                </Button>
              </HoverLift>
              
              <Button 
                id="hero-cta-secondary"
                onClick={() => {
                  const element = document.getElementById('conteudo')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                variant="ghost" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Ver pacotes
              </Button>
            </div>
          </ScrollReveal>

          {/* Urgency Badge */}
          <ScrollReveal delay={0.5}>
            <div id="hero-urgency-wrapper" className="mt-8 flex justify-center">
              <motion.div
                id="hero-urgency-badge"
                className="flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400 font-medium">
                  Vagas limitadas (agenda)
                </span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}