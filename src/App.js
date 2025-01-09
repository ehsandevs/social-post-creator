import { Routes, Route } from 'react-router-dom';
import './App.css';
import InstagramPost from './Pages/Instagram';

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
      <Route path="/instagram" element={<InstagramPost />} />
    </Routes>
  );
}

export default App;
