import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
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
import TeamHierarchy from './components/TeamHierarchy'
import Particles from './components/Particles'
import RegistrationCountdown from './components/RegistrationCountdown'
import MediaPartner from './components/MediaPartner'

const eventData = [
  {
    id: 1,
    title: "Apti Master",
    description: "Experience the future of aptitude testing with challenging rounds, competitions, and innovative problem-solving. Join us for an exciting journey into the world of logical reasoning.",
    type: "non-technical",
    coordinators: [
      { name: "Ms. Tanavi", contact: "9022573574" },
      { name: "Mr. Prathmesh", contact: "9370657289" }
    ]
  },
  {
    id: 2,
    title: "Mini Hackathon",
    description: "Dive into the world of coding with challenging hackathons, competitions, and workshops on the latest technologies in software development.",
    type: "technical",
    coordinators: [
      { name: "Mr. Pratik", contact: "8767354046" },
      { name: "Ms. Shruti", contact: "9421277748" }
    ]
  },
  {
    id: 3,
    title: "Group Discussion",
    description: "Showcase your communication skills and analytical thinking through engaging group discussions on contemporary topics.",
    type: "non-technical",
    coordinators: [
      { name: "Mr. Shreyas", contact: "7499321428" },
      { name: "Ms. Shreya", contact: "9356603103" }
    ]
  },
  {
    id: 4,
    title: "Innoprotex",
    description: "Present your innovative prototype ideas that address real-world challenges in this exciting competition for aspiring innovators.",
    type: "technical",
    coordinators: [
      { name: "Mr. Pranav", contact: "7058608709" },
      { name: "Ms. Sakashi", contact: "9604507650" }
    ]
  },
  {
    id: 5,
    title: "GAT Master",
    description: "A comprehensive General Aptitude Test designed to evaluate students' overall analytical and reasoning abilities across various domains.",
    type: "non-technical",
    coordinators: [
      { name: "Mr. Pruthviraj", contact: "8262968845" },
      { name: "Ms. Manasi", contact: "9421277748" }
    ]
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen overflow-x-hidden bg-slate-950 text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white'>
        {/* Particle Background - Full Page */}
        <div className='fixed inset-0 -z-20 w-full h-full'>
          <Particles
            particleColors={["#a855f7", "#ec4899", "#06b6d4", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={150}
            moveParticlesOnHover={true}
            particleHoverFactor={0.5}
            alphaParticles={true}
            disableRotation={false}
            pixelRatio={window.devicePixelRatio || 1}
          />
        </div>

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
                  <HeroSection />
                  <RegistrationCountdown />
                  <Divider />

                  {/* Technical Events Section */}
                  <div id="events-section" className="mb-16 scroll-mt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
                      <span className="relative inline-block">
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 blur-sm"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300">
                          Technical Events
                        </span>
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
                              coordinators={event.coordinators}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Non-Technical Events Section */}
                  <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
                      <span className="relative inline-block">
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 blur-sm"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300">
                          Non-Technical Events
                        </span>
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
                              coordinators={event.coordinators}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Team Hierarchy Section */}
                  <TeamHierarchy />

                  <Divider />

                  {/* Media Partner Section */}
                  <MediaPartner />

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

