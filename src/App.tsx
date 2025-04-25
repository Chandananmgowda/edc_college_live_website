import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ChairmanMessage from './pages/ChairmanMessage';
import TrusteeMessage from './pages/TrusteeMessage';
import WhatWeDo from './pages/WhatWeDo';
import Events from './pages/Events';
import Startups from './pages/Startups';
import SuccessStories from './pages/SuccessStories.tsx';
import JoinUs from './pages/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e1b4b] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/chairman-message" element={<ChairmanMessage />} />
          <Route path="/trustee-message" element={<TrusteeMessage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/events" element={<Events />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;