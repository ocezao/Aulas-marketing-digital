import { Heart, Shield, Mail, Phone, MapPin } from 'lucide-react'
import { Container } from './ui/container'
import { Section } from './ui/section'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Section background="panel" className="border-t border-[--muted]/10">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-sora text-[--text] mb-4">
              Marketing<span className="text-[--brand]">Pro</span>
            </h3>
            <p className="text-[--muted] font-inter leading-relaxed mb-6 max-w-md">
              Transformando empresários em especialistas em marketing digital através de métodos comprovados e resultados garantidos.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm text-[--muted]">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>2.800+ Alunos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-sora text-[--text] mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Conteúdo do Curso', href: '#conteudo' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Perguntas Frequentes', href: '#faq' },
                { label: 'Garantir Vaga', href: '#oferta' }
              ].map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.href.replace('#', ''))
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-[--muted] hover:text-[--brand] transition-colors font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-sora text-[--text] mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@marketingpro.com.br"
                  className="flex items-center space-x-2 text-[--muted] hover:text-[--brand] transition-colors font-inter"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@marketingpro.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[--muted] hover:text-[--brand] transition-colors font-inter"
                >
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-[--muted] font-inter">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[--muted]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[--muted] font-inter text-sm">
              © {currentYear} MarketingPro. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-[--muted]">
              <button className="hover:text-[--brand] transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-[--brand] transition-colors">
                Termos de Uso
              </button>
              <button className="hover:text-[--brand] transition-colors">
                Política de Reembolso
              </button>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-6 p-4 bg-[--surface] rounded-lg border border-[--muted]/10">
            <p className="text-xs text-[--muted] font-inter leading-relaxed text-center">
              <strong>Aviso Legal:</strong> Os resultados apresentados não são garantidos e podem variar de pessoa para pessoa. 
              O sucesso depende de diversos fatores, incluindo dedicação, aplicação das estratégias e características do mercado. 
              Este produto é destinado apenas para fins educacionais.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}