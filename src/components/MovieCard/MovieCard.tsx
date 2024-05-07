import React from "react";
import { IGenre, IMovieCard } from "./types"; //si se tienen defaults, no se usan llaves
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import genres from "../../constants/genres.json";
import { Pill } from "../Pill";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import { FaStar } from "react-icons/fa6";
import { Show } from "../../pages";

//entre <> lo que recibe
const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath,
}) => {
  const navigate = useNavigate();
  const poster = IMAGE_SOURCE + posterPath;

  const getGenre = (genreId: number): string => {
    const key = Object.values(genres.genres).find(
      (genre) => genre.id == genreId
    );
    if (key) {
      return key.name;
    }
    return "Not classified";
  };

  const getColor = (vote: number): "red" | "green" | "yellow" => {
    if (vote < 6) return "red";
    if (vote < 8) return "yellow";
    return "green";
  };

  const navigateMovies = (id: number, movieName: string) => {
    navigate(`${ROUTES.SHOW}${id}`, { state: { movieName } });
    window.location.reload();
  };

  return (
    <div
      className="px-0 mx-4 my-2 auto float-left overflow-hidden block relative rounded-lg flex-shrink-0 smooth-scroll flex-none"
      onClick={() => {
        navigateMovies(movieId, title);
      }}
    >
      <div className="bg-black auto float-left overflow-hidden block relative shadow-lg rounded-lg flex-shrink-0 smooth-scroll">
        <div className="overflow-hidden bg-gray-800 float-none transition-opacity duration-5550 ease-in-out transform-gpu">
          <img
            src={poster}
            className="max-h-96 transition-all duration-900 ease-in-out backface-hidden overflow-hidden max-h-poster relative scale-100 hover:scale-125 hover:opacity-40"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-auto opacity-100 transition-all duration-300 bg-gradient-to-t from-black via-black rounded-b-none">
          <div className="p-4 py-3.5 w-full align-middle text-white">
            <Pill title={getGenre(genreId)} color="grayblue" />
            <p className="text-white block text-lg font-bold leading-none mt-2.5">
              {title}
            </p>
            <div className=" flex items-center gap-2 mt-2">
              <FaStar color="yellow" />
              <p className=" text-white text-xs font-medium table uppercase leading-none">
                {voteAverage} / 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
