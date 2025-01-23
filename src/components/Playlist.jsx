import React from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="flex flex-col flex-1 px-6 ">
      <div className="relative ">
        <div className="absolute top-10 -left-4 w-80 h-80  bg-orange-sunset rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 -right-10 w-80 h-80 bg-coral  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-2 left-20 w-80 h-80 bg-golden-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative  ">
          <PlayListItem />
        </div>
      </div>
    </div>
  );
}
