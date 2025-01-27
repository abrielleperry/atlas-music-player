import React, { useRef, useEffect } from "react";

type AudioPlayerProps = {
  songUrl: string;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  onSongEnd: () => void;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  songUrl,
  isPlaying,
  volume,
  playbackSpeed,
  onSongEnd,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = playbackSpeed;
  }, [playbackSpeed]);

  useEffect(() => {
    if (!audioRef.current) return;
    const handleEnded = () => onSongEnd();
    audioRef.current.addEventListener("ended", handleEnded);
    return () => {
      audioRef.current?.removeEventListener("ended", handleEnded);
    };
  }, [onSongEnd]);

  return (
    <audio
      ref={audioRef}
      src={songUrl}
      preload="metadata"
      style={{ display: "none" }}
    />
  );
};

export default AudioPlayer;
