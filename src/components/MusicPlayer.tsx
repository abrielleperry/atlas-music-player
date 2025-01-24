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
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5173/api/v1/playlist");
      const data: Song[] = await response.json();
      setPlaylist(data);
      setCurrentSongId(data[0]?.id || null);
      setLoading(false);
    };

    fetchPlaylist();
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  if (!playlist.length) {
    return <div>No songs</div>;
  }
  return (
    <div className="flex flex-col w-full sm:flex-row">
      {currentSongId && <CurrentlyPlaying songId={currentSongId} />}
      <Playlist
        playlist={playlist}
        currentSongId={currentSongId}
        onSongSelect={(id) => setCurrentSongId(id)}
      />
    </div>
  );
}
