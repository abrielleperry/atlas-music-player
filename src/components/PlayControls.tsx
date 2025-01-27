import React, { useState } from "react";
import { Shuffle, Rewind, Play, FastForward, Pause } from "lucide-react";

type PlayControlsProps = {
  currentSongIndex: number;
  playlistLength: number;
  onChangeSong: (newIndex: number) => void;
  isShuffleOn: boolean;
  toggleShuffle: () => void;
  isPlaying: boolean;
  togglePlayPause: () => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
};

const PlayerControls: React.FC<PlayControlsProps> = ({
  currentSongIndex,
  playlistLength,
  onChangeSong,
  isShuffleOn,
  toggleShuffle,
  isPlaying,
  togglePlayPause,
  playbackSpeed,
  setPlaybackSpeed,
}) => {
  const changePlaybackSpeed = () => {
    const newSpeed = playbackSpeed === 1 ? 2 : playbackSpeed === 2 ? 0.5 : 1;
    setPlaybackSpeed(newSpeed);
  };

  const goToPreviousSong = () => {
    if (currentSongIndex > 0) {
      onChangeSong(currentSongIndex - 1);
    }
  };

  const goToNextSong = () => {
    if (isShuffleOn) {
      const randomIndex = Math.floor(Math.random() * playlistLength);
      onChangeSong(randomIndex);
    } else if (currentSongIndex < playlistLength - 1) {
      onChangeSong(currentSongIndex + 1);
    }
  };

  return (
    <div className="player-controls shadow-lg border-orange-sunset border-2 flex justify-between gap-2 rounded-full px-8 py-4 items-center text-black dark:text-white">
      {/* speed */}
      <div>
        <button
          className="p-1 font-medium text-lg hover:text-golden-yellow hover:scale-150 duration-150"
          onClick={changePlaybackSpeed}
        >
          {playbackSpeed}x
        </button>
      </div>
      {/* rewind */}
      <div>
        <button
          className="p-1 group"
          onClick={goToPreviousSong}
          disabled={currentSongIndex === 0}
        >
          <Rewind
            fill="currentColor"
            stroke="currentColor"
            className={`group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150 ${
              currentSongIndex === 0 ? "cursor-not-allowed" : ""
            }`}
          />
        </button>
      </div>
      {/* play & pause */}
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
      {/* fastforward */}
      <div>
        <button
          className="p-1 group"
          onClick={goToNextSong}
          disabled={!isShuffleOn && currentSongIndex === playlistLength - 1}
        >
          <FastForward
            fill="currentColor"
            stroke="currentColor"
            className={`group-hover:fill-golden-yellow group-hover:stroke-golden-yellow group-hover:scale-150 duration-150" ${
              !isShuffleOn && currentSongIndex === playlistLength - 1
                ? "cursor-not-allowed"
                : ""
            }`}
          />
        </button>
      </div>
      {/* shuffle */}

      <div>
        <button className="p-1 group" onClick={toggleShuffle}>
          <Shuffle
            strokeWidth={2}
            color="currentColor"
            className={`group-hover:stroke-golden-yellow group-hover:scale-150 duration-150 ${
              isShuffleOn ? "stroke-golden-yellow" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
