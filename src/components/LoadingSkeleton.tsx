import React from "react";
import { Shuffle, Rewind, Play, FastForward, Volume2 } from "lucide-react";

export default function LoadingSkeleton() {
  return (
    <div
      role="status"
      className="flex p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div className="flex flex-col  flex-1 p-6 border-b sm:border-b-0 sm:border-r border-gray-200 ">
        <div className="flex-1 items-center justify-center  mb-4 bg-gray-200 rounded dark:bg-gray-700"></div>
        <div className="h-5 bg-gray-200  dark:bg-gray-700 w-40 mb-4"></div>
        <div className="h-5 bg-gray-200  dark:bg-gray-700 w-20 mb-4"></div>

        <div className="player-controls flex justify-between gap-2 rounded-xl p-4 items-center text-black dark:text-white">
          <div className="text-gray-700 text-lg">1x</div>
          <div>
            <Rewind fill="gray" stroke="gray" />
          </div>
          <div>
            <Play fill="gray" stroke="gray" />
          </div>
          <div>
            <FastForward fill="gray" stroke="gray" />
          </div>
          <div>
            <Shuffle stroke="gray" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-row items-center gap-2 py-6">
            <Volume2 fill="gray" stroke="gray" />

            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0"
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 ">
        <div className="p-3 font-bold text-xl">Playlist</div>
        <div className="flex-row-2 gap-y-4 p-3">
          <div className="flex flex-col gap-y-4">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-center   ">
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 w-40 mb-4"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 w-20 "></div>
                  </div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 w-10 mb-4"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
