import React, { useEffect, useState } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
};

type CurrentlyPlayingProps = {
  songId: string;
  currentSongIndex: number;
  playlistLength: number;
  isShuffleOn: boolean;
  toggleShuffle: () => void;
  onChangeSong: (newIndex: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  songId,
  currentSongIndex,
  playlistLength,
  isShuffleOn,
  toggleShuffle,
  onChangeSong,
}) => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(50);
  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5173/api/v1/songs/${songId}`
      );
      const data: Song = await response.json();
      setSong(data);
      setLoading(false);
    };
    fetchSong();
  }, [songId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!song) {
    return <div>Song not found</div>;
  }
  return (
    <div className="flex flex-col flex-1 px-6 border-b sm:border-b-0 sm:border-r border-gray-200 rounded">
      <CoverArt coverUrl={song?.cover || null} loading={loading} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls
        currentSongIndex={currentSongIndex}
        playlistLength={playlistLength}
        isShuffleOn={isShuffleOn}
        toggleShuffle={toggleShuffle}
        onChangeSong={onChangeSong}
      />
      <VolumeControls
        volume={volume}
        onVolumeChange={(newVolume) => setVolume(newVolume)}
      />{" "}
    </div>
  );
};

export default CurrentlyPlaying;
