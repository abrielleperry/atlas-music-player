import React from "react";
import PlayListItem from "./PlayListItem";
import SongTitle from "./SongTitle";

type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
};

type PlaylistProps = {
  playlist: Song[];
  currentSongId: string | null;
  onSongSelect: (id: string) => void;
};

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  currentSongId,
  onSongSelect,
}) => {
  return (
    <div className="flex flex-col flex-1 px-6 ">
      <div className="relative ">
        <div className="absolute top-10 -left-4 w-80 h-80  bg-orange-sunset rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 -right-10 w-80 h-80 bg-coral  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-2 left-20 w-80 h-80 bg-golden-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative  ">
          <div className="font-light tracking-wide shadow-md text-xl  subpixel-antialiased text-white p-3 mb-2 rounded-t-lg bg-green dark:bg-golden-yellow  ">
            Playlist
          </div>
          {playlist.map((song) => (
            <PlayListItem
              key={song.id}
              song={song}
              isSelected={song.id === currentSongId}
              onClick={() => onSongSelect(song.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
