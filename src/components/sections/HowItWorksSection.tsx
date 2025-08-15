import { Play, BookOpen, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Play,
      title: 'Acesso Imediato',
      subtitle: 'Comece Agora Mesmo',
      description: 'Após a confirmação do pagamento, você recebe acesso instantâneo à plataforma com todos os módulos liberados. Sem espera, sem burocracia.',
      details: [
        'Login e senha enviados por e-mail',
        'Acesso à plataforma exclusiva',
        'Todos os 12 módulos disponíveis',
        'Bônus liberados automaticamente'
      ],
      duration: 'Imediato',
      bgColor: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      number: '02',
      icon: BookOpen,
      title: 'Aprendizado Estruturado',
      subtitle: 'Siga o Método Passo a Passo',
      description: 'Estude no seu ritmo seguindo nossa sequência otimizada. Cada módulo foi pensado para construir conhecimento de forma progressiva e prática.',
      details: [
        'Sequência lógica de aprendizado',
        'Aulas práticas e objetivas',
        'Exercícios para fixação',
        'Material de apoio incluso'
      ],
      duration: '30-60 dias',
      bgColor: 'from-green-500/10 to-green-600/5',
      borderColor: 'border-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      number: '03',
      icon: Users,
      title: 'Suporte e Mentoria',
      subtitle: 'Nunca Estude Sozinho',
      description: 'Tire suas dúvidas diretamente comigo e com a comunidade. Receba feedback personalizado e acelere seu aprendizado com orientação especializada.',
      details: [
        'Suporte direto por 90 dias',
        'Comunidade ativa de alunos',
        'Feedback personalizado',
        'Lives de esclarecimento'
      ],
      duration: '90 dias',
      bgColor: 'from-purple-500/10 to-purple-600/5',
      borderColor: 'border-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Resultados Reais',
      subtitle: 'Implemente e Lucre',
      description: 'Aplique as estratégias no seu negócio e veja os resultados aparecerem. Com o método correto, os primeiros resultados surgem rapidamente.',
      details: [
        'Implementação guiada',
        'Resultados em 30-60 dias',
        'Acompanhamento de métricas',
        'Otimização contínua'
      ],
      duration: 'Vitalício',
      bgColor: 'from-[--brand]/10 to-[--brand-2]/5',
      borderColor: 'border-[--brand]/20',
      iconColor: 'text-[--brand]'
    }
  ]

  return (
    <Section id="como-funciona" background="surface" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              Como Funciona o Método
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-3xl mx-auto">
              Um processo simples e eficaz que já transformou milhares de empresários em especialistas em marketing digital
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-[--brand]/50 to-transparent" />
                )}
                
                <HoverLift>
                  <div className={`
                    relative bg-gradient-to-br ${step.bgColor} 
                    border ${step.borderColor} rounded-2xl p-8
                    backdrop-blur-sm
                  `}>
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      {/* Step Number & Icon */}
                      <div className="md:col-span-2">
                        <div className="flex flex-col items-center space-y-4">
                          {/* Number */}
                          <div className={`
                            w-16 h-16 rounded-full border-2 ${step.borderColor} 
                            bg-[--surface] flex items-center justify-center
                          `}>
                            <span className={`text-2xl font-bold font-sora ${step.iconColor}`}>
                              {step.number}
                            </span>
                          </div>
                          
                          {/* Icon */}
                          <div className={`p-3 bg-[--surface] border ${step.borderColor} rounded-lg`}>
                            <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-7">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold font-sora text-[--text] mb-2">
                            {step.title}
                          </h3>
                          <p className={`text-lg font-semibold mb-3 ${step.iconColor}`}>
                            {step.subtitle}
                          </p>
                          <p className="text-[--muted] font-inter leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Details */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${step.iconColor.replace('text-', 'bg-')}`} />
                              <span className="text-sm text-[--text] font-inter">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="md:col-span-3">
                        <div className="text-center md:text-right">
                          <div className={`
                            inline-block px-4 py-2 rounded-full border ${step.borderColor}
                            bg-[--surface] mb-3
                          `}>
                            <span className={`text-sm font-semibold ${step.iconColor}`}>
                              {step.duration}
                            </span>
                          </div>
                          
                          {index < steps.length - 1 && (
                            <div className="hidden md:flex justify-end">
                              <ArrowRight className={`w-5 h-5 ${step.iconColor}`} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[--panel] to-[--surface] rounded-2xl border border-[--brand]/20">
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Pronto Para Começar Sua Transformação?
            </h3>
            <p className="text-[--muted] font-inter mb-6 max-w-2xl mx-auto">
              Mais de 2.800 empresários já seguiram este método e transformaram seus negócios. 
              Agora é a sua vez de fazer parte deste grupo seleto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('oferta')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-[--brand] hover:bg-[--brand]/90 text-[--bg] px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center space-x-2"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('faq')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-[--brand] hover:text-[--brand-2] transition-colors font-semibold"
              >
                Ainda tenho dúvidas
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}