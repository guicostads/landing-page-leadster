"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";

export const VideosList = () => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-4 place-items-center p-2">
      {videosData.map((video) => (
        <Modal videoUrl={video.url} />
      ))}
    </div>
  );
};
