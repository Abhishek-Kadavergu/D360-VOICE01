import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

import VideoSection from "./components/VideoSection";

const Home = () => (
  <>
    <Hero />
    {/* <VideoSection /> */}
    <About />
    <Features />
    <Story />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
