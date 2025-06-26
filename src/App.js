import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundTriangles from './components/BackgroundTriangles';
import Services from './components/Services';
import Projects from './components/Projects';
import Profile from './components/Profile';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <BackgroundTriangles />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Profile />
      </main>
    </div>
  );
}

export default App;
