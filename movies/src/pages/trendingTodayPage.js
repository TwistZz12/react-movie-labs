import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovieTredning } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import Pagination from "@mui/material/Pagination"; // Material-UI 分页组件

const TrendingTodayPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 当前页

  // 动态调用 API 获取当前页的数据
  const { data, error, isLoading, isError } = useQuery(
    ["trendingToday", currentPage], // 使用当前页作为缓存 key 的一部分
    () => getMovieTredning(currentPage), // 调用 API 并传入页码
    { keepPreviousData: true } // 保留前一页数据
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results; // 当前页的电影数据
  const totalPages = data.total_pages; // API 返回的总页数

  // 处理分页切换
  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 更新当前页
  };

  return (
    <div>
      {/* 显示电影列表 */}
      <PageTemplate
        title="Trending Today"
        movies={movies}
        action={() => {}}
      />

      {/* 分页控件 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={totalPages} // 总页数
          page={currentPage} // 当前页
          onChange={handlePageChange} // 分页回调
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
