import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const EmbedVideo = ({ videoId, platform }) => {
  let embedUrl = "";
  switch (platform) {
    case "youtube":
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
      break;
    case "facebook":
      embedUrl = `https://www.facebook.com/video/embed?video_id=${videoId}`;
      break;
    case "twitch":
      embedUrl = `https://player.twitch.tv/?video=${videoId}`;
      break;
    case "vimeo":
      embedUrl = `https://player.vimeo.com/video/${videoId}`;
      break;
    default:
      return null;
  }
  return (
    <div className="flex w-full">
      <ReactPlayer className="react-player" url={embedUrl} width="100%" />
    </div>
  );
};

export default EmbedVideo;
