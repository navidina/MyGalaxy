import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Knowledge from './pages/Knowledge';
import Log from './pages/Log';
import Assistant from './pages/Assistant';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="knowledge" element={<Knowledge />} />
        <Route path="log" element={<Log />} />
        <Route path="assistant" element={<Assistant />} />
      </Route>
    </Routes>
  );
}

export default App;
