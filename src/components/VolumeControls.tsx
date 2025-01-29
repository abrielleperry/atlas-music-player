import React from "react";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type VolumeControlsProps = {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
};

const VolumeControls: React.FC<VolumeControlsProps> = ({
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="flex flex-row items-center gap-2 p-6">
      <FontAwesomeIcon
        icon={faVolumeUp}
        className="text-black dark:text-white"
        aria-label="Volume Icon"
      />

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0"
        aria-label="Volume control"
      />
    </div>
  );
};

export default VolumeControls;
