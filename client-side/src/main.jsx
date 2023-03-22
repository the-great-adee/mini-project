import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Ide from './components/ide'
import LoginPage from './components/loginpage'
import Participate from './components/participate'
import Practice from './components/practice'
import RegistrationPage from './components/registrationpage'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OnlineComplier from './components/online-complier'
import PythonComplier from './components/python-complier'
import CppComplier from './components/cpp-complier'
import JavaComplier from './components/java-complier'
import ProfilePage from './components/profilepage'
import TermsConditions from './components/terms&conditions'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/participate" element={<Participate />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/ide" element={<Ide />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/python" element={<PythonComplier />} />
      <Route path="/java" element={<JavaComplier />} />
      <Route path="/cpp" element={<CppComplier />} />
      <Route path="/user" element={<ProfilePage />} />
      <Route path="/terms" element={<TermsConditions />} />
    </Routes>
  </Router>
)
