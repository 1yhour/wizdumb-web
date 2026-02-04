import Body from "./section/Body";
import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import About from "./section/About";
import PricingSection from "./section/Pricing";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
export const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Body />
        <About />
        <PricingSection />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
};
export default App;
