import { MovieCard } from "../MovieCard";
import { CarrouselProps, IMovieResponse } from "./types";

const Carrousel: React.FC<CarrouselProps> = ({ movies }) => {
  return (
    <div className="overflow-x-auto bg-red-500">
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
};

export default Carrousel;
