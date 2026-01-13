import Link from "next/link";

/* -------- API FUNCTIONS -------- */

async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

async function getPopular() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

/* -------- PAGE -------- */

export default async function Page(props) {
  const params = await props.params;

  const movie = await getMovie(params.id);
  const popular = await getPopular();

  const trailer = movie.videos?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div
        className="h-[75vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, black, transparent), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="p-10 max-w-3xl space-y-4">
          <h1 className="text-5xl font-extrabold">{movie.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>
          <p className="text-yellow-400 text-lg">⭐ {movie.vote_average}</p>
        </div>
      </div>

      {/* TRAILER */}
      {trailer && (
        <div className="px-10 mt-14">
          <h2 className="text-2xl font-bold mb-4">🎬 Watch Trailer</h2>

          <div className="aspect-video w-full max-w-5xl">
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* MORE MOVIES */}
      <div className="px-10 py-16">
        <h2 className="text-2xl font-bold mb-6">🔥 More Like This</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {popular?.results
            ?.filter((m) => m.poster_path)
            .map((m) => (
              <Link key={m.id} href={`/movie/${m.id}`}>
                <img
                  className="rounded-xl hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  alt={m.title}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
