import About from "./components/About";
import BecomeSpeaker from "./components/BecomeSpeaker";
import Home from "./components/Home";
import PriceSection from "./components/PriceSection";
import Schedules from "./components/Schedules";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
function App() {
  return (
    <div className="font-serif tracking-wider">
      <Navbar />
      <Home />
      <About />
      <Speakers />
      <Schedules />
      <BecomeSpeaker />
      <PriceSection />
      <Venue />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
