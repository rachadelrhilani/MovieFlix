import React from 'react';

const CategorySelector = ({ selectedCategory, onChangeCategory }) => {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <select
        className="form-select w-auto bg-secondary text-white border-0 mt-4"
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="popular">🎬 Films Populaires</option>
        <option value="top_rated">⭐ Films Mieux Notés</option>
        <option value="upcoming">🕒 Prochainement</option>
        <option value="now_playing">📽️ En Salle</option>
      </select>
    </div>
  );
};

export default CategorySelector;
