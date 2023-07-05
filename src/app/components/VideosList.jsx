"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";
import { VideosNav } from "./VideosNav";

export const VideosList = () => {
  return (
    <div className="pt-3">
      <VideosNav />

      <div className="w-full grid grid-cols-3 grid-rows-3	gap-4 place-items-stretch border-b-2 border-solid pb-5">
        {videosData.map((video, index) => (
          <Modal videoUrl={video.url} key={index} />
        ))}
      </div>
    </div>
  );
};
