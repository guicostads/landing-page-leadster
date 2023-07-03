"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";

export const VideosList = () => {
  return (
    <div className="grid  grid-cols-4 grid-rows-4 gap-y-4 gap-x-2 place-items-center p-2">
      {videosData.map((video, index) => (
        <Modal videoUrl={video.url} key={index} />
      ))}
    </div>
  );
};
