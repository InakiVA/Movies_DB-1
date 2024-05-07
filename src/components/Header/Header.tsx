import { Link } from "react-router-dom";
import React from "react";
import { ROUTES } from "../../routes/constants";

const Header = () => {
  return (
    <header className=" bg-black text-white">
      <h1 className="text-3xl font-extrabold p-3 ">TOTALLY LEGAL FILMS</h1>
      <h2 className="bg-white h-1 flex-auto"></h2>
      <nav className="p-4 md:flex md:items-center md:space-x-4">
        <Link
          to={ROUTES.HOME}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 hover:rounded-full hover:bg-opacity-5"
        >
          Home
        </Link>
        <Link
          to={ROUTES.POPULAR}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 hover:rounded-full hover:bg-opacity-5"
        >
          Popular
        </Link>
        <Link
          to={ROUTES.TOPRATED}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 hover:rounded-full hover:bg-opacity-5"
        >
          Top Rated
        </Link>
        <Link
          to={ROUTES.NOWPLAYING}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 hover:rounded-full hover:bg-opacity-5"
        >
          Now Playing
        </Link>

        <Link
          to={ROUTES.UPCOMING}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 hover:rounded-full hover:bg-opacity-5"
        >
          Upcoming
        </Link>
        <Link
          to={ROUTES.MYFAVORITES}
          className="px-3 font-bold hover:-translate-y-1 hover:scale-125 hover:bg-gradient-to-r from-red-700 via-purple-600 to-blue-500 hover:rounded-full hover:bg-opacity-5"
        >
          My Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
