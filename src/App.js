import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmailOTP from './pages/EmailOTP/components/EmailOTP/EmailOTP';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/'  element={<EmailOTP/>}/>
        <Route path='/reset'  element={<ResetPassword/>}/>
        <Route path='/forgot-password'  element={<ForgotPassword/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
