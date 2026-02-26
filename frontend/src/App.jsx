import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TestArea from './components/TestArea';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<TestArea />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;