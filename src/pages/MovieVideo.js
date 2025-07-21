import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieVideo = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=fr-FR`
        );
        const youtubeTrailers = response.data.results.filter(
          (video) => video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser')
        );
        setVideos(youtubeTrailers);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des vidéos :', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [id]);

  if (loading) return <div className="text-center mt-5 text-dark">Chargement...</div>;

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-5 px-4">
      <h1 className="text-center mb-5">🎬 Bande-annonce</h1>
      
      {videos.length === 0 ? (
        <p className="text-center">Aucune vidéo disponible pour ce film.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {videos.map((video) => (
            <div key={video.id} className="embed-responsive embed-responsive-16by9" style={{ maxWidth: '720px' }}>
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen
                title={video.name}
                style={{ width: '100%', height: '400px', borderRadius: '10px' }}
              ></iframe>
              <p className="mt-2 text-center">{video.name}</p>
              <p className="mt-2 text-center">{video.published_at}</p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-5">
        <Link to={`/moviedetails/${id}`} className="btn btn-outline-light">
          ⬅️ Retour aux détails
        </Link>
      </div>
    </div>
  );
};

export default MovieVideo;
