import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;