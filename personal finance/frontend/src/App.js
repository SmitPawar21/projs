import { AuthProvider } from './components/AuthContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing';
import { RegisterPage } from './pages/register';
import { FinancePage } from './pages/finance';

function App() {
  return (
    <div className="App">

    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/finance' element={<FinancePage />} />
        </Routes>
      </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
