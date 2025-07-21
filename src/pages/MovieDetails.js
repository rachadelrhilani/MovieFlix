// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams(); // récupération de l'ID depuis l'URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=fr-FR`
                );
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération du film:', error);
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-5 text-dark">Chargement...</div>;
    }

    if (!movie) {
        return <div className="text-center mt-5 text-white">Film introuvable.</div>;
    }

    return (
        <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center py-5 px-4">
            <div className="row w-100">
                {/* Image du film */}
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '90vh', objectFit: 'cover' }}
                    />
                </div>

                {/* Détails */}
                <div className="col-md-7 d-flex flex-column justify-content-center px-4">
                    <h1 className="mb-3 fw-bold display-4">{movie.title}</h1>
                    <p className="mb-2 fs-5">
                        <strong>📅 Date de sortie :</strong> {movie.release_date}
                    </p>
                    <p className="mb-2 fs-5">
                        <strong>⭐ Note :</strong> {movie.vote_average} / 10
                    </p>
                    <p className="mb-3 fs-5">
                        <strong>📝 Description :</strong> {movie.overview}
                    </p>
                    <Link to={`/Movie/${movie.id}`} className="btn btn-danger btn-lg mt-3 w-50">
                        🎬 Voir la bande-annonce
                    </Link>
                    <Link to="/" className="btn btn-outline-light btn-lg mt-4 w-50">
                        ⬅️ Retour à l'accueil
                    </Link>


                </div>
            </div>
        </div>

    );
};

export default MovieDetails;