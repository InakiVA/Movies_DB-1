import { useParams, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMAGE_SOURCE } from "../../constants/moviesMock";

import { IMovieDetail } from "./types";
import { ITrailerResults } from "./types";
import { getShowDetails } from "../../services";
import { FaHeart } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";
import { Pill } from "../../components/Pill";
import { IMovieResponse } from "../Popular/types";
import { getRecommendedMovies } from "../../services";
import { Carrousel } from "../../components/Carousel";
import { MdDateRange } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { RecomendedMenu } from "../../components/RecommendedMenu";

const Show: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<IMovieDetail>();
  const [recomendedMovies, setRecomendedMovies] = useState<IMovieResponse[]>(
    []
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const addFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    const newFavorites = [...favs, id];
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(true);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = () => {
    const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
    let newFavorites = [...favs];
    newFavorites = newFavorites.filter((e) => e !== id);
    setFavorites(JSON.stringify(newFavorites));
    setIsFavorite(false);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const getShowDetail = async (id: string) => {
    await getShowDetails(id)
      .then((data: any) => {
        if (data && data.data) {
          setDetail(data.data);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const getRecommend = async (id: string) => {
    await getRecommendedMovies(id)
      .then((data: any) => {
        if (data && data.data) {
          setRecomendedMovies(data.data.results);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const favs = localStorage.getItem("favorites") || "";
    setFavorites(favs);
    if (favs.includes(String(id))) {
      setIsFavorite(true);
    }
    getShowDetail(id!!);
    getRecommend(id!!);
  }, []);

  return (
    <div className="flex-auto bg-transparent">
      <div className="text-left text-white mb-3 text-5xl font-extrabold flex-auto hover:text-6xl">
        {detail?.title}
      </div>

      <div className="flex flex-row flex-auto">
        <figure>
          <img
            src={IMAGE_SOURCE + detail?.poster_path}
            className=" h-auto  relative  shadow-xl dark:shadow-gray-80 transition-all duration-300 rounded-lg cursor-pointer filter hover:grayscale"
            alt="Movie Poster"
          />
          <figcaption className="mt-2 text-sm text-center text-white"></figcaption>
        </figure>

        <div className="flex flex-row flex-1 mx-10">
          <div className="flex-col flex-auto">
            <h5 className="text-start text-3xl font-bold text-white">
              Synopsis
            </h5>
            <p className="text-center italic text-gray-300 font-semibold text-lg m-5">
              {detail?.overview}
            </p>
          </div>

          <div className="flex-col mx-10">
            <div className="space-y-4 mt-10">
              <p className="text-xl font-bold text-white">Genres</p>
              <div className="flex flex-row mx-2">
                {detail?.genres.map((genre) => (
                  <Pill title={genre.name} color="grayblue"></Pill>
                ))}
              </div>
              <div className="w-96">
                {isFavorite ? (
                  <div
                    className="flex items-center gap-2 bg-red-500 bg-opacity-25 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    style={{ width: "230px" }}
                  >
                    <FaHeartBroken color="red" />
                    <button
                      onClick={removeFavorite}
                      className="bg-transparent flex-auto"
                    >
                      Remove from Favorites
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-2 bg-emerald-500 bg-opacity-25 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full"
                    style={{ width: "180px" }}
                  >
                    <FaHeart color="white" />
                    <button
                      onClick={addFavorite}
                      className="bg-transparent flex-auto"
                    >
                      Add to Favorites
                    </button>
                  </div>
                )}
                <button
                  onClick={goBack}
                  className="bg-gray-500 hover:bg-gray-700 bg-opacity-25 text-white font-bold py-2 px-4 my-10 rounded-full"
                >
                  Return
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-auto justify-center  text-white">
              <p className="font-bold text-xl my-5">Information: </p>
              <div className="flex items-center gap-2 mt-2">
                <FaPerson />
                <p className="font-bold">{detail?.adult ? ">18" : "<18"}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <MdDateRange />
                <p className="font-bold">{detail?.release_date}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaHeart />
                <p className="font-bold">{detail?.popularity}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaMoneyBillWave />
                <p className="font-bold">{detail?.budget}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <FaStar />
                <p className=" font-bold">{detail?.vote_average}</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <MdHowToVote />
                <p className=" font-bold">{detail?.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="my-6 text-left text-2xl font-bold text-white">
            You might also like...
          </p>
          <RecomendedMenu />
        </div>
      </div>
    </div>
  );
};

export default Show;
