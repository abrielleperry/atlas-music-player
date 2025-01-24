import React from "react";

type SongTitleProps = {
  title: string;
  artist: string;
};

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => {
  return (
    <div className="flex flex-col mb-3 mt-6">
      <p className="font-bold text-2xl dark:text-white">{title}</p>
      <p className="text-base text-natural-stone dark:text-zinc-200">
        {artist}
      </p>
    </div>
  );
};

export default SongTitle;
