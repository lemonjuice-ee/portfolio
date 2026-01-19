import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Profile from './components/Profile';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Profile />
      </main>
    </div>
  );
}

export default App;
