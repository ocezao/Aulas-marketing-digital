import { 
  Target, 
  TrendingUp, 
  Zap
} from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function LearningContentSection() {
  const classes = [
    {
      icon: Target,
      title: 'Marketing Digital',
      price: 'R$ 79,90',
      duration: '1h 30min',
      description: 'Fundamentos completos do marketing digital aplicado ao seu negócio.',
      topics: [
        'Definição de persona e público-alvo',
        'Criação de ofertas irresistíveis',
        'Copywriting com fórmula AIDA',
        'Construção de funis de vendas',
        'Cálculo e otimização de ROI básico'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Tráfego Pago',
      price: 'R$ 79,90',
      duration: '1h 30min',
      description: 'Domine Meta Ads e Google Ads para gerar resultados consistentes.',
      topics: [
        'Criação e configuração de campanhas',
        'Instalação e configuração de pixel',
        'Segmentação avançada de audiências',
        'Criação de criativos que convertem',
        'Otimização e análise de performance'
      ]
    },
    {
      icon: Zap,
      title: 'Inteligência Artificial',
      price: 'R$ 79,90',
      duration: '1h 30min',
      description: 'Ferramentas de IA para potencializar seus resultados em marketing.',
      topics: [
        'Prompt design para marketing',
        'Automação de criação de anúncios',
        'Análise de dados com IA',
        'Chatbots e atendimento automatizado',
        'Ferramentas de IA para copywriting'
      ]
    }
  ]

  const totalHours = 4.5 // 3 aulas de 1h30 cada
  const totalClasses = 3

  return (
    <Section id="conteudo" background="default" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-3xl mx-auto mb-8">
              Três aulas práticas e personalizadas para dominar as principais áreas do marketing digital
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[--brand] font-sora">
                  {totalHours}h
                </div>
                <div className="text-sm text-[--muted]">de aulas ao vivo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[--brand] font-sora">
                  {totalClasses}
                </div>
                <div className="text-sm text-[--muted]">aulas disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[--brand] font-sora">
                  1x1
                </div>
                <div className="text-sm text-[--muted]">formato personalizado</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <HoverLift>
                <div className="bg-[--panel] border border-[--muted]/10 rounded-xl p-6 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[--brand]/10 rounded-lg">
                      <classItem.icon className="w-6 h-6 text-[--brand]" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[--brand] font-sora">
                        {classItem.price}
                      </div>
                      <div className="text-xs text-[--muted]">
                        {classItem.duration}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-sora text-[--text] mb-2">
                      {classItem.title}
                    </h3>
                    <p className="text-[--muted] font-inter text-sm leading-relaxed mb-4">
                      {classItem.description}
                    </p>
                  </div>

                  {/* Topics List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[--text] mb-3">O que você vai aprender:</h4>
                    <ul className="space-y-2">
                      {classItem.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[--brand] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[--muted] font-inter text-sm leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note for beginners */}
                  <div className="mt-4 pt-4 border-t border-[--muted]/10">
                    <p className="text-xs text-[--muted] italic">
                      Indicado para iniciantes ou quem tem noções básicas
                    </p>
                  </div>
                </div>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12 p-8 bg-[--surface] rounded-2xl border border-[--muted]/10">
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Aulas Avulsas ou Pacote Completo
            </h3>
            <p className="text-[--muted] font-inter mb-6">
              Escolha uma aula específica por R$ 79,90 ou economize 40% com o pacote de 3 aulas por R$ 159,90
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('oferta')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center justify-center bg-[--brand] hover:bg-[--brand]/90 text-[--bg] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Reservar Aula - R$ 79,90</span>
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('oferta')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center justify-center bg-[--brand-2] hover:bg-[--brand-2]/90 text-[--bg] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Pacote 3 Aulas - R$ 159,90</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}