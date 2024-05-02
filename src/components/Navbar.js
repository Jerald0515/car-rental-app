import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    
    <nav class="py-4 bg-blue-950">
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <a href="/home">
        <img src="./navbar-logo.png" alt="Blog Logo" class="h-10" />
      </a>
      <ul class="flex space-x-6">
        <li>
          <a href="/home" class="text-white hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="/aboutus" class="text-white hover:text-gray-300">About Us</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
        </li>
        <li>
          <a href="/login" class="text-white hover:text-gray-300">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
  );
}

export default Navbar;
