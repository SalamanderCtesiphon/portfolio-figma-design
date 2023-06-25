import './App.css';
import About from './components/About';
import AdditionalTech from './components/AdditionalTech';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Projects />
     <Tech />
     <AdditionalTech />
     <About />
     <Footer />
    </div>
  );
}

export default App;
