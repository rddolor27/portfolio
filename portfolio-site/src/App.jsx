import Navigationbar from './components/Navigationbar.jsx';
import ParticlesBg from './assets/Particles.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import data from './data/projectData.js';

import { AppStateProvider } from './providers/AppStateProvider.jsx';

function App() {
  return (
    <AppStateProvider>
      <ParticlesBg />
      <Navigationbar />
      <div className="bg-background/85 backdrop-blur-[2px] sm:mx-auto sm:max-w-screen-xl sm:px-12 sm:pb-24">
        <About />
        <Experience />
        <Skills />
        <Projects project={data} />
        <Contact />
      </div>
    </AppStateProvider>
  );
}

export default App;
