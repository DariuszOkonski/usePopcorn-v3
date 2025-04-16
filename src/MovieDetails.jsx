/* eslint-disable */
import React, { useEffect, useState } from 'react';
import StarRating from './StarRating/StarRating';
import Loader from './Loader';

const KEY = '39d44eb9';

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({
    Title: '',
    Year: '',
    Poster: '',
    Runtime: '',
    imdbRating: '',
    Plot: '',
    Released: '',
    Actors: '',
    Director: '',
    Genre: '',
  });

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedId]);

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={() => undefined}
              />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </React.Fragment>
      )}
    </div>
  );
};

export default MovieDetails;
