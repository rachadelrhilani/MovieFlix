import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container-fluid py-5 text-white bg-dark min-vh-100">
      <h1 className="mb-4 text-center display-4">🎬 Mes Films Favoris</h1>

      {favorites.length === 0 ? (
        <p className="text-center fs-5">Aucun film favori pour l'instant.</p>
      ) : (
        <div className="row justify-content-center">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card bg-secondary text-white h-100 shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.title}</h5>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/MovieDetails/${movie.id}`} className="btn btn-outline-light btn-sm">
                      Détails
                    </Link>
                    <button
                      onClick={() => removeFromFavorites(movie.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='text-center'>
        <Link to="/" className="btn btn-outline-light btn-lg text-center mt-4 w-50">
          ⬅️ Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Favorites;

