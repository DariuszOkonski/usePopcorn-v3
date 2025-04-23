import React, { useEffect, useState } from 'react';
import Box from './Box';
import Logo from './Logo';
import MainContent from './MainContent';
import MovieList from './MovieList';
import NavBar from './NavBar';
import NumResults from './NumResults';
import Search from './Search';
import WatchedMoviesList from './WatchedMoviesList';
import WatchedSummary from './WatchedSummary';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import MovieDetails from './MovieDetails';
import { useMovies } from './useMovies';

// const KEY = '39d44eb9';

export default function App() {
  const [query, setQuery] = useState('');
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched');
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  return (
    <React.Fragment>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <MainContent>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <React.Fragment>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </React.Fragment>
          )}
        </Box>
      </MainContent>
    </React.Fragment>
  );
}
