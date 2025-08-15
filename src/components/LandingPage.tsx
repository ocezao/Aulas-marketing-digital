import { Header } from './Header'
import { HeroSection } from './sections/HeroSection'
import { StorytellingSection } from './sections/StorytellingSection'
import { InstructorSection } from './sections/InstructorSection'
import { LearningContentSection } from './sections/LearningContentSection'
import { PremiumResourcesSection } from './sections/PremiumResourcesSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { OfferSection } from './sections/OfferSection'
import { FAQSection } from './sections/FAQSection'
import { Footer } from './Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[--bg] text-[--text]">
      <Header />
      
      <main>
        <HeroSection />
        <StorytellingSection />
        <InstructorSection />
        <LearningContentSection />
        <PremiumResourcesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <OfferSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}