import './App.scss';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

import { Nav } from './nav';
import NavProvider from './context/NavContext';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
{/* 
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/interests" element={<Interests/>} />
      </Routes>       */}

      
		<div className='appContainer'>
			<NavProvider>
				<Nav />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Interests />

      </NavProvider>
    </div>
          
      <Footer />

    </div>
  );
}

export default App;

