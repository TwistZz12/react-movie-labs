import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { getMovies } from "../api/tmdb-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]); // 存储电影数据
  const [page, setPage] = useState(1); // 当前页码
  const [totalPages, setTotalPages] = useState(0); // 总页数
  const [loading, setLoading] = useState(true); // 加载状态
  const [error, setError] = useState(null); // 错误状态

  // 获取电影数据的函数
  const fetchMovies = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMovies(page); // 调用 API
      setMovies(data.results); // 更新电影数据
      setTotalPages(data.total_pages); // 更新总页数
    } catch (err) {
      setError(err.message); // 捕获错误
    } finally {
      setLoading(false); // 结束加载状态
    }
  };

  // 页面加载或页码更新时调用 API
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  // 处理分页切换
  const handlePageChange = (event, value) => {
    setPage(value); // 更新页码
  };

  if (loading) return <Spinner />;
  if (error) return <h1>{error}</h1>;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies} // 当前页的电影数据
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      currentPage={page} // 当前页
      totalPages={totalPages} // 总页数
      onPageChange={handlePageChange} // 分页回调
    />
  );
};

export default HomePage;
