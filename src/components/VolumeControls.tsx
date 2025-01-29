import React from "react";
import { Slider } from "@material-tailwind/react";
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

      <Slider
        value={volume}
        onChange={(e) =>
          onVolumeChange(Number((e.target as HTMLInputElement).value))
        }
        min={0}
        max={100}
        aria-label="Volume control"
        className="text-olive-green"
        barClassName="bg-olive-green"
        thumbClassName="shadow-md [&::-webkit-slider-thumb]:bg-olive-green [&::-moz-range-thumb]:bg-olive-green"
        trackClassName="border border-olive-green/70 rounded dark:shadow-none"
      />
    </div>
  );
};

export default VolumeControls;
