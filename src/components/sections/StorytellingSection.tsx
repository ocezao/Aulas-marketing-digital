import { TrendingDown, TrendingUp, ArrowRight } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function StorytellingSection() {
  const stories = [
    {
      type: 'before',
      icon: TrendingDown,
      title: 'ANTES',
      subtitle: 'Aprendizado Genérico e Sem Foco',
      description: 'Você consome cursos online, assiste vídeos no YouTube e lê artigos, mas nada se aplica ao seu negócio específico. O conhecimento fica superficial e você não sabe por onde começar.',
      points: [
        'Conteúdo genérico que não se aplica ao seu nicho',
        'Dúvidas que ficam sem resposta',
        'Falta de direcionamento personalizado',
        'Tempo perdido com informações irrelevantes'
      ],
      bgColor: 'from-red-500/10 to-red-600/5',
      borderColor: 'border-red-500/20',
      iconColor: 'text-red-400'
    },
    {
      type: 'after',
      icon: TrendingUp,
      title: 'DEPOIS',
      subtitle: 'Aprendizado Personalizado e Aplicável',
      description: 'Com aulas 1x1 personalizadas, você aprende exatamente o que precisa para seu negócio. Cada estratégia é adaptada à sua realidade, com foco total nos seus objetivos específicos.',
      points: [
        'Estratégias adaptadas ao seu negócio específico',
        'Dúvidas esclarecidas em tempo real',
        'Plano de ação personalizado e prático',
        'Aprendizado acelerado e direcionado'
      ],
      bgColor: 'from-green-500/10 to-green-600/5',
      borderColor: 'border-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      type: 'bridge',
      icon: ArrowRight,
      title: 'A PONTE',
      subtitle: 'Aulas 1x1 que Transformam Conhecimento em Resultados',
      description: 'As aulas particulares com Cesar Machado são a ponte entre o conhecimento teórico e a aplicação prática. Atenção exclusiva, conteúdo personalizado e resultados mensuráveis.',
      points: [
        'Formato 1x1 com atenção exclusiva',
        'Conteúdo adaptado ao seu nível e negócio',
        'Flexibilidade total de horários',
        'Acompanhamento direto do especialista'
      ],
      bgColor: 'from-[--brand]/10 to-[--brand-2]/5',
      borderColor: 'border-[--brand]/20',
      iconColor: 'text-[--brand]'
    }
  ]

  return (
    <Section background="surface" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              A Jornada de Transformação
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-2xl mx-auto">
              Descubra como milhares de empresários saíram da frustração e alcançaram o sucesso
            </p>
          </div>
        </ScrollReveal>

        {/* Story Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <ScrollReveal key={story.type} delay={index * 0.1}>
              <HoverLift>
                <div className={`
                  relative h-full p-8 rounded-2xl border backdrop-blur-sm
                  bg-gradient-to-br ${story.bgColor} ${story.borderColor}
                `}>
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`
                      p-4 rounded-full bg-[--surface] border ${story.borderColor}
                    `}>
                      <story.icon className={`w-8 h-8 ${story.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <div className={`
                      inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
                      ${story.type === 'before' ? 'bg-red-500/20 text-red-400' : 
                        story.type === 'after' ? 'bg-green-500/20 text-green-400' : 
                        'bg-[--brand]/20 text-[--brand]'}
                    `}>
                      {story.title}
                    </div>
                    <h3 className="text-xl font-bold font-sora text-[--text] mb-3">
                      {story.subtitle}
                    </h3>
                    <p className="text-[--muted] font-inter leading-relaxed mb-6">
                      {story.description}
                    </p>
                  </div>

                  {/* Points */}
                  <div className="space-y-3">
                    {story.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start space-x-3">
                        <div className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${story.type === 'before' ? 'bg-red-400' : 
                            story.type === 'after' ? 'bg-green-400' : 
                            'bg-[--brand]'}
                        `} />
                        <span className="text-sm text-[--text] font-inter">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Connector Arrow (only for first two cards on desktop) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="bg-[--surface] border border-[--muted]/20 rounded-full p-2">
                        <ArrowRight className="w-4 h-4 text-[--brand]" />
                      </div>
                    </div>
                  )}
                </div>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-lg text-[--muted] font-inter mb-6">
              Não deixe que mais um ano passe sem os resultados que você merece
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('oferta')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center space-x-2 text-[--brand] hover:text-[--brand-2] transition-colors font-semibold"
            >
              <span>Quero fazer essa transformação</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}