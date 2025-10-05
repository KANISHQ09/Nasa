import { Navigation } from "./components/Navbar";
import { MainContent } from "./components/main-content";
import FeaturedNewsPage from "./components/feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AiAgentPage from "./components/ai-agent"; // NOTE: Will change import to named export
import AboutDocumentation from "./components/about"; // NOTE: Will change import to named export
import MissionsExperiments from "./components/misson"; // NOTE: Will change import to named export
import Resources from "./components/resource"; // NOTE: Will change import to named export
import KnowledgeGraphInsightsPage from "./components/graph"; // NOTE: Will change import to named export

// New component for the home page structure
function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Fixed Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Bar */}
      <Navigation />

      {/* Page Content */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
        {/* Background "SPACE" text outline */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 pointer-events-none">
          <h1
            className="text-[20rem] font-bold tracking-wider"
            style={{ color: "white" }}
          >
            SPACE
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center h-full">
          {/* Hero Heading */}
          <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-8 leading-none">
            GO BEYOND
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            Space is the boundless three-dimensional extent in which objects and
            events have relative position.
          </p>
        </div>
      </section>

      <MainContent />
      <FeaturedNewsPage />
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* The component imported here is the Index component, renamed and exported from ai-agent.tsx */}
        <Route path="/spaceai" element={<AiAgentPage />} />
        {/* You may want to add a proper 404 page here, like a simplified version of the NotFound from ai-agent.tsx */}
        <Route path="/about" element={<AboutDocumentation />} />
        <Route path="/missions" element={<MissionsExperiments />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/graph" element={<KnowledgeGraphInsightsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;