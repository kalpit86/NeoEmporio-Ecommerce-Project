import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import AdminComingSoon from './pages/AdminComingSoon';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/admin" element={<AdminComingSoon />} />
      </Routes>
    </Router>
  );
}

