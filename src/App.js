import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundTriangles from './components/BackgroundTriangles'; // ← import this

function App() {
  return (
    <>
      <BackgroundTriangles /> {/* ← render it here once at top-level */}
      <Header />
      <main>
        <Hero />
        {/* Other sections like About, Projects, etc. */}
      </main>
    </>
  );
}

export default App;
