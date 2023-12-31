import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'cat-api';

const Cast = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchQuery = async () => {
      setLoading(true);
      try {
        const data = await fetchCredits(movieId);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log('error', error);
        setLoading(true);
      }
    };
    fetchQuery();
  }, [movieId]);

  return (
    <>
      {error && <p>{error}</p>}
      {movies && (
        <ul>
          {movies.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Cast;
