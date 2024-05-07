import React from "react";
import { movies } from "../../constants/moviesMock";
import { MovieCard } from "../MovieCard";

function MovieMenu() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-transparent m-0">
        {movies.map((movie) => (
          <div key={movie.id} className="m-0">
            <MovieCard
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]} // Corregido aquí
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieMenu;
