import { HeroSection } from './components/HeroSection'
import { KPIStrip } from './components/KPIStrip'
import { Timeline } from './components/Timeline'
import { SkillsSection } from './components/SkillsSection'
import { TransformationCharts } from './components/TransformationCharts'
import { HistorySection } from './components/HistorySection'
import { CTASection, Footer } from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <KPIStrip />
      <Timeline />
      <SkillsSection />
      <TransformationCharts />
      <HistorySection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
