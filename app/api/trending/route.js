export async function GET() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const data = await res.json();
  return Response.json(data);
}
