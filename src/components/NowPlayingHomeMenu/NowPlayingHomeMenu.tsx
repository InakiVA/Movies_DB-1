import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../types";
import { getNowPlaying } from "../../services";

function NowPlayingHomeMenu() {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getNowPlayingMovies = async () => {
    await getNowPlaying()
      .then((data) => {
        if (data && data.data) {
          setMovies(data.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
    setTimeout(() => {
      getNowPlayingMovies();
    }, 5000);
  };

  useEffect(() => {
    setIsLoading(true);
    getNowPlayingMovies();
  }, []);

  return (
    <div className="overflow-x-auto bg-transparent m-0 no-scrollbar">
      <div className="flex">
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

export default NowPlayingHomeMenu;
