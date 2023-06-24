import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import FormLogin from './components/FormLogin/FormLogin';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
