export default function Hero({ movie }) {
  return (
    <div
      className="h-[85vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `linear-gradient(to top, black, transparent), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="p-10 max-w-2xl space-y-4">
        <h1 className="text-5xl font-extrabold">{movie.title}</h1>
        <p className="text-gray-300 line-clamp-3">{movie.overview}</p>

        <div className="flex gap-4">
          <a
            href={`/movie/${movie.id}`}
            className="bg-white text-black px-6 py-2 rounded font-bold hover:scale-105 transition"
          >
            ▶ Play
          </a>

          <a
            href={`/movie/${movie.id}`}
            className="bg-gray-700/70 px-6 py-2 rounded font-bold hover:bg-gray-600"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}
