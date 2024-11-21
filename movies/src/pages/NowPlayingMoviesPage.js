import React from "react";
import { useQuery } from "react-query"; 
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage"; 
import Spinner from "../components/spinner"; 

const NowPlayingMoviesPage = () => {
  // 使用 React Query 获取数据
  const { data, isLoading, isError, error } = useQuery(
    "nowPlayingMovies", // 唯一的 Query Key
    getNowPlayingMovies 
  );


  if (isLoading) {
    return <Spinner />;
  }


  if (isError) {
    return <h1>{error.message || "Something went wrong."}</h1>;
  }

  
  const movies = data.results;

  
  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => <button>Add to Watchlist</button>}
    />
  );
};

export default NowPlayingMoviesPage;
