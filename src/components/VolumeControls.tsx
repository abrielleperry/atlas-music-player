import React from "react";
import { Slider } from "@material-tailwind/react";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type VolumeControlsProps = {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
} & React.ComponentPropsWithoutRef<typeof Slider>;

const VolumeControls: React.FC<VolumeControlsProps> = ({
  volume,
  onVolumeChange,
  ...props
}) => {
  return (
    <div className="flex flex-row content-center gap-2 p-4">
      <FontAwesomeIcon
        icon={faVolumeUp}
        className="fill-black text-black dark:text-white dark:fill-white"
      />

      <Slider
        defaultValue={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        min={0}
        max={100}
        className="text-olive-green"
        barClassName="bg-olive-green rounded"
        thumbClassName="[&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:bg-olive-green [&::-moz-range-thumb]:bg-olive-green"
        trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-gray-200 border border-olive-green/70 rounded dark:shadow-none"
      />
    </div>
  );
};

export default VolumeControls;
