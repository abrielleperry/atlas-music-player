import React, { useState } from "react";
import { Shuffle, Rewind, Play, FastForward, Pause } from "lucide-react";

export default function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isShuffleOn, setShuffleOn] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const changePlaybackSpeed = () => {
    setPlaybackSpeed((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 0.5;
      return 1;
    });
  };

  const toggleShuffle = () => {
    setShuffleOn((prev) => !prev);
  };

  return (
    <div className="player-controls shadow-lg border-orange-sunset border-2 flex justify-between gap-2 rounded-full px-8 py-4 items-center text-black dark:text-white">
      <div>
        <button
          className="p-1 font-medium text-lg hover:text-golden-yellow hover:scale-150 duration-150"
          onClick={changePlaybackSpeed}
        >
          {playbackSpeed}x
        </button>
      </div>
      <div>
        <button className="p-1 group">
          <Rewind
            fill="currentColor"
            stroke="currentColor"
            className="group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150"
          />
        </button>
      </div>
      <div>
        <button
          className="border-2 rounded p-3  group hover:border-golden-yellow group-hover:scale-150 duration-150  dark:border-white border-black"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause
              fill="currentColor"
              stroke="currentColor"
              className="group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150"
            />
          ) : (
            <Play
              fill="currentColor"
              stroke="currentColor"
              className="group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150"
            />
          )}
        </button>
      </div>
      <div>
        <button className="p-1 group">
          <FastForward
            fill="currentColor"
            stroke="currentColor"
            className="group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150"
          />
        </button>
      </div>
      <div>
        <button className="p-1 group" onClick={toggleShuffle}>
          <Shuffle
            strokeWidth={2}
            color="currentColor"
            className={`group-hover:stroke-golden-yellow group-hover:scale-150 duration-150"
          ${isShuffleOn ? "stroke-golden-yellow" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
