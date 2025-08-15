import { User, Award, TrendingUp, Code } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Badge } from '../ui/badge'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function InstructorSection() {
  return (
    <Section id="instrutor" background="panel" className="relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <ScrollReveal>
            <div className="space-y-6">
              {/* Badge */}
              <Badge variant="outline" className="px-3 py-1 text-sm w-fit">
                <Award className="w-4 h-4 mr-2 text-[--brand]" />
                +4 anos em tráfego pago
              </Badge>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text]">
                Eu sou <span className="text-[--brand]">Cesar Machado</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-[--muted] font-inter leading-relaxed">
                Gestor de tráfego há mais de 4 anos, desenvolvedor de aplicações web com Vibe Coding & IA. 
                Trago experiência prática em múltiplos nichos, desde e-commerce até infoprodutos.
              </p>

              <p className="text-[--muted] font-inter leading-relaxed">
                Minha abordagem é 100% prática e personalizada. Nas aulas 1x1, adapto o conteúdo 
                ao seu negócio específico, garantindo que você saia com estratégias prontas para implementar.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--brand] font-sora">4+</div>
                  <div className="text-sm text-[--muted]">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--brand] font-sora">50+</div>
                  <div className="text-sm text-[--muted]">Projetos realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[--brand] font-sora">100%</div>
                  <div className="text-sm text-[--muted]">Personalizado</div>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[--text] font-sora">Áreas de Especialização:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Meta Ads',
                    'Google Ads',
                    'Copywriting',
                    'Funis de Vendas',
                    'IA para Marketing',
                    'Desenvolvimento Web',
                    'Automações'
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Visual */}
          <ScrollReveal delay={0.2}>
            <HoverLift>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-[--surface] to-[--panel] rounded-2xl p-8 border border-[--brand]/20 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-[--brand] rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-[--brand-2] rounded-full opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[--brand] to-[--brand-2] rounded-full flex items-center justify-center mx-auto mb-6">
                      <User className="w-12 h-12 text-white" />
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold font-sora text-[--text] mb-2">
                      Cesar Machado
                    </h3>

                    {/* Title */}
                    <p className="text-[--brand] font-semibold mb-4">
                      Gestor de Tráfego & Desenvolvedor
                    </p>

                    {/* Quick Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2 text-sm text-[--muted]">
                        <TrendingUp className="w-4 h-4 text-[--brand]" />
                        <span>Especialista em Meta Ads & Google Ads</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-[--muted]">
                        <Code className="w-4 h-4 text-[--brand]" />
                        <span>Desenvolvedor Full-Stack</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-6 p-4 bg-[--bg]/50 rounded-lg border border-[--muted]/10">
                      <p className="text-sm text-[--muted] italic leading-relaxed">
                        "Meu objetivo é que você saia da aula com estratégias prontas 
                        para implementar no seu negócio hoje mesmo."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </HoverLift>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}