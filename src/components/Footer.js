// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} MovieFlix. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
