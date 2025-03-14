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
    title: "Robo Tech",
    description: "Experience the future of robotics with hands-on workshops, competitions, and innovative demonstrations. Join us for an exciting journey into the world of automation and AI.",
  },
  {
    id: 2,
    title: "Code Craft",
    description: "Dive into the world of programming with challenging hackathons, coding competitions, and workshops on the latest technologies in software development.",
  },
  {
    id: 3,
    title: "IoT World",
    description: "Explore the Internet of Things through interactive displays, smart device demonstrations, and workshops on connecting the physical world to the digital realm.",
  },
  {
    id: 4,
    title: "AI Summit",
    description: "Discover the power of Artificial Intelligence with machine learning workshops, AI demonstrations, and discussions about the future of intelligent systems.",
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
                  <div id="events-section" className="flex flex-wrap justify-center pt-8">
                    {eventData.map((event, index) => (
                      <div key={event.id} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                        <ExpoTechCard
                          id={event.id}
                          title={event.title}
                          description={event.description}
                        />
                      </div>
                    ))}
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


