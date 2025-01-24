import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
};

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isShuffleOn, setIsShuffleOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5173/api/v1/playlist");
      const data: Song[] = await response.json();
      setPlaylist(data);
      setCurrentSongIndex(0);
      setLoading(false);
    };

    fetchPlaylist();
  }, []);
  const toggleShuffle = () => setIsShuffleOn((prev) => !prev);
  if (loading) {
    return <div>Loading</div>;
  }
  if (!playlist.length) {
    return <div>No songs</div>;
  }

  return (
    <div className="flex flex-col w-full sm:flex-row">
      <CurrentlyPlaying
        songId={playlist[currentSongIndex].id}
        currentSongIndex={currentSongIndex}
        playlistLength={playlist.length}
        isShuffleOn={isShuffleOn}
        toggleShuffle={toggleShuffle}
        onChangeSong={setCurrentSongIndex}
      />
      <Playlist
        playlist={playlist}
        currentSongId={playlist[currentSongIndex].id}
        onSongSelect={(id) => {
          const newIndex = playlist.findIndex((song) => song.id === id);
          if (newIndex !== -1) {
            setCurrentSongIndex(newIndex);
          }
        }}
      />
    </div>
  );
}
