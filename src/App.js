import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Profile from './components/Profile';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow/>
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
