import React from "react";
import { RatedHomeMenu } from "../../components/RatedHomeMenu";
import { PopularHomeMenu } from "../../components/PopularHomeMenu";
import { NowPlayingHomeMenu } from "../../components/NowPlayingHomeMenu";
import { UpcomingCarousel } from "../../components/upcomingGallery";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Upcoming Movies</h1>

      <UpcomingCarousel />

      <h1 className="text-3xl font-bold my-5">Now Playing</h1>

      <NowPlayingHomeMenu />

      <h1 className="text-3xl font-bold my-5">Popular</h1>

      <PopularHomeMenu />

      <h1 className="text-3xl font-bold my-5">Top Rated</h1>

      <RatedHomeMenu />
    </div>
  );
};

export default Home;
