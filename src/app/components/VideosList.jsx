"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";
import { VideosNav } from "./VideosNav";
import Pages from "./Pages";

export const VideosList = () => {
  return (
    <div className="pt-3 pb-10 w-8/12 max-md:w-full max-md:px-5">
      <VideosNav />
      <div className="w-full grid grid-cols-3 grid-rows-3	gap-5">
        {videosData.map((video, index) => (
          <Modal videoUrl={video.url} key={index} />
        ))}
      </div>
      <Pages />
    </div>
  );
};
