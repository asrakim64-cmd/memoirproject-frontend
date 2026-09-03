"use client";

import React, { useState } from "react";
import MemoirLayout from "../../features/FinalMemoir/MemoirLayout";

interface WrittenMemory {
  id: string;
  title: string;
  author: string;
  relation: string;
  year: string;
  text: string;
  imageUrl?: string;
  imageCaption?: string;
}

interface VoiceMemory {
  id: string;
  title: string;
  author: string;
  relation: string;
  duration: string;
  transcription: string;
}

interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption: string;
  year: string;
}

const writtenMemory: WrittenMemory = {
  id: "written-1",
  title: "The Quiet Mornings",
  author: "Sara",
  relation: "Daughter",
  year: "1994",
  text: "Dad always woke up before the sun. He claimed it was to get a head start on the day, but I think he just liked the quiet before the house woke up.",
  imageUrl: "/api/placeholder/800/600",
  imageCaption: "In the garden, summer of '94",
};

const voiceMemory: VoiceMemory = {
  id: "voice-1",
  title: "A Voice I Still Remember",
  author: "Michael",
  relation: "Son",
  duration: "0:42",
  transcription:
    "I still remember those early mornings. Dad would wake up before everyone else and sit quietly with his coffee. Those were simple moments, but they are some of the memories I miss the most.",
};

const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    type: "photo",
    title: "Summer in the garden",
    caption: "One of those ordinary days that became unforgettable.",
    year: "1994",
  },
  {
    id: "media-2",
    type: "photo",
    title: "Family afternoon",
    caption: "Everyone together, just as we remember it.",
    year: "1998",
  },
  {
    id: "media-3",
    type: "video",
    title: "A Sunday together",
    caption: "A small moment preserved in motion.",
    year: "2001",
  },
];

export default function FinalMemoirPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MemoirLayout>
      <div className="w-full">

        {/* =========================================================
            MEMOIR OPENING
        ========================================================= */}
        <section className="relative min-h-[620px] flex flex-col items-center justify-center text-center px-6 py-24">
          {/* Decorative line */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-16 bg-memory-maroon/30" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-memory-maroon">
              A Life Remembered
            </span>
            <div className="h-px w-16 bg-memory-maroon/30" />
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-memory-muted">
            The memoir of
          </p>

          <h2 className="font-serif text-5xl md:text-7xl text-memory-primary tracking-tight">
            Robert
          </h2>

          <div className="my-7 h-px w-20 bg-memory-maroon/40" />

          <p className="font-serif text-lg md:text-xl italic text-memory-muted max-w-xl leading-relaxed">
            A collection of stories, voices, photographs, and little moments
            that together tell the story of a life.
          </p>

          <div className="mt-12 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-memory-muted">
              1942 — 2024
            </span>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("the-story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-memory-maroon"
            >
              <span className="border-b border-memory-maroon/30 pb-1 group-hover:border-memory-maroon transition-colors">
                Begin reading
              </span>

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </button>
          </div>
        </section>

        {/* =========================================================
            THE STORY
        ========================================================= */}
        <section id="the-story" className="scroll-mt-28">

          {/* Chapter introduction */}
          <div className="py-24 text-center border-y border-memory-maroon/10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-memory-maroon mb-4">
              Chapter I
            </p>

            <h3 className="font-serif text-3xl md:text-4xl text-memory-primary">
              The Early Years
            </h3>

            <p className="mt-4 max-w-lg mx-auto font-serif italic text-memory-muted leading-relaxed">
              Before the big milestones, there were mornings, gardens,
              conversations, and the ordinary moments that became precious.
            </p>
          </div>

          {/* =======================================================
              WRITTEN MEMORY
          ======================================================= */}
          <article className="py-24 md:py-32">

            <div className="mb-12 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-memory-muted">
                Written memory
              </span>

              <div className="mx-auto mt-4 h-px w-10 bg-memory-maroon/30" />
            </div>

            <div className="max-w-3xl mx-auto">

              {/* Memory title */}
              <div className="text-center mb-12">
                <h4 className="font-serif text-3xl md:text-4xl text-memory-primary">
                  {writtenMemory.title}
                </h4>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-memory-muted">
                  {writtenMemory.year} · {writtenMemory.author},{" "}
                  {writtenMemory.relation}
                </p>
              </div>

              {/* Editorial story */}
              <div className="relative">

                <span className="absolute -left-4 md:-left-12 -top-8 font-serif text-7xl text-memory-maroon/20">
                  “
                </span>

                <p className="font-serif text-xl md:text-2xl leading-[1.9] text-stone-700 text-center">
                  {writtenMemory.text}
                </p>

                <span className="block text-right font-serif text-7xl text-memory-maroon/20 leading-none">
                  ”
                </span>
              </div>

              {/* Small contextual photograph */}
              <div className="mt-16 flex justify-center">
                <figure className="w-full max-w-md">

                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-memory-maroon/10 via-stone-100 to-memory-maroon/5 border border-memory-maroon/15">

                    {writtenMemory.imageUrl ? (
                      <img
                        src={writtenMemory.imageUrl}
                        alt={writtenMemory.imageCaption || "Family memory"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em] text-memory-muted">
                          Family photograph
                        </span>
                      </div>
                    )}
                  </div>

                  <figcaption className="mt-4 text-center font-serif italic text-sm text-memory-muted">
                    {writtenMemory.imageCaption}
                  </figcaption>
                </figure>
              </div>

              {/* Quiet metadata */}
              <div className="mt-14 flex justify-center">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-memory-muted">
                  <span>Written by {writtenMemory.author}</span>
                  <span className="h-1 w-1 rounded-full bg-memory-maroon/40" />
                  <span>A family memory</span>
                </div>
              </div>
            </div>
          </article>

          {/* =======================================================
              VOICE MEMORY
          ======================================================= */}
          <article className="py-24 md:py-32 bg-memory-maroon/[0.025] border-y border-memory-maroon/10">

            <div className="max-w-3xl mx-auto px-6">

              <div className="mb-12 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-memory-maroon">
                  Voice memory
                </span>

                <div className="mx-auto mt-4 h-px w-10 bg-memory-maroon/30" />
              </div>

              {/* Voice heading */}
              <div className="text-center mb-12">
                <h4 className="font-serif text-3xl md:text-4xl text-memory-primary">
                  {voiceMemory.title}
                </h4>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-memory-muted">
                  {voiceMemory.author} · {voiceMemory.relation}
                </p>
              </div>

              {/* Audio experience */}
              <div className="relative overflow-hidden border border-memory-maroon/15 bg-white shadow-[0_20px_60px_rgba(90,24,39,0.06)]">

                <div className="px-7 md:px-12 py-10">

                  {/* Audio label */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-memory-muted">
                      Recorded memory
                    </span>

                    <span className="text-[10px] uppercase tracking-wider text-memory-maroon">
                      {voiceMemory.duration}
                    </span>
                  </div>

                  {/* Player */}
                  <div className="flex items-center gap-6">

                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="shrink-0 w-14 h-14 rounded-full bg-memory-maroon text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
                      aria-label={isPlaying ? "Pause recording" : "Play recording"}
                    >
                      <span className="text-sm">
                        {isPlaying ? "❚❚" : "▶"}
                      </span>
                    </button>

                    <div className="flex-1">

                      <div className="flex items-center gap-[5px] h-8">
                        {[3, 7, 5, 10, 6, 12, 8, 16, 9, 13, 6, 11, 8, 15, 5, 10, 7, 13, 4, 9, 6, 12, 5, 8].map(
                          (height, index) => (
                            <div
                              key={index}
                              className={`flex-1 rounded-full bg-memory-maroon/25 transition-all duration-500 ${
                                isPlaying
                                  ? "animate-pulse bg-memory-maroon/50"
                                  : ""
                              }`}
                              style={{ height: `${height}px` }}
                            />
                          )
                        )}
                      </div>

                      <div className="flex justify-between mt-3 text-[10px] font-mono text-memory-muted">
                        <span>{isPlaying ? "0:14" : "0:00"}</span>
                        <span>{voiceMemory.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="text-xs text-memory-muted italic">
                      Listen to Michael remembering his father in his own
                      voice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transcription */}
              <div className="mt-12">

                <div className="flex items-center gap-4 mb-7">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-memory-maroon">
                    Transcription
                  </span>

                  <div className="flex-1 h-px bg-memory-maroon/10" />
                </div>

                <blockquote className="relative pl-7 border-l-2 border-memory-maroon/25">
                  <p className="font-serif text-lg md:text-xl leading-[1.9] text-stone-700">
                    {voiceMemory.transcription}
                  </p>
                </blockquote>

                <p className="mt-6 text-right text-[10px] uppercase tracking-[0.2em] text-memory-muted">
                  — {voiceMemory.author}
                </p>
              </div>
            </div>
          </article>

          {/* =======================================================
              MEDIA MEMORIES
          ======================================================= */}
          <article className="py-24 md:py-32">

            <div className="max-w-4xl mx-auto px-6">

              <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-[0.3em] text-memory-maroon">
                  Media memories
                </span>

                <h4 className="mt-5 font-serif text-3xl md:text-4xl text-memory-primary">
                  Moments We Kept
                </h4>

                <p className="mt-4 max-w-lg mx-auto font-serif italic text-memory-muted leading-relaxed">
                  Some memories are written down. Others are best remembered
                  exactly as they were.
                </p>
              </div>

              {/* Media editorial grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {mediaItems.map((item, index) => (
                  <figure
                    key={item.id}
                    className={`group ${
                      index === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden border border-memory-maroon/10 bg-stone-100 ${
                        index === 0
                          ? "aspect-[16/8]"
                          : "aspect-[4/3]"
                      }`}
                    >

                      {/* Visual placeholder for now.
                          Real uploaded media can replace this later. */}
                      <div className="absolute inset-0 bg-gradient-to-br from-memory-maroon/10 via-stone-100 to-memory-maroon/5 flex items-center justify-center">

                        {item.type === "video" ? (
                          <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-memory-maroon group-hover:scale-110 transition-transform duration-500">
                            ▶
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="mx-auto mb-3 w-10 h-10 rounded-full border border-memory-maroon/20 flex items-center justify-center text-memory-maroon/50">
                              ✦
                            </div>

                            <span className="text-[10px] uppercase tracking-[0.25em] text-memory-muted">
                              Photograph
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <figcaption className="pt-5">
                      <div className="flex items-center justify-between gap-4">
                        <h5 className="font-serif text-lg text-memory-primary">
                          {item.title}
                        </h5>

                        <span className="text-[10px] uppercase tracking-wider text-memory-muted">
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-2 font-serif italic text-sm leading-relaxed text-memory-muted">
                        {item.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>

          {/* =======================================================
              CLOSING
          ======================================================= */}
          <section className="py-32 md:py-40 border-t border-memory-maroon/10 text-center">

            <div className="max-w-xl mx-auto px-6">

              <div className="mx-auto mb-8 h-8 w-px bg-memory-maroon/30" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-memory-maroon mb-6">
                The story continues
              </p>

              <h4 className="font-serif text-3xl md:text-4xl text-memory-primary">
                Some memories never really leave us.
              </h4>

              <p className="mt-6 font-serif italic leading-relaxed text-memory-muted">
                They live in the stories we tell, the voices we remember,
                and the moments we choose to keep.
              </p>

              <div className="mt-12 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-memory-maroon/20" />
                <span className="text-memory-maroon">✦</span>
                <div className="h-px w-12 bg-memory-maroon/20" />
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-memory-muted">
                Robert&apos;s Memoir · 1942 — 2024
              </p>
            </div>
          </section>

        </section>
      </div>
    </MemoirLayout>
  );
}