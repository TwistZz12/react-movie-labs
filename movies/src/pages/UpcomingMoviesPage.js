import React, { useEffect, useState } from "react";
import MovieList from "../components/movieList"; 
import PageTemplate from "../components/templateMovieListPage"; 
import { getUpcomingMovies } from "../api/tmdb-api"; 

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getUpcomingMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  // 定义你的 action 函数
  const action = (movie) => {
    // 处理动作，比如导航到电影详情页
    console.log("Selected movie:", movie);
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={action} // 传递 action 属性
    />
  );
};

export default UpcomingMoviesPage;
