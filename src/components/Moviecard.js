// src/components/Moviecard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const categoryTitles = {
    popular: '🎬 Films Populaires',
    top_rated: '⭐ Films Mieux Notés',
    upcoming: '🕒 Prochainement',
    now_playing: '📽️ En Salle',
};

function Moviecard({ category, search }) {
    const [movies, setMovies] = useState([]);
    const addToFavorites = (movie) => {
        const existing = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorited = existing.some((fav) => fav.id === movie.id);

        if (!isAlreadyFavorited) {
            const updated = [...existing, movie];
            localStorage.setItem('favorites', JSON.stringify(updated));
            alert('Ajouté aux favoris !');
        } else {
            alert('Déjà présent dans les favoris.');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "";
                if (search.trim() !== "") {
                    url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}`;
                } else {
                    url = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
                }

                const response = await axios.get(url);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [category, search]);

    return (
        <div className="w-100 py-4 px-3 bg-dark text-white">
            <h1 className="text-center mb-4">
                {search.trim() !== "" ? `🔍 Résultats pour "${search}"` : categoryTitles[category]}
            </h1>
            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
                            <div className="card h-100 bg-secondary text-white">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.original_title}</h5>
                                    <Link
                                        to={`/MovieDetails/${movie.id}`}
                                        className="btn btn-outline-light w-100"
                                        style={{
                                            borderRadius: '12px',
                                            fontWeight: 'bold',
                                            transition: '0.3s',
                                        }}
                                    >
                                        🎬 Détails
                                    </Link>
                                    <button onClick={() => addToFavorites(movie)} className="btn btn-outline-light mt-2">
                                        ❤️ Ajouter aux favoris
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Aucun film trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default Moviecard;
