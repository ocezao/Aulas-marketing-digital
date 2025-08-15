import { HelpCircle, MessageCircle } from 'lucide-react'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { ScrollReveal } from '../effects/ScrollReveal'

export function FAQSection() {
  const faqs = [
    {
      question: 'Como funcionam as aulas 1x1 ao vivo?',
      answer: 'As aulas são realizadas via Google Meet ou Zoom, com duração de 1h30 cada. É um formato 100% personalizado onde adapto o conteúdo ao seu negócio específico. Você agenda no seu horário disponível e recebe atenção exclusiva durante toda a aula.'
    },
    {
      question: 'Preciso ter conhecimento prévio em marketing digital?',
      answer: 'Não! As aulas são adaptadas ao seu nível de conhecimento. Se você é iniciante, começamos do básico. Se já tem experiência, focamos em estratégias avançadas e otimizações. O formato 1x1 permite essa personalização total.'
    },
    {
      question: 'Qual a diferença entre aula individual e pacote?',
      answer: 'A aula individual custa R$ 79,90 e você escolhe um tema (Marketing Digital, Tráfego Pago ou IA). O pacote completo por R$ 159,90 inclui as 3 aulas (economiza 40%) e você pode agendar no seu ritmo, sem prazo para conclusão.'
    },
    {
      question: 'Posso agendar as aulas quando quiser?',
      answer: 'Sim! Não há prazo fixo de conclusão. Você agenda conforme sua disponibilidade e ritmo de aprendizado. Algumas pessoas fazem todas as aulas em uma semana, outras preferem espaçar por meses. A flexibilidade é total.'
    },
    {
      question: 'As aulas são gravadas?',
      answer: 'Sim! Todas as aulas são gravadas e você recebe acesso às gravações. Assim pode revisar o conteúdo quantas vezes quiser e não perde nada caso tenha algum imprevisto durante a aula ao vivo.'
    },
    {
      question: 'E se eu não conseguir implementar o que foi ensinado?',
      answer: 'Durante a aula, criamos um plano de ação específico para seu negócio. Além disso, você pode agendar aulas adicionais para tirar dúvidas de implementação. O objetivo é que você saia com estratégias prontas para aplicar.'
    },
    {
      question: 'O método funciona para qualquer tipo de negócio?',
      answer: 'Sim! Tenho experiência em múltiplos nichos: e-commerce, serviços, consultoria, infoprodutos, etc. Durante a aula, adapto as estratégias especificamente para seu segmento e realidade de negócio.'
    },
    {
      question: 'Vou aprender sobre ferramentas de IA para marketing?',
      answer: 'Sim! A aula de IA para Marketing cobre prompt design, automação de anúncios, análise de dados com IA, chatbots e ferramentas de copywriting. Você aprende a usar IA para potencializar seus resultados.'
    },
    {
      question: 'Preciso investir em ferramentas caras?',
      answer: 'Não! Ensino estratégias que funcionam com ferramentas gratuitas ou de baixo custo. Durante a aula, mostro exatamente quais ferramentas uso e como aplicá-las no seu negócio, priorizando sempre o ROI.'
    },
    {
      question: 'Por que as vagas são limitadas?',
      answer: 'Devido ao formato 1x1 personalizado, aceito apenas um número limitado de alunos por mês para garantir qualidade e atenção individual. Cada aula exige preparação específica para o negócio do aluno.'
    }
  ]

  return (
    <Section id="faq" background="default" className="relative">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[--brand]/10 rounded-lg">
                <HelpCircle className="w-8 h-8 text-[--brand]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[--text] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-[--muted] font-inter max-w-3xl mx-auto">
              Tire todas as suas dúvidas antes de começar sua jornada de transformação
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-[--panel] border border-[--muted]/10 rounded-xl px-6 py-2 data-[state=open]:border-[--brand]/20"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-[--text] font-sora pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-[--muted] font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>

        {/* Still Have Questions */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center p-8 bg-[--surface] rounded-2xl border border-[--muted]/10">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[--brand]/10 rounded-lg">
                <MessageCircle className="w-6 h-6 text-[--brand]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-[--muted] font-inter mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar! Entre em contato conosco e teremos prazer em esclarecer qualquer questão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('oferta')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-[--brand] hover:bg-[--brand]/90 text-[--bg] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Garantir Minha Vaga Agora
              </button>
              
              <a 
                href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre o curso de Marketing Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[--brand] hover:text-[--brand-2] transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}