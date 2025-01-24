import React from "react";

type PlayListItemProps = {
  song: {
    id: string;
    title: string;
    artist: string;
    duration: number;
  };
  isSelected: boolean;
  onClick: () => void;
};

const PlayListItem: React.FC<PlayListItemProps> = ({
  song,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`playlist-item ${
        isSelected
          ? "flex items-center bg-neutral-50 dark:bg-white shadow-md hover:scale-105 p-1 rounded-lg transition duration-200 px-4"
          : "flex items-center bg-neutral-50 dark:bg-white shadow-md hover:scale-105 p-1 rounded-lg transition duration-200 px-4"
      }
        cursor-pointer`}
    >
      <div className="flex-1">
        <p className="font-thin subpixel-antialiased text-base text-black">
          {song.title}
        </p>
        <p className="text-sm font-normal subpixel-antialiased  text-natural-stone  dark:text-neutral-700">
          {song.artist}
        </p>
      </div>
      <div className="text-right  text-sm font-normal subpixel-antialiased  text-natural-stone dark:text-neutral-700">
        {Math.floor(song.duration / 60)}:{song.duration % 60}
      </div>
    </div>
  );
};

export default PlayListItem;
