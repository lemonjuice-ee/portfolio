import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundTriangles from './components/BackgroundTriangles'; // ← import this
import Services from './components/Services';
import Projects from './components/Projects';
import Profile from './components/Profile';



function App() {
  return (
    <>
      <BackgroundTriangles /> {/* ← render it here once at top-level */}
      <Header />
      <main>
        <Hero />
       <Services/>
       <Projects/>
       <Profile/>
      </main>
    </>
  );
}

export default App;
