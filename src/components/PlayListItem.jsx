import React from "react";

export default function PlayListItem() {
  return (
    <div>
      <div className="font-light tracking-wide shadow-md text-xl  subpixel-antialiased text-white p-3 mb-2 rounded-t-lg bg-green dark:bg-golden-yellow  ">
        Playlist
      </div>

      <div className="flex flex-col gap-y-4">
        {[
          { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
          { title: "Title Drift", artist: "Echos of Seas", length: "8:02" },
          { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
          { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
          {
            title: "Urban Serenade",
            artist: "Midnight Groove",
            length: "4:54",
          },
          {
            title: "Whispers in the Wind",
            artist: "Rust & Ruin",
            length: "6:13",
          },
          { title: "Electric Fever", artist: "Neon Jungle", length: "8:41" },
          {
            title: "Edge of the Abyss",
            artist: "Steel Horizon",
            length: "2:27",
          },
          { title: "Golden Haze", artist: "Velvet Waves", length: "3:15" },
          {
            title: "Shatter the Silence",
            artist: "Thunderclap Echo",
            length: "8:22",
          },
        ].map((song, index) => (
          <div
            key={index}
            className="flex items-center bg-neutral-50 dark:bg-white shadow-md hover:scale-105 p-1 rounded-lg transition duration-200 px-4"
          >
            <div className="flex-1">
              <p className="font-thin subpixel-antialiased text-base text-black">
                {song.title}
              </p>
              <p className="text-sm font-normal subpixel-antialiased  text-natural-stone  dark:text-neutral-700">
                {song.artist}
              </p>
            </div>
            <div className="text-right  text-sm font-normal subpixel-antialiased  text-natural-stone dark:text-neutral-700">
              {song.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
