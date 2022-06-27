import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Project from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Contact />
        <Project />
      </div>
    </div>
  );
}

export default App;
