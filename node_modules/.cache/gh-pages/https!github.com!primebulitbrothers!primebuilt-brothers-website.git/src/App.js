import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteForm from './pages/QuoteForm';
import QuoteConfirmation from './pages/QuoteConfirmation';
import ContactConfirmation from './pages/ContactConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<QuoteForm />} />
            <Route path="/quote-confirmation" element={<QuoteConfirmation />} />
            <Route path="/contact-confirmation" element={<ContactConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
