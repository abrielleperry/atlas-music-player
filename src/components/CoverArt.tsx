import React from "react";
import PlaceHolderImage from "../assets/placeholder.svg";

type CoverArtProps = {
  coverUrl: string | null;
  loading: boolean;
};

const CoverArt: React.FC<CoverArtProps> = ({ coverUrl, loading }) => {
  return (
    <div className="shadow-lg shadow-coral">
      <img
        src={loading || !coverUrl ? PlaceHolderImage : coverUrl}
        alt="Cover art image"
      />
    </div>
  );
};

export default CoverArt;
