import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';
import WhyChooseUs from './components/WhyChooseUs';
import CarCard from './components/CarCard';
import CarsList from './components/CarsList';
import Form from './components/carBooking/Form';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/footer' element={<Footer/>} />
          <Route path='/whychooseus' element={<WhyChooseUs/>} />
          <Route path='/Carcard' element={<CarCard />} />
          <Route path='/CarsList' element={<CarsList />} /> 
          <Route path='/Form' element={<Form />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
