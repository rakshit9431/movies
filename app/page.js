"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import Hero from "@/components/Hero";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/trending")
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar onSearch={setSearch} />

      {movies[0] && <Hero movie={movies[0]} />}

      <div className="px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">Popular on Netflix</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
