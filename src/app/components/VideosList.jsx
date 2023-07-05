"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";

export const VideosList = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-auto	gap-5 p-5">
      {videosData.map((video, index) => (
        <Modal videoUrl={video.url} key={index} />
      ))}
    </div>
  );
};
