import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  return (
    <div className="px-6 space-y-2">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
