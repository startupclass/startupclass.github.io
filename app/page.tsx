"use client";

import LocalVideo from "@/app/LocalVideo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Lecture {
  title: string;
  src: string;
  subs?: string;
  poster: string;
  description: string;
}

const lectures: Lecture[] = [
  {
    title: "Lecture 1 - How to Start a Startup (Sam Altman, Dustin Moskovitz)",
    src: "/lectures/lecture-1/lecture.mp4",
    subs: "/lectures/lecture-1/subs.vtt",
    poster: "/lectures/lecture-1/poster.png",
    description: "Lecture 1: Introduction to Startups",
  },
  {
    title: "Lecture 2 - Team and Execution (Sam Altman)",
    src: "/lectures/lecture-2/lecture.mp4",
    subs: "/lectures/lecture-2/subs.vtt",
    poster: "/lectures/lecture-2/poster.png",
    description: "Lecture 2: Idea Generation and Validation",
  },
  {
    title: "Lecture 3 - Before the Startup (Paul Graham)",
    src: "/lectures/lecture-3/lecture.mp4",
    subs: "/lectures/lecture-3/subs.vtt",
    poster: "/lectures/lecture-3/poster.png",
    description: "Lecture 3: Product Development",
  },
  {
    title: "Lecture 4 - Building Product, Talking to Users, and Growing (Adora Cheung)",
    src: "/lectures/lecture-4/lecture.mp4",
    subs: "/lectures/lecture-4/subs.vtt",
    poster: "/lectures/lecture-4/poster.png",
    description: "Lecture 4: Market Fit and Growth",
  },
  {
    title: "Lecture 5 - Competition is for Losers (Peter Thiel)",
    src: "/lectures/lecture-5/lecture.mp4",
    subs: "/lectures/lecture-5/subs.vtt",
    poster: "/lectures/lecture-5/poster.png",
    description: "Lecture 5: Competitive Strategy",
  },
  {
    title: "Lecture 6 - Growth (Alex Schultz)",
    src: "/lectures/lecture-6/lecture.mp4",
    subs: "/lectures/lecture-6/subs.vtt",
    poster: "/lectures/lecture-6/poster.png",
    description: "Lecture 6: User Experience and Design",
  },
  {
    title: "Lecture 7 - How to Build Products Users Love (Kevin Hale)",
    src: "/lectures/lecture-7/lecture.mp4",
    subs: "/lectures/lecture-7/subs.vtt",
    poster: "/lectures/lecture-7/poster.png",
    description: "Lecture 7: Fundraising Strategies",
  },
  {
    title: "Lecture 8 - How to Get Started, Doing Things that Don't Scale, Press",
    src: "/lectures/lecture-8/lecture.mp4",
    subs: "/lectures/lecture-8/subs.vtt",
    poster: "/lectures/lecture-8/poster.png",
    description: "Lecture 8: Legal Considerations for Startups",
  },
  {
    title: "Lecture 9 - How to Raise Money (Marc Andreessen, Ron Conway, Parker Conrad)",
    src: "/lectures/lecture-9/lecture.mp4",
    subs: "/lectures/lecture-9/subs.vtt",
    poster: "/lectures/lecture-9/poster.png",
    description: "Lecture 9: Fundraising and Investor Relations",
  },
  {
    title: "Lecture 10 - Culture (Brian Chesky, Alfred Lin)",
    src: "/lectures/lecture-10/lecture.mp4",
    subs: "/lectures/lecture-10/subs.vtt",
    poster: "/lectures/lecture-10/poster.png",
    description: "Lecture 10: The Future of Startups and Entrepreneurship",
  },
  {
    title: "Lecture 11 - The Future of Startups (Sam Altman)",
    src: "/lectures/lecture-11/lecture.mp4",
    subs: "/lectures/lecture-11/subs.vtt",
    poster: "/lectures/lecture-11/poster.png",
    description: "Lecture 11: Wrap-up and Key Takeaways",
  },
];

export default function Home() {
  const [activeLecture, setActiveLecture] = React.useState<Lecture>();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p>
          <em>How to Start a Startup</em> is a series of video lectures, initially given at Stanford
          in Fall 2014 and formerly hosted on <em>startupclass.samaltman.com</em>. Videos (under{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nc-nd/2.5"
            className="text-blue-500 hover:underline"
          >
            Creative Commons
          </Link>
          ) are below, and you can also check out the additional resources. This great resource has
          disappeared from the web some time in March 2025 and was resurrected by{" "}
          <Link href="https://stanislav.gq" className="text-blue-500 hover:underline">
            Stanislav Modrak
          </Link>{" "}
          using the Wayback Machine, YouTube and various GitHub repositories.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {activeLecture ? (
          <LocalVideo
            className="lg:w-1/2 w-full aspect-video border"
            src={activeLecture.src}
            subs={activeLecture.subs}
            poster={activeLecture.poster}
          />
        ) : (
          <div className="lg:w-1/2 w-full aspect-video border flex items-center justify-center">
            <svg
              onClick={() => setActiveLecture({ ...lectures[0] })}
              className="hover:cursor-pointer hover:opacity-70"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        )}

        <div className="flex-col p-2 gap-2 flex">
          <h2 className="text-2xl font-semibold">How to Start a Startup</h2>
          <p>Click on any of the videos below to watch.</p>

          <p>
            Video descriptions include links to transcripts, readings, and discussion forum, in this
            side panel.
          </p>

          <p>Hovering over the video will show its description.</p>
        </div>
      </div>
      <ol className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-rows-4 grid gap-5 place-items-stretch">
        {lectures.map((lecture) => (
          <li
            key={lecture.title}
            className={` hover:cursor-pointer hover:opacity-70 ${lecture.title === activeLecture?.title ? "outline-4 outline-blue-500" : "border"}`}
            onClick={() => setActiveLecture({ ...lecture })}
          >
            <Image
              src={lecture.poster}
              width={1280}
              height={720}
              alt={lecture.title + " thumbnail"}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
