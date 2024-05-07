import React, { useEffect, useState } from "react";
import { TfiFaceSad } from "react-icons/tfi";
import { IMovieDetail } from "./types";
import { MovieCard } from "../../components/MovieCard";
import { json } from "stream/consumers";
import { getShowDetails } from "../../services";

const MyFavorites = () => {
  const [Loading, setLoading] = useState<boolean>(false);
  const [shows, setShows] = useState<IMovieDetail[]>([]);
  const favorites: string = localStorage.getItem("favorites") || "";

  const runGetFavorites = async () => {
    if (favorites.length) {
      const favoritesArray = JSON.parse(favorites);
      const newShows = await Promise.all(
        favoritesArray.map(async (favorite: string) => {
          return getShowDetails(favorite)
            .then((res) => {
              if (res && res.data) {
                return res.data;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
      );
      setShows(newShows);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    runGetFavorites();
  }, []);

  return (
    <div>
      {!Loading ? (
        <div>
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <br />

          {favorites.length > 0 && JSON.parse(favorites).length > 0 ? (
            <div>
              {shows &&
                shows.map((show: IMovieDetail) => (
                  <MovieCard
                    key={show.id}
                    movieId={show.id}
                    title={show.title}
                    genreId={show.genres[0].id}
                    voteAverage={show.vote_average}
                    posterPath={show.poster_path}
                  />
                ))}
            </div>
          ) : (
            <div>
              <br />
              <h2 className="text-2xl font-bold">No favorites added</h2>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyFavorites;
