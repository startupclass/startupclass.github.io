import Link from "next/link";
import React from "react";

export interface Lecture {
  title: string;
  src: string;
  subs?: string;
  poster: string;
  description: React.ReactNode;
}

export const lectures: Lecture[] = [
  {
    title: "Lecture 1 - How to Start a Startup (Sam Altman, Dustin Moskovitz)",
    src: "/lectures/lecture-1/lecture.mp4",
    subs: "/lectures/lecture-1/subs.vtt",
    poster: "/lectures/lecture-1/poster.webp",
    description: (
      <>
        <p>
          <strong>Lecture Transcript:</strong>{" "}
          <Link
            className="underline text-blue-500"
            href="https://tech.genius.com/Sam-altman-lecture-1-how-to-start-a-startup-annotated"
            target="_blank"
            rel="noopener noreferrer"
          >
            tech.genius.com/Sam-altman-lecture-1-how-to-start-a-startup-annotated
          </Link>
        </p>

        <p>
          <strong>Presenters:</strong> Sam Altman, President of Y Combinator; Dustin Moskovitz,
          Cofounder of Facebook, Asana, and Good Ventures.
        </p>

        <p>
          They kick off the <em>How to Start a Startup</em> course. Sam covers the first two of the
          four key areas: <em>Ideas</em>, <em>Products</em>, <em>Teams</em>, and <em>Execution</em>.
          Dustin discusses <em>Why to Start a Startup</em>.
        </p>

        <p>
          <strong>Slides &amp; Readings:</strong>{" "}
          <Link
            className="underline text-blue-500"
            href="https://startupclass.samaltman.com/courses/lec01"
            target="_blank"
            rel="noopener noreferrer"
          >
            startupclass.samaltman.com/courses/lec01
          </Link>
        </p>

        <p>
          <strong>Discuss this lecture:</strong>{" "}
          <Link
            className="underline text-blue-500"
            href="https://startupclass.co/courses/how-to-start-a-startup/lectures/64030"
            target="_blank"
            rel="noopener noreferrer"
          >
            startupclass.co/courses/how-to-start-a-startup/lectures/64030
          </Link>
        </p>

        <p>
          <small>
            This video is licensed under Creative Commons:{" "}
            <Link
              className="underline text-blue-500"
              href="https://creativecommons.org/licenses/by-nc-nd/2.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-NC-ND 2.5
            </Link>
          </small>
        </p>
      </>
    ),
  },
  {
    title: "Lecture 2 - Team and Execution (Sam Altman)",
    src: "/lectures/lecture-2/lecture.mp4",
    subs: "/lectures/lecture-2/subs.vtt",
    poster: "/lectures/lecture-2/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 3 - Before the Startup (Paul Graham)",
    src: "/lectures/lecture-3/lecture.mp4",
    subs: "/lectures/lecture-3/subs.vtt",
    poster: "/lectures/lecture-3/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 4 - Building Product, Talking to Users, and Growing (Adora Cheung)",
    src: "/lectures/lecture-4/lecture.mp4",
    subs: "/lectures/lecture-4/subs.vtt",
    poster: "/lectures/lecture-4/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 5 - Competition is for Losers (Peter Thiel)",
    src: "/lectures/lecture-5/lecture.mp4",
    subs: "/lectures/lecture-5/subs.vtt",
    poster: "/lectures/lecture-5/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 6 - Growth (Alex Schultz)",
    src: "/lectures/lecture-6/lecture.mp4",
    subs: "/lectures/lecture-6/subs.vtt",
    poster: "/lectures/lecture-6/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 7 - How to Build Products Users Love (Kevin Hale)",
    src: "/lectures/lecture-7/lecture.mp4",
    subs: "/lectures/lecture-7/subs.vtt",
    poster: "/lectures/lecture-7/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 8 - How to Get Started, Doing Things that Don't Scale, Press",
    src: "/lectures/lecture-8/lecture.mp4",
    subs: "/lectures/lecture-8/subs.vtt",
    poster: "/lectures/lecture-8/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 9 - How to Raise Money (Marc Andreessen, Ron Conway, Parker Conrad)",
    src: "/lectures/lecture-9/lecture.mp4",
    subs: "/lectures/lecture-9/subs.vtt",
    poster: "/lectures/lecture-9/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 10 - Culture (Brian Chesky, Alfred Lin)",
    src: "/lectures/lecture-10/lecture.mp4",
    subs: "/lectures/lecture-10/subs.vtt",
    poster: "/lectures/lecture-10/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 11 - Hiring and Culture, Part 2 (Patrick and John Collison, Ben Silbermann)",
    src: "/lectures/lecture-11/lecture.mp4",
    subs: "/lectures/lecture-11/subs.vtt",
    poster: "/lectures/lecture-11/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 12 - Building for the Enterprise (Aaron Levie)",
    src: "/lectures/lecture-12/lecture.mp4",
    subs: "/lectures/lecture-12/subs.vtt",
    poster: "/lectures/lecture-12/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 13 - How to be a Great Founder (Reid Hoffman)",
    src: "/lectures/lecture-13/lecture.mp4",
    subs: "/lectures/lecture-13/subs.vtt",
    poster: "/lectures/lecture-13/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 14 - How to Operate (Keith Rabois)",
    src: "/lectures/lecture-14/lecture.mp4",
    subs: "/lectures/lecture-14/subs.vtt",
    poster: "/lectures/lecture-14/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 15 - How to Manage (Ben Horowitz)",
    src: "/lectures/lecture-15/lecture.mp4",
    subs: "/lectures/lecture-15/subs.vtt",
    poster: "/lectures/lecture-15/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 16 - How to Run a User Interview (Emmett Shear)",
    src: "/lectures/lecture-16/lecture.mp4",
    subs: "/lectures/lecture-16/subs.vtt",
    poster: "/lectures/lecture-16/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 17 - How to Design Hardware Products (Hosain Rahman)",
    src: "/lectures/lecture-17/lecture.mp4",
    subs: "/lectures/lecture-17/subs.vtt",
    poster: "/lectures/lecture-17/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 18 - Legal and Accounting Basics for Startups (Kirsty Nathoo, Carolynn Levy)",
    src: "/lectures/lecture-18/lecture.mp4",
    subs: "/lectures/lecture-18/subs.vtt",
    poster: "/lectures/lecture-18/poster.webp",
    description: <></>,
  },
  {
    title:
      "Lecture 19 - Sales and Marketing; How to Talk to Investors (Tyler Bosmeny; YC Partners)",
    src: "/lectures/lecture-19/lecture.mp4",
    subs: "/lectures/lecture-19/subs.vtt",
    poster: "/lectures/lecture-19/poster.webp",
    description: <></>,
  },
  {
    title: "Lecture 20 - Later-stage Advice (Sam Altman)",
    src: "/lectures/lecture-20/lecture.mp4",
    subs: "/lectures/lecture-20/subs.vtt",
    poster: "/lectures/lecture-20/poster.webp",
    description: <></>,
  },
];
