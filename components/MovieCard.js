import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group relative cursor-pointer">
        <img
          className="rounded-xl transition duration-300 group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 transition">
          <h3 className="font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-300">⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
}
