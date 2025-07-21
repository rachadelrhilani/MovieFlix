// src/components/SearchBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center bg-dark">
      <input
        type="text"
        className="form-control mt-4 container bg-gray"
        placeholder="🔍 Rechercher un film..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
