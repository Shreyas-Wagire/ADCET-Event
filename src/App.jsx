import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DisplayLine from './components/DisplayLine'
import Divider from './components/Divider'
import ExpoTechCard from './components/ExpoTechCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import EventDetails from './components/EventDetails'
import ScrollToTop from './components/ScrollToTop'

const eventData = [
  {
    id: 1,
    title: "Apti-Master",
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
    title: "BGMI",
    description: "Experience the thrill of competitive mobile gaming in this action-packed BGMI tournament.",
    type: "non-technical"
  },
  {
    id: 6,
    title: "Box Cricket",
    description: "Experience cricket in a unique format with special rules and exciting gameplay in a compact arena.",
    type: "non-technical"
  },
  {
    id: 7,
    title: "Treasure Hunt",
    description: "An exciting treasure hunt that combines problem-solving, teamwork, and adventure across the campus.",
    type: "non-technical"
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen overflow-x-hidden bg-slate-950 text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white'>
        {/* Background with grid pattern */}
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
                  <div id="events-section" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-center mb-8">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Technical Events
                      </span>
                    </h2>
                    <div className="flex flex-wrap justify-center">
                      {eventData
                        .filter(event => event.type === "technical")
                        .map((event, index) => (
                          <div key={event.id} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
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
                  <div>
                    <h2 className="text-2xl font-bold text-center mb-8">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        Non-Technical Events
                      </span>
                    </h2>
                    <div className="flex flex-wrap justify-center">
                      {eventData
                        .filter(event => event.type === "non-technical")
                        .map((event, index) => (
                          <div key={event.id} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
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
                </div>
              } />
              <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App


