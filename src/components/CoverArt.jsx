import React from "react";
import PlaceHolderImage from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="shadow-lg shadow-coral">
      <img src={PlaceHolderImage} alt="Place holder image" />
    </div>
  );
}
