import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col w-full sm:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
