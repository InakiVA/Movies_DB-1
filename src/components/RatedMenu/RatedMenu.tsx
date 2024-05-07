import React from "react";
import { movies } from "../../constants/moviesMock";
import { MovieCard } from "../MovieCard";

function RatedMenu() {
  // Ordena las películas por voto promedio en orden descendente
  const sortedMovies = [...movies].sort(
    (a, b) => b.vote_average - a.vote_average
  );

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-transparent m-0">
        {sortedMovies.map((movie) => (
          <div key={movie.id} className="m-0">
            <MovieCard
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatedMenu;
