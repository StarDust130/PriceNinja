"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(68); // State to hold the like count

  const toggleLike = () => {
    setLiked(!liked);

    if (!liked) {
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      // Decrement like count when unliking
      setLikeCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <button
      className={`focus:outline-none heart-icon-container ${
        liked ? "liked" : ""
      }`}
      onClick={toggleLike}
    >
      <span className="flex items-center gap-2">
        <FaHeart
          className={`heart-icon ${liked ? "animate-heart" : ""}`}
          style={{ animationIterationCount: liked ? "3" : "0" }}
        />
        <p className="text-base  text-[#D46F77]">
          <span className="">{likeCount}</span>
        </p>
      </span>
    </button>
  );
};

export default HeartIcon;
