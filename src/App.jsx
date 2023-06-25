import './App.css';
import AdditionalTech from './components/AdditionalTech';
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
    </div>
  );
}

export default App;
