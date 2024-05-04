"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";

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
    <Button
      className={`focus:outline-none heart-icon-container bg-pink-200 text-black/90 hover:bg-pink-300 ${
        liked ? "liked" : ""
      }`}
      onClick={toggleLike}
    >
      <span className="flex items-center gap-2">
        <FaHeart
          className={`heart-icon ${liked ? "animate-heart" : ""}`}
          style={{ animationIterationCount: liked ? "6" : "0" }}
        />
        <p className="text-base">
          <span className="">{likeCount}</span>
        </p>
      </span>
    </Button>
  );
};

export default HeartIcon;
