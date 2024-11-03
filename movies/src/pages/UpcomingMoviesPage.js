import React, { useEffect, useState } from "react";
import MovieList from "../components/movieList"; 
import PageTemplate from "../components/templateMovieListPage"; 
import { getUpcomingMovies } from "../api/tmdb-api"; 
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getUpcomingMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
