import React from "react";
import PlaceHolderImage from "../assets/placeholder.svg";

type CoverArtProps = {
  coverUrl: string | null;
  loading: boolean;
};

const CoverArt: React.FC<CoverArtProps> = ({ coverUrl }) => {
  return (
    <div className="shadow-lg shadow-coral">
      <img src={coverUrl || PlaceHolderImage} alt="Cover art image" />
    </div>
  );
};

export default CoverArt;
