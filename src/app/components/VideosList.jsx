"use client";

import Modal from "./Modal";
import videosData from "@/app/videos/videos.json";

export const VideosList = () => {
  return (
   
      <div className="grid grid-cols-3 grid-rows-3 gap-6 p-2">
        {videosData.map((video, index) => (
          <Modal videoUrl={video.url} key={index} />
        ))}
      </div>
   
  );
};
