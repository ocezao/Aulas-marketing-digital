import { 
  FileText, 
  Users, 
  Calendar, 
  Headphones, 
  Award, 
  Zap 
} from 'lucide-react'
import { Badge } from '../ui/badge'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function PremiumResourcesSection() {
  const bonuses = [
    {
      icon: FileText,
      title: 'Ferramentas Gratuitas',
      subtitle: 'Setup Completo de IA',
      value: 'R$ 197',
      description: 'Cesar vai te mostrar como configurar e usar as melhores ferramentas gratuitas de IA para marketing, incluindo ChatGPT, Claude, Canva IA e muito mais.',
      features: [
        'ChatGPT para copywriting',
        'Claude para estratégias',
        'Canva IA para designs',
        'Ferramentas de automação'
      ],
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Análise de Concorrentes',
      subtitle: 'Espionagem Estratégica',
      value: 'R$ 97',
      description: 'Aprenda a usar ferramentas gratuitas para analisar seus concorrentes, descobrir suas estratégias e identificar oportunidades no seu nicho.',
      features: [
        'Facebook Ad Library',
        'SimilarWeb gratuito',
        'Google Trends',
        'Análise de redes sociais'
      ],
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      borderColor: 'border-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Calendar,
      title: 'Automação Gratuita',
      subtitle: 'Produtividade Máxima',
      value: 'R$ 67',
      description: 'Descubra como automatizar suas tarefas de marketing usando ferramentas gratuitas como Zapier, IFTTT e integrações nativas.',
      features: [
        'Zapier para automações',
        'Google Workspace integrado',
        'Automação de posts',
        'Fluxos de e-mail'
      ],
      bgGradient: 'from-green-500/10 to-green-600/5',
      borderColor: 'border-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Headphones,
      title: 'Suporte Personalizado',
      subtitle: 'Implementação Garantida',
      value: 'R$ 297',
      description: 'Após cada aula, você terá suporte direto com Cesar para implementar o que aprendeu e tirar dúvidas específicas do seu negócio.',
      features: [
        'Suporte via WhatsApp',
        'Implementação assistida',
        'Feedback personalizado',
        'Ajustes específicos'
      ],
      bgGradient: 'from-orange-500/10 to-orange-600/5',
      borderColor: 'border-orange-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: Award,
      title: 'Gravação das Aulas',
      subtitle: 'Acesso Vitalício',
      value: 'R$ 47',
      description: 'Todas as suas aulas 1x1 são gravadas e você tem acesso vitalício para revisar o conteúdo personalizado sempre que precisar.',
      features: [
        'Gravações em HD',
        'Acesso vitalício',
        'Download permitido',
        'Conteúdo personalizado'
      ],
      bgGradient: 'from-yellow-500/10 to-yellow-600/5',
      borderColor: 'border-yellow-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Zap,
      title: 'Métricas e Analytics',
      subtitle: 'Resultados Mensuráveis',
      value: 'R$ 197',
      description: 'Aprenda a configurar e interpretar métricas usando Google Analytics, Facebook Insights e outras ferramentas gratuitas de monitoramento.',
      features: [
        'Google Analytics 4',
        'Facebook Insights',
        'Instagram Analytics',
        'Relatórios automatizados'
      ],
      bgGradient: 'from-[--brand]/10 to-[--brand-2]/5',
      borderColor: 'border-[--brand]/20',
      iconColor: 'text-[--brand]'
    }
  ]

  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace('R$ ', ''))
  }, 0)

  return (
    <Section background="panel" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Ferramentas e Suporte Incluídos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              O que Cesar vai te Ensinar
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-3xl mx-auto mb-8">
              Além das aulas personalizadas, você aprenderá a usar ferramentas profissionais sem custo adicional
            </p>
            
            {/* Total Value */}
            <div className="inline-flex items-center space-x-4 bg-[--surface] border border-[--brand]/20 rounded-xl px-6 py-3">
              <span className="text-[--muted] font-inter">Valor das ferramentas:</span>
              <span className="text-2xl font-bold text-[--brand] font-sora">R$ {totalValue}</span>
              <Badge variant="destructive" className="text-xs">INCLUÍDO</Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <HoverLift>
                <div className={`
                  relative bg-gradient-to-br ${bonus.bgGradient} 
                  border ${bonus.borderColor} rounded-xl p-6 h-full
                  backdrop-blur-sm
                `}>
                  {/* Value Badge */}
                  <div className="absolute -top-3 -right-3">
                    <Badge variant="default" className="bg-[--brand] text-[--bg] px-3 py-1 text-xs font-bold">
                      {bonus.value}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-[--surface] border ${bonus.borderColor} rounded-lg`}>
                      <bonus.icon className={`w-8 h-8 ${bonus.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold font-sora text-[--text] mb-2">
                      {bonus.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${bonus.iconColor}`}>
                      {bonus.subtitle}
                    </p>
                    <p className="text-[--muted] font-inter text-sm leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {bonus.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${bonus.iconColor.replace('text-', 'bg-')}`} />
                        <span className="text-xs text-[--text] font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Included Badge */}
                  <div className="mt-4 pt-4 border-t border-[--muted]/10">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-400 font-semibold">INCLUÍDO GRÁTIS</span>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Summary */}
        <ScrollReveal delay={0.7}>
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-[--surface] to-[--panel] rounded-2xl border border-[--brand]/20">
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Aulas 1x1 + Todas as Ferramentas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-[--surface] rounded-lg border border-[--muted]/20">
                <h4 className="text-lg font-semibold text-[--text] mb-2">Aula Avulsa</h4>
                <div className="text-3xl font-bold text-[--brand] font-sora">R$ 79,90</div>
                <p className="text-sm text-[--muted] mt-2">1 aula de 1h30 + ferramentas</p>
              </div>
              <div className="p-4 bg-[--surface] rounded-lg border border-[--brand]/20 relative">
                <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs">MAIS POPULAR</Badge>
                <h4 className="text-lg font-semibold text-[--text] mb-2">Pacote Completo</h4>
                <div className="text-3xl font-bold text-[--brand] font-sora">R$ 159,90</div>
                <p className="text-sm text-[--muted] mt-2">3 aulas + ferramentas + suporte</p>
              </div>
            </div>
            <p className="text-[--muted] font-inter mb-6">
              Todas as ferramentas e suporte estão incluídos sem custo adicional
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
              Agendar Minha Aula Agora
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}