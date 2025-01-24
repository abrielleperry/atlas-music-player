import React from "react";
import { Slider } from "@material-tailwind/react";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VolumeControls() {
  return (
    <div className=" flex flex-row items-center gap-2 p-4">
      <FontAwesomeIcon
        icon={faVolumeUp}
        className="fill-black text-black dark:text-white dark:fill-white"
      />

      <Slider
        defaultValue={50}
        className="text-green"
        barClassName="bg-green"
        thumbClassName="shadow-md  [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:bg-green [&::-moz-range-thumb]:bg-green"
        trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-gray-200 border border-green/70 rounded dark:shadow-none"
      />
    </div>
  );
}
