import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovieTredning } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import Pagination from "@mui/material/Pagination"; // Material-UI 分页组件

const TrendingTodayPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, error, isLoading, isError } = useQuery("trendingToday", getMovieTredning);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const currentMovies = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PageTemplate
        title="Trending Today"
        movies={currentMovies}
        action={() => {}}
      />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={totalPages} // 总页数
          page={currentPage} // 当前页
          onChange={handlePageChange} // 页码切换
          color="primary"
          size="large"
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default TrendingTodayPage;
