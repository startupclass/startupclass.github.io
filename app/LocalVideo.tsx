"use client";

import { useState } from "react";

export default function LocalVideo({
  src,
  poster,
  className,
  subs,
}: {
  src: string;
  poster: string;
  className?: string;
  subs?: string;
}) {
  const [hover, setHover] = useState(false);

  // videos downloaded using https://yt1s.com.co/en78/
  return (
    <video
      className={className}
      controls={hover}
      controlsList={"nodownload noremoteplayback"}
      preload="auto"
      poster={poster}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <source src={src} type="video/mp4" />
      <track src={subs} kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
