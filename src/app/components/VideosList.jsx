"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";
import { VideosNav } from "./VideosNav";

export const VideosList = () => {
  return (
    <div className="p-10">
      <VideosNav />
      <div className="grid grid-cols-3 auto-rows-auto	gap-5">
        {videosData.map((video, index) => (
          <Modal videoUrl={video.url} key={index} />
        ))}
      </div>
    </div>
  );
};
