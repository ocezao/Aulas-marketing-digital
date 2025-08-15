import { Star, Quote } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Badge } from '../ui/badge'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'E-commerce de Moda',
      avatar: 'MS',
      rating: 5,
      text: 'As aulas 1x1 com Cesar foram transformadoras! Ele adaptou cada estratégia para minha loja online e em 30 dias aumentei minhas vendas em 150%. O suporte personalizado fez toda a diferença.',
      result: '+150% em vendas',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'João Santos',
      role: 'Consultoria Empresarial',
      avatar: 'JS',
      rating: 5,
      text: 'Finalmente encontrei alguém que entende do meu nicho! Cesar me ensinou a usar IA para criar campanhas que realmente convertem. O ROI das minhas campanhas triplicou.',
      result: '3x ROI',
      bgGradient: 'from-green-500/10 to-green-600/5',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'Ana Costa',
      role: 'Infoprodutos',
      avatar: 'AC',
      rating: 5,
      text: 'A abordagem personalizada do Cesar é incrível. Ele analisou meu funil completo e me mostrou exatamente onde estava perdendo dinheiro. Agora sei como escalar de forma sustentável.',
      result: '+200% leads qualificados',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      borderColor: 'border-purple-500/20'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Serviços Locais',
      avatar: 'CO',
      rating: 5,
      text: 'Mesmo sendo um negócio local, Cesar me mostrou como usar o digital para crescer. As ferramentas gratuitas que ele ensinou me pouparam milhares em software pago.',
      result: '+80% clientes novos',
      bgGradient: 'from-orange-500/10 to-orange-600/5',
      borderColor: 'border-orange-500/20'
    },
    {
      name: 'Fernanda Lima',
      role: 'Agência de Marketing',
      avatar: 'FL',
      rating: 5,
      text: 'Como agência, precisávamos de estratégias avançadas. Cesar nos ensinou técnicas que nossos concorrentes não conhecem. Nossos clientes estão impressionados com os resultados.',
      result: '+300% retenção de clientes',
      bgGradient: 'from-pink-500/10 to-pink-600/5',
      borderColor: 'border-pink-500/20'
    },
    {
      name: 'Roberto Mendes',
      role: 'SaaS B2B',
      avatar: 'RM',
      rating: 5,
      text: 'O conhecimento técnico do Cesar é impressionante. Ele me ajudou a integrar IA no nosso processo de vendas e automatizar 70% das nossas tarefas de marketing.',
      result: '70% automação',
      bgGradient: 'from-[--brand]/10 to-[--brand-2]/5',
      borderColor: 'border-[--brand]/20'
    }
  ]

  return (
    <Section id="depoimentos" background="surface" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2 text-[--brand]" />
              Resultados Reais de Alunos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              Quem já fez as aulas 1x1 recomenda
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-3xl mx-auto">
              Veja os resultados que nossos alunos alcançaram com aulas personalizadas
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <HoverLift>
                <div className={`
                  relative bg-gradient-to-br ${testimonial.bgGradient} 
                  border ${testimonial.borderColor} rounded-xl p-6 h-full
                  backdrop-blur-sm
                `}>
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-[--text]" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[--brand] text-[--brand]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[--text] font-inter text-sm leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Result Badge */}
                  <div className="mb-4">
                    <Badge variant="default" className="bg-[--brand]/20 text-[--brand] border-[--brand]/30 text-xs">
                      {testimonial.result}
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 bg-[--surface] border border-[--muted]/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-[--text]">
                        {testimonial.avatar}
                      </span>
                    </div>
                    
                    {/* Info */}
                    <div>
                      <div className="text-sm font-semibold text-[--text] font-sora">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-[--muted]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.8}>
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-[--surface] to-[--panel] rounded-2xl border border-[--brand]/20">
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Seja o próximo caso de sucesso
            </h3>
            <p className="text-[--muted] font-inter mb-6">
              Agende sua aula 1x1 personalizada e comece a ver resultados reais
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('oferta')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[--brand] hover:bg-[--brand]/90 text-[--bg] px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Quero Meus Resultados Também
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}