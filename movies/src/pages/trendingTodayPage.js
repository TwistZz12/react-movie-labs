import React from "react";
import { getMovie, getMovieTredning } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const TrendingTodayPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('abc', getMovieTredning)
  
  if (isLoading) {
    return <Spinner />
  }
  
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;
  return (
    <PageTemplate
      title='Trending'
      movies={movies}
      action={() => {
       
      }}
    />
  );
};
export default TrendingTodayPage;