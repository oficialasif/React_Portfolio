import './App.css';
import About from './sections/About/About';
import Navbar from './components/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills/>
      <About />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
