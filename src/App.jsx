import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DisplayLine from './components/DisplayLine'
import Divider from './components/Divider'
import ExpoTechCard from './components/ExpoTechCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import EventDetails from './components/EventDetails'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import StatsSection from './components/StatsSection'
import FAQSection from './components/FAQSection'
import FloatingRegistrationButton from './components/FloatingRegistrationButton'

const eventData = [
  {
    id: 1,
    title: "Apti Master",
    description: "Experience the future of aptitude testing with challenging rounds, competitions, and innovative problem-solving. Join us for an exciting journey into the world of logical reasoning.",
    type: "technical"
  },
  {
    id: 2,
    title: "Mini Hackathon",
    description: "Dive into the world of coding with challenging hackathons, competitions, and workshops on the latest technologies in software development.",
    type: "technical"
  },
  {
    id: 3,
    title: "Group Discussion",
    description: "Showcase your communication skills and analytical thinking through engaging group discussions on contemporary topics.",
    type: "non-technical"
  },
  {
    id: 4,
    title: "Innoprotex",
    description: "Present your innovative prototype ideas that address real-world challenges in this exciting competition for aspiring innovators.",
    type: "technical"
  },
  {
    id: 5,
    title: "GAT Master",
    description: "A comprehensive General Aptitude Test designed to evaluate students' overall analytical and reasoning abilities across various domains.",
    type: "technical"
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen overflow-x-hidden bg-slate-950 text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white'>
        {/* Enhanced Background with Particles */}
        <ParticleBackground />

        {/* Grid pattern background */}
        <div className='fixed inset-0 -z-10'>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className='w-full'>
          <Navbar />
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <Routes>
              <Route path="/" element={
                <div className="py-8">
                  <DisplayLine />
                  <Divider />

                  {/* Technical Events Section */}
                  <div id="events-section" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Technical Events
                      </span>
                    </h2>
                    <div className="flex flex-wrap justify-center">
                      {eventData
                        .filter(event => event.type === "technical")
                        .map((event, index) => (
                          <div key={event.id} className={`animate-fade-in-up stagger-${index + 1}`}>
                            <ExpoTechCard
                              id={event.id}
                              title={event.title}
                              description={event.description}
                              type={event.type}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Non-Technical Events Section */}
                  <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        Non-Technical Events
                      </span>
                    </h2>
                    <div className="flex flex-wrap justify-center">
                      {eventData
                        .filter(event => event.type === "non-technical")
                        .map((event, index) => (
                          <div key={event.id} className={`animate-fade-in-up stagger-${index + 1}`}>
                            <ExpoTechCard
                              id={event.id}
                              title={event.title}
                              description={event.description}
                              type={event.type}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <FAQSection />
                </div>
              } />
              <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>

        {/* Floating Registration Button */}
        <FloatingRegistrationButton />
      </div>
    </Router>
  )
}

export default App

