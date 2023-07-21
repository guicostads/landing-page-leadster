"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";
import { VideosNav } from "./VideosNav";
import Pages from "./Pages";

export const VideosList = () => {
  return (
    <div className="pt-3 pb-10 px-5 w-full">
      <VideosNav />
      <div className="w-full px-10 grid grid-cols-3	gap-5 max-md:grid-cols-1 max-md:place-items-center">
        {videosData.map((video, index) => (
          <Modal videoUrl={video.url} key={index} />
        ))}
      </div>
      <Pages />
    </div>
  );
};
