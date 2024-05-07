import React, { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../types";
import { getRecommendedMovies } from "../../services";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const RecomendedMenu = () => {
  const { id } = useParams<{ id: string }>();
  const [recomendedMovies, setRecomendedMovies] = useState<IMovieResponse[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRecommend = async (id: string) => {
    await getRecommendedMovies(id)
      .then((data) => {
        if (data && data.data) {
          setRecomendedMovies(data.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
    setTimeout(() => {
      getRecommendedMovies(id);
    }, 5000);
  };

  useEffect(() => {
    setIsLoading(true);
    getRecommend(id!!);
  }, []);

  return (
    <div className="overflow-x-auto bg-transparent m-0 no-scrollbar">
      <div className="flex">
        {recomendedMovies?.length > 0 &&
          recomendedMovies.map((movie) => (
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

export default RecomendedMenu;
