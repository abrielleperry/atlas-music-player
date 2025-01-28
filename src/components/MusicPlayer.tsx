import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
};

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isShuffleOn, setIsShuffleOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);
        setCurrentSongIndex(0);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const toggleShuffle = () => setIsShuffleOn((prev) => !prev);

  console.log("Current song index:", currentSongIndex);
  console.log("Current song:", playlist[currentSongIndex]);
  if (loading) {
    return <LoadingSkeleton />;
  }
  if (!playlist.length) {
    return <div>No songs</div>;
  }

  return (
    <div className="flex flex-col w-full sm:flex-row">
      <CurrentlyPlaying
        songId={playlist[currentSongIndex]?.id || ""}
        currentSongIndex={currentSongIndex}
        playlistLength={playlist.length}
        isShuffleOn={isShuffleOn}
        toggleShuffle={toggleShuffle}
        onChangeSong={setCurrentSongIndex}
        volume={volume}
        setVolume={setVolume}
        isPlaying={isPlaying}
        togglePlayPause={() => setIsPlaying((prev) => !prev)}
        playbackSpeed={playbackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
      />
      <Playlist
        playlist={playlist}
        currentSongId={playlist[currentSongIndex]?.id || ""}
        onSongSelect={(id) => {
          const newIndex = playlist.findIndex((song) => song.id === id);
          if (newIndex !== -1) {
            setCurrentSongIndex(newIndex);
            setIsPlaying(true);
          }
        }}
      />
    </div>
  );
}
