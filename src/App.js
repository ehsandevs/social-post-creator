import { Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home Page</p>
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>About Page</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
