import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Lenis from 'lenis'
import { LandingPage } from './components/LandingPage'
import { OnlinePresencePopup } from './components/OnlinePresencePopup'
import { PlaygroundPage } from './pages/playground'
import { Button } from './components/ui/button'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <OnlinePresencePopup />
          </>
        } />
        <Route path="/ui" element={
          <div id="ui-page" className="min-h-screen bg-[--bg] text-[--text] p-8">
            <div id="ui-nav" className="max-w-4xl mx-auto">
              <div id="ui-header" className="text-center mb-8">
                <h1 id="ui-title" className="text-4xl font-bold font-sora mb-4">UI Components</h1>
                <p id="ui-subtitle" className="text-[--muted] font-inter mb-6">Demonstração dos componentes do Design System NoirLux v1</p>
                <div id="ui-nav-buttons" className="flex gap-4 justify-center">
                  <Link to="/">
                    <Button variant="ghost">← Voltar para Landing</Button>
                  </Link>
                  <Link to="/playground">
                    <Button variant="primary">Ver Playground</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/playground" element={
          <>
            <div id="playground-nav" className="fixed top-4 left-4 z-50">
              <Link to="/">
                <Button variant="ghost" size="sm">← Home</Button>
              </Link>
            </div>
            <PlaygroundPage />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App