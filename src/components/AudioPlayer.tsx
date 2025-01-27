import React, { useRef, useEffect } from "react";

type AudioPlayerProps = {
  songUrl: string | null;
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
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [volume, playbackSpeed]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && songUrl) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, songUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useEffect(() => {
    if (audioRef.current) {
      const handleEnded = () => {
        onSongEnd();
      };
      audioRef.current.addEventListener("ended", handleEnded);

      return () => {
        audioRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, [onSongEnd]);

  if (!songUrl) {
    return null;
  }

  return <audio ref={audioRef} src={songUrl} />;
};

export default AudioPlayer;
