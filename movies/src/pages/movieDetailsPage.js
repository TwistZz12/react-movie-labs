import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getCredits } from '../api/tmdb-api'; 
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import CastList from "../components/castList";

const MoviePage = (props) => {
  const { id } = useParams();

 
  const { data: movie, error: movieError, isLoading: movieLoading, isError: movieIsError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );


  const { data: credits, error: creditsError, isLoading: creditsLoading, isError: creditsIsError } = useQuery(
    ["credits", { id: id }],
    getCredits
  );

  if (movieLoading || creditsLoading) {
    return <Spinner />;
  }

  if (movieIsError) {
    return <h1>{movieError.message}</h1>;
  }

  if (creditsIsError) {
    return <h1>{creditsError.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <CastList cast={credits.cast.slice(0,12)} />
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
