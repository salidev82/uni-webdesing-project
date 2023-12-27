import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Layout from './layout/index.jsx'
import ContactUs from './views/ContactUs.jsx'
import AboutUs from './views/AboutUs.jsx'
import ServicesPage from './views/Services.Page.jsx'
import Projects from './views/Projects.Page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
)
