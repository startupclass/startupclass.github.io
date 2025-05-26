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
    title: "Lecture 11 - Hiring and Culture, Part 2 (Patrick and John Collison, Ben Silbermann)",
    src: "/lectures/lecture-11/lecture.mp4",
    subs: "/lectures/lecture-11/subs.vtt",
    poster: "/lectures/lecture-11/poster.png",
    description: "Lecture 11: Wrap-up and Key Takeaways",
  },
  {
    title: "Lecture 12 - Building for the Enterprise (Aaron Levie)",
    src: "/lectures/lecture-12/lecture.mp4",
    subs: "/lectures/lecture-12/subs.vtt",
    poster: "/lectures/lecture-12/poster.png",
    description: "Lecture 12: Final Thoughts and Resources",
  },
  {
    title: "Lecture 13 - How to be a Great Founder (Reid Hoffman)",
    src: "/lectures/lecture-13/lecture.mp4",
    subs: "/lectures/lecture-13/subs.vtt",
    poster: "/lectures/lecture-13/poster.png",
    description: "Lecture 13: How to Start a Startup - Recap and Future Directions",
  },
  {
    title: "Lecture 14 - How to Operate (Keith Rabois)",
    src: "/lectures/lecture-14/lecture.mp4",
    subs: "/lectures/lecture-14/subs.vtt",
    poster: "/lectures/lecture-14/poster.png",
    description: "Lecture 14: How to Start a Startup - Final Recap and Resources",
  },
  {
    title: "Lecture 15 - How to Manage (Ben Horowitz)",
    src: "/lectures/lecture-15/lecture.mp4",
    subs: "/lectures/lecture-15/subs.vtt",
    poster: "/lectures/lecture-15/poster.png",
    description: "Lecture 15: How to Start a Startup - Conclusion and Next Steps",
  },
  {
    title: "Lecture 16 - How to Run a User Interview (Emmett Shear)",
    src: "/lectures/lecture-16/lecture.mp4",
    subs: "/lectures/lecture-16/subs.vtt",
    poster: "/lectures/lecture-16/poster.png",
    description: "Lecture 16: How to Start a Startup - Final Thoughts and Resources",
  },
  {
    title: "Lecture 17 - How to Design Hardware Products (Hosain Rahman)",
    src: "/lectures/lecture-17/lecture.mp4",
    subs: "/lectures/lecture-17/subs.vtt",
    poster: "/lectures/lecture-17/poster.png",
    description: "Lecture 17: How to Start a Startup - Final Recap and Resources",
  },
  {
    title: "Lecture 18 - Legal and Accounting Basics for Startups (Kirsty Nathoo, Carolynn Levy)",
    src: "/lectures/lecture-18/lecture.mp4",
    subs: "/lectures/lecture-18/subs.vtt",
    poster: "/lectures/lecture-18/poster.png",
    description: "Lecture 18: How to Start a Startup - Conclusion and Next Steps",
  },
  {
    title:
      "Lecture 19 - Sales and Marketing; How to Talk to Investors (Tyler Bosmeny; YC Partners)",
    src: "/lectures/lecture-19/lecture.mp4",
    subs: "/lectures/lecture-19/subs.vtt",
    poster: "/lectures/lecture-19/poster.png",
    description: "Lecture 19: How to Start a Startup - Final Thoughts and Resources",
  },
  {
    title: "Lecture 20 - Later-stage Advice (Sam Altman)",
    src: "/lectures/lecture-20/lecture.mp4",
    subs: "/lectures/lecture-20/subs.vtt",
    poster: "/lectures/lecture-20/poster.png",
    description: "Lecture 20: How to Start a Startup - Final Recap and Resources",
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
            key={activeLecture.title}
            className="lg:min-w-1/2 lg:max-w-1/2 w-full aspect-video border"
            src={activeLecture.src}
            subs={activeLecture.subs}
            poster={activeLecture.poster}
          />
        ) : (
          <div className="lg:min-w-1/2 lg:max-w-1/2 w-full aspect-video border flex items-center justify-center bg-gray-100">
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
          <h2 className="text-2xl font-semibold">
            {activeLecture ? activeLecture.title : "How to Start a Startup"}
          </h2>
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
              className="object-cover h-full w-auto"
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
