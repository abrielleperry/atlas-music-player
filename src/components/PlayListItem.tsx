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
    <div className="flex flex-col gap-y-4 py-2">
      <div
        className={`flex items-center bg-neutral-50 dark:bg-white shadow-md hover:scale-105 p-2 rounded-lg transition duration-200 px-4 ${
          isSelected ? "border-2 border-green" : ""
        }`}
        onClick={onClick}
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
    </div>
  );
};

export default PlayListItem;
