import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "./tpes";
import { getNowPlaying } from "../../services";

const NowPlaying = () => {
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
    <div>
      <h1 className="text-3xl font-bold">Now Playing</h1>
      <br />

      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 bg-transparent m-0">
        {isLoading && <div>Loading...</div>}
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
};

export default NowPlaying;
