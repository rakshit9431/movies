const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

export async function fetchTrending() {
  const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`);
  return res.json();
}

export async function fetchHorror() {
  const res = await fetch(
    `${BASE}/discover/movie?api_key=${API_KEY}&with_genres=27`
  );
  return res.json();
}

export async function fetchAnime() {
  const res = await fetch(
    `${BASE}/discover/movie?api_key=${API_KEY}&with_keywords=210024`
  );
  return res.json();
}

export async function fetchPopular() {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
  return res.json();
}
