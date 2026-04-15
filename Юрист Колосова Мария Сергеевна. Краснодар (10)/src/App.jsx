import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Guarantees } from "./sections/Guarantees";
import { Services } from "./sections/Services";
import { Reviews } from "./sections/Reviews";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Guarantees />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 
