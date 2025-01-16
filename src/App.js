import { Routes, Route } from 'react-router-dom';
import './App.css';
import InstagramPost from './Pages/Instagram';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InstagramPost />} />
    </Routes>
  );
}

export default App;
