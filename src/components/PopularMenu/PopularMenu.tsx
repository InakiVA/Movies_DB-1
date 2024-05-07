import React from "react";
import { movies } from "../../constants/moviesMock";
import { MovieCard } from "../MovieCard";

function PopularMenu() {
  // Ordena las películas por voto promedio en orden descendente
  const sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 bg-transparent m-0">
        {movies?.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />
          ))}
      </div>
    </div>
  );
}

export default PopularMenu;
