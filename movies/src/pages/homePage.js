import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination'; // Material-UI 分页组件

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const { data, error, isLoading, isError } = useQuery(['discover', currentPage], () => getMovies(currentPage), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />

      {/* Styled Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={data.total_pages} // 总页数
          page={currentPage} // 当前页
          onChange={handlePageChange} // 页码切换
          color="primary" // 颜色
          size="large" // 按钮大小
          variant="outlined" // 按钮样式
          shape="rounded" // 按钮形状
        />
      </div>
    </div>
  );
};

export default HomePage;
