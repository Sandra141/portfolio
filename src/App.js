import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
