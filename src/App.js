import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Navigate to="/#about" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
