import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../../components/NavBar";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import PopularMovieDetailPage from "../PopularMovieDetailPage/PopularMovieDetailPage"; 
import { movies, popularMovies } from "../../data";

export default function App() {
  const [user, setUser] = useState(null);
  const [popularMovieIndex, setPopularMovieIndex] = useState(null);

  const handleLogin = (username, index) => {
    setUser(username);
    setPopularMovieIndex(index);
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar key="navbar" user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
            <Route
              path="/popularMovies/:popularMovieId"
              element={<PopularMovieDetailPage />}
            />
          </Routes>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </main>
  );
}
