import { useState, useEffect } from 'react'
import { Clock, Users, CheckCircle, Star, Shield, CreditCard } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Progress } from '../ui/progress'
import { ScrollReveal } from '../effects/ScrollReveal'
import { HoverLift } from '../effects/HoverLift'

export function OfferSection() {
  const [spotsLeft, setSpotsLeft] = useState(24)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate spots decreasing
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 5 && Math.random() < 0.3) {
          return prev - 1
        }
        return prev
      })
    }, 45000) // Every 45 seconds

    return () => clearInterval(spotsTimer)
  }, [])

  const progressPercentage = ((100 - spotsLeft) / 100) * 100

  return (
    <Section id="oferta" background="panel" className="relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Oferta por tempo limitado
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
                Aulas 1x1 ao Vivo com Cesar Machado
              </h2>
              <p className="text-lg text-[--muted] font-inter">
                Escolha sua aula ou economize 40% com o pacote completo
              </p>
            </div>
          </ScrollReveal>

          {/* Countdown Timer */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[--surface] rounded-2xl p-6 mb-8 border border-[--muted]/10">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-[--text] font-sora mb-2">
                  Esta oferta expira em:
                </h3>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="bg-[--brand] text-[--bg] rounded-lg px-3 py-2 font-bold text-2xl font-mono">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[--muted] mt-1">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[--brand] text-[--bg] rounded-lg px-3 py-2 font-bold text-2xl font-mono">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[--muted] mt-1">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[--brand] text-[--bg] rounded-lg px-3 py-2 font-bold text-2xl font-mono">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[--muted] mt-1">SEG</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Spots Progress */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[--surface] rounded-2xl p-6 mb-8 border border-[--muted]/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[--brand]" />
                  <span className="font-semibold text-[--text]">Vagas Limitadas</span>
                </div>
                <span className="text-sm text-[--muted]">
                  {spotsLeft} vagas restantes na agenda
                </span>
              </div>
              <Progress value={progressPercentage} className="mb-2" />
              <p className="text-xs text-[--muted] text-center">
                {100 - spotsLeft} pessoas já agendaram suas aulas
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Individual Class */}
            <ScrollReveal delay={0.3}>
              <div className="bg-gradient-to-br from-[--surface] to-[--panel] rounded-2xl p-6 border border-[--muted]/20 relative">
                <div className="text-center">
                  <h3 className="text-xl font-bold font-sora text-[--text] mb-4">
                    Aula Individual
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[--brand] font-sora">
                      R$ 79,90
                    </div>
                    <p className="text-[--muted] text-sm mt-1">por aula de 1h30</p>
                  </div>

                  <div className="space-y-3 mb-6 text-left">
                    {[
                      'Aula ao vivo 1x1 via Google Meet/Zoom',
                      'Duração: 1h30 de conteúdo personalizado',
                      'Escolha: Marketing, Tráfego ou IA',
                      'Material de apoio incluído',
                      'Gravação da aula disponível'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-[--text] font-inter text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <HoverLift>
                    <Button 
                      variant="secondary" 
                      className="w-full font-semibold"
                    >
                      Reservar Aula Individual
                    </Button>
                  </HoverLift>
                </div>
              </div>
            </ScrollReveal>

            {/* Package Deal */}
            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-[--surface] to-[--panel] rounded-2xl p-6 border border-[--brand]/20 relative">
                {/* Popular Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-[--brand] text-[--bg] px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    ECONOMIZE 40%
                  </Badge>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold font-sora text-[--text] mb-4">
                    Pacote Completo
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-xl text-[--muted] line-through">R$ 239,70</span>
                      <Badge variant="destructive" className="text-xs">40% OFF</Badge>
                    </div>
                    <div className="text-4xl font-bold text-[--brand] font-sora">
                      R$ 159,90
                    </div>
                    <p className="text-[--muted] text-sm mt-1">3 aulas completas</p>
                  </div>

                  <div className="space-y-3 mb-6 text-left">
                    {[
                      '3 aulas ao vivo 1x1 (4h30 total)',
                      'Marketing Digital + Tráfego + IA',
                      'Sem prazo de conclusão',
                      'Agende no seu ritmo',
                      'Todos os materiais incluídos',
                      'Gravações de todas as aulas'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-[--text] font-inter text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <HoverLift>
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="w-full text-lg py-4 font-bold mb-4"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      GARANTIR PACOTE COMPLETO
                    </Button>
                  </HoverLift>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Security Badges */}
          <ScrollReveal delay={0.5}>
            <div className="flex items-center justify-center space-x-6 text-sm text-[--muted] bg-[--surface] rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Satisfação Garantida</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Urgency Message */}
          <ScrollReveal delay={0.6}>
            <div className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">!</div>
                <span className="text-orange-400 font-semibold">VAGAS LIMITADAS: Agenda restrita!</span>
              </div>
              <p className="text-[--muted] text-sm">
                Devido ao formato 1x1 personalizado, aceito apenas um número limitado de alunos por mês.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}