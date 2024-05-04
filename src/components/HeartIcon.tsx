"use client";

import {  useState } from "react";

import { FaHeart } from "react-icons/fa6";

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`focus:outline-none heart-icon-container ${
        liked ? "liked" : ""
      }`}
      onClick={toggleLike}
    >
      <FaHeart
        className={`heart-icon ${liked ? "animate-heart" : ""}`}
        style={{ animationIterationCount: liked ? "3" : "0" }}
      />
    </button>
  );
};

export default HeartIcon;
