import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectName" element={<ProjectDetails />} />
        <Route path="/*" element={<Error404 />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
