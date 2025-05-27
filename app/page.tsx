"use client";

import { Lecture, lectures } from "@/app/lectures";
import LocalVideo from "@/app/LocalVideo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            className="lg:min-w-1/2 lg:max-w-1/2 h-fit w-full aspect-video border"
            src={activeLecture.src}
            subs={activeLecture.subs}
            poster={activeLecture.poster}
          />
        ) : (
          <div className="lg:min-w-1/2 lg:max-w-1/2 h-fit w-full aspect-video border flex items-center justify-center bg-gray-100">
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
          {activeLecture ? (
            <>
              <h2 className="text-2xl font-semibold">{activeLecture.title}</h2>
              {activeLecture.description}
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">How to Start a Startup</h2>
              <p>
                <em>Click on</em> any of the videos below to watch.
              </p>
              <p>
                Video descriptions include links to transcripts, readings, and discussion forum, in
                this side panel.
              </p>

              <p>
                After you have clicked on a video, description and additional resources will appear.
              </p>
            </>
          )}
        </div>
      </div>
      <ol className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-rows-4 grid gap-5 place-items-stretch">
        {lectures.map((lecture) => (
          <li
            key={lecture.title}
            className={`hover:cursor-pointer`}
            onClick={() => setActiveLecture({ ...lecture })}
            title={lecture.title}
          >
            <Image
              src={lecture.poster}
              className={`object-cove border border-black hover:opacity-70 ${lecture.title === activeLecture?.title ? "outline-4 outline-blue-500 border-blue-500" : ""}`}
              width={1280}
              height={720}
              alt={lecture.title + " thumbnail"}
            />
            <p className="my-2">{lecture.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
