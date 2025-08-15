import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Container } from '../components/ui/container'
import { Section } from '../components/ui/section'
import { ScrollReveal } from '../components/effects/ScrollReveal'
import { ParallaxLayer } from '../components/effects/ParallaxLayer'
import { HoverLift } from '../components/effects/HoverLift'
import { LoopDeco } from '../components/effects/LoopDeco'
import { Star, Users, CheckCircle } from 'lucide-react'

export function PlaygroundPage() {
  return (
    <div id="playground-page" className="min-h-screen bg-[--bg] text-[--text]">
      {/* Header */}
      <Section id="playground-header" background="panel">
        <Container id="playground-header-container">
          <div id="playground-header-content" className="text-center py-12">
            <h1 id="playground-title" className="text-4xl font-bold font-sora text-[--text] mb-4">
              NoirLux v1 Design System
            </h1>
            <p id="playground-subtitle" className="text-[--muted] font-inter">
              Demonstração de todos os componentes e efeitos
            </p>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section id="playground-buttons">
        <Container id="playground-buttons-container">
          <ScrollReveal>
            <div id="playground-buttons-content">
              <h2 id="buttons-title" className="text-2xl font-semibold font-sora mb-6">Buttons</h2>
              <div id="buttons-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Button id="btn-primary" variant="primary">Primary</Button>
                <Button id="btn-secondary" variant="secondary">Secondary</Button>
                <Button id="btn-ghost" variant="ghost">Ghost</Button>
                <Button id="btn-link" variant="link">Link</Button>
              </div>
              <div id="buttons-sizes" className="flex flex-wrap gap-4">
                <Button id="btn-sm" size="sm">Small</Button>
                <Button id="btn-default" size="default">Default</Button>
                <Button id="btn-lg" size="lg">Large</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Cards */}
      <Section id="playground-cards" background="panel">
        <Container id="playground-cards-container">
          <ScrollReveal>
            <div id="playground-cards-content">
              <h2 id="cards-title" className="text-2xl font-semibold font-sora mb-6">Cards</h2>
              <div id="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HoverLift>
                  <Card id="card-1">
                    <CardHeader id="card-1-header">
                      <CardTitle id="card-1-title">Card Title</CardTitle>
                      <CardDescription id="card-1-desc">Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent id="card-1-content">
                      <p id="card-1-text" className="text-[--muted] font-inter">This is a sample card content.</p>
                    </CardContent>
                  </Card>
                </HoverLift>
                
                <HoverLift>
                  <Card id="card-2">
                    <CardHeader id="card-2-header">
                      <CardTitle id="card-2-title">Another Card</CardTitle>
                      <CardDescription id="card-2-desc">With different content</CardDescription>
                    </CardHeader>
                    <CardContent id="card-2-content">
                      <div id="card-2-stats" className="flex items-center space-x-4">
                        <div id="card-2-stat-1" className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-[--brand]" />
                          <span className="text-sm">4.9</span>
                        </div>
                        <div id="card-2-stat-2" className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-[--brand]" />
                          <span className="text-sm">2.8k</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
                
                <HoverLift>
                  <Card id="card-3">
                    <CardHeader id="card-3-header">
                      <CardTitle id="card-3-title">Third Card</CardTitle>
                      <CardDescription id="card-3-desc">With badges</CardDescription>
                    </CardHeader>
                    <CardContent id="card-3-content">
                      <div id="card-3-badges" className="flex flex-wrap gap-2">
                        <Badge id="badge-default" variant="default">Default</Badge>
                        <Badge id="badge-secondary" variant="secondary">Secondary</Badge>
                        <Badge id="badge-success" variant="success">Success</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Effects Demo */}
      <Section id="playground-effects">
        <Container id="playground-effects-container">
          <div id="playground-effects-content">
            <h2 id="effects-title" className="text-2xl font-semibold font-sora mb-6 text-center">Effects Demo</h2>
            
            {/* Parallax Demo */}
            <div id="parallax-demo" className="relative h-96 mb-12 overflow-hidden rounded-xl">
              <ParallaxLayer from={-30} to={30}>
                <div id="parallax-bg" className="absolute inset-0 bg-gradient-to-r from-[--brand]/20 to-[--brand-2]/20" />
              </ParallaxLayer>
              
              <ParallaxLayer from={20} to={-20}>
                <div id="parallax-shape" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-[--brand] rounded-full opacity-30 blur-xl" />
                </div>
              </ParallaxLayer>
              
              <div id="parallax-content" className="relative z-10 h-full flex items-center justify-center">
                <ScrollReveal>
                  <div id="parallax-text" className="text-center">
                    <h3 className="text-3xl font-bold font-sora mb-4">Parallax Effect</h3>
                    <p className="text-[--muted] font-inter">Scroll to see the parallax layers in action</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            {/* Hover Lift Demo */}
            <ScrollReveal>
              <div id="hover-demo" className="text-center mb-12">
                <h3 id="hover-title" className="text-xl font-semibold font-sora mb-6">Hover Lift Effect</h3>
                <div id="hover-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <HoverLift key={i}>
                      <div id={`hover-item-${i}`} className="p-6 bg-[--surface] rounded-xl border border-[--muted]/10">
                        <CheckCircle className="w-8 h-8 text-[--brand] mx-auto mb-3" />
                        <p className="text-sm font-inter">Hover me {i}</p>
                      </div>
                    </HoverLift>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            {/* Loop Decoration */}
            <div id="loop-demo" className="relative">
              <LoopDeco />
              <ScrollReveal>
                <div id="loop-content" className="text-center py-12">
                  <h3 id="loop-title" className="text-xl font-semibold font-sora mb-4">Loop Decoration</h3>
                  <p id="loop-text" className="text-[--muted] font-inter">Subtle looping animation in the background</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section id="playground-typography" background="panel">
        <Container id="playground-typography-container">
          <ScrollReveal>
            <div id="playground-typography-content">
              <h2 id="typography-title" className="text-2xl font-semibold font-sora mb-6">Typography</h2>
              <div id="typography-grid" className="grid md:grid-cols-2 gap-8">
                <div id="typography-headings">
                  <h3 className="text-lg font-semibold font-sora mb-4">Headings (Sora)</h3>
                  <h1 className="text-4xl font-bold font-sora mb-2">Heading 1</h1>
                  <h2 className="text-3xl font-semibold font-sora mb-2">Heading 2</h2>
                  <h3 className="text-2xl font-medium font-sora mb-2">Heading 3</h3>
                  <h4 className="text-xl font-medium font-sora">Heading 4</h4>
                </div>
                <div id="typography-body">
                  <h3 className="text-lg font-semibold font-sora mb-4">Body Text (Inter)</h3>
                  <p className="font-inter mb-4 leading-relaxed">
                    This is regular body text using Inter font. It's designed for optimal readability 
                    and works great for longer content blocks.
                  </p>
                  <p className="font-inter text-[--muted] text-sm">
                    This is smaller muted text, perfect for captions and secondary information.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Color Tokens */}
      <Section id="playground-colors">
        <Container id="playground-colors-container">
          <ScrollReveal>
            <div id="playground-colors-content">
              <h2 id="colors-title" className="text-2xl font-semibold font-sora mb-6">Color Tokens</h2>
              <div id="colors-grid" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div id="color-bg" className="text-center">
                  <div className="w-16 h-16 bg-[--bg] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--bg</p>
                </div>
                <div id="color-panel" className="text-center">
                  <div className="w-16 h-16 bg-[--panel] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--panel</p>
                </div>
                <div id="color-surface" className="text-center">
                  <div className="w-16 h-16 bg-[--surface] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--surface</p>
                </div>
                <div id="color-text" className="text-center">
                  <div className="w-16 h-16 bg-[--text] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--text</p>
                </div>
                <div id="color-muted" className="text-center">
                  <div className="w-16 h-16 bg-[--muted] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--muted</p>
                </div>
                <div id="color-brand" className="text-center">
                  <div className="w-16 h-16 bg-[--brand] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--brand</p>
                </div>
                <div id="color-brand-2" className="text-center">
                  <div className="w-16 h-16 bg-[--brand-2] border border-[--muted]/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-xs font-inter">--brand-2</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  )
}