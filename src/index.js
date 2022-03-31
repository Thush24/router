import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Home, About and Contact components are imported
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

// We show the routes of the parent and the nested components here.
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}> 
        <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> 
      </Route>
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);
