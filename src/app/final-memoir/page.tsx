"use client";

import React, { useEffect, useRef, useState } from "react";
import MemoirLayout from "../../features/FinalMemoir/MemoirLayout";

/* -------------------------------------------------------------------------- */
/* Voice Memory - Frontend only                                               */
/* -------------------------------------------------------------------------- */

function VoiceMemory() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;
      chunksRef.current = [];

      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: "audio/webm",
        });

        const url = URL.createObjectURL(blob);

        setAudioUrl((previousUrl) => {
          if (previousUrl) {
            URL.revokeObjectURL(previousUrl);
          }

          return url;
        });

        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();

      setRecordingTime(0);
      setIsRecording(true);

      timerRef.current = setInterval(() => {
        setRecordingTime((time) => time + 1);
      }, 1000);
    } catch (error) {
      console.error("Microphone access failed:", error);
      alert("Please allow microphone access to record your memory.");
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;

    mediaRecorderRef.current.stop();

    setIsRecording(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Transcription */}
      <div className="rounded-xl border border-memory-maroon/10 bg-memory-light/40 p-6 md:p-8">
        <span className="font-serif text-4xl leading-none text-memory-maroon/30">
          “
        </span>

        <p className="font-serif text-lg leading-loose text-memory-primary/85">
          I still remember those early mornings. Dad would wake up before
          everyone else and sit quietly with his coffee. Those were simple
          moments, but they are some of the memories I miss the most.
        </p>

        <p className="mt-5 font-[cursive] text-base text-memory-maroon/70">
          — Michael, Son
        </p>
      </div>

      {/* Recording box */}
      <div className="mt-6 rounded-xl bg-memory-primary p-6 shadow-sm">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-memory-light/20 bg-memory-light/10">
            <span className="text-xl text-memory-light">
              {isRecording ? "●" : "🎙"}
            </span>
          </div>

          <div>
            <p className="font-serif text-lg text-memory-light">
              {isRecording ? "Recording your memory..." : "Record a voice memory"}
            </p>

            <p className="mt-1 font-[cursive] text-sm text-memory-light/60">
              {isRecording
                ? formatTime(recordingTime)
                : "Your voice stays on this page"}
            </p>
          </div>

          <button
            type="button"
            onClick={isRecording ? stopRecording : startRecording}
            className="rounded-full bg-memory-light px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-memory-primary transition hover:scale-[1.02]"
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>

          {audioUrl && !isRecording && (
            <div className="w-full rounded-lg bg-memory-light/10 p-3">
              <audio
                controls
                src={audioUrl}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-center font-[cursive] text-sm text-memory-muted">
        Record the memory in your own voice.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Media Memories - Frontend only                                             */
/* -------------------------------------------------------------------------- */

function MediaMemories() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    setImageUrl(URL.createObjectURL(file));
  };

  const handleVideoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }

    setVideoUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
      if (videoUrl) URL.revokeObjectURL(videoUrl);
    };
  }, [imageUrl, videoUrl]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Photo */}
        <label className="group cursor-pointer rounded-xl bg-memory-primary p-3 shadow-sm transition hover:-translate-y-1">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-memory-light/15 bg-memory-light/10">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Selected memory"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center text-memory-light">
                <div className="mb-3 text-3xl">▧</div>

                <p className="font-serif text-lg">
                  Add a photograph
                </p>

                <p className="mt-1 font-[cursive] text-sm text-memory-light/60">
                  Click to choose a photo
                </p>
              </div>
            )}
          </div>
        </label>

        {/* Video */}
        <label className="group cursor-pointer rounded-xl bg-memory-primary p-3 shadow-sm transition hover:-translate-y-1">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />

          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-memory-light/15 bg-memory-light/10">
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center text-memory-light">
                <div className="mb-3 text-3xl">▷</div>

                <p className="font-serif text-lg">
                  Add a video memory
                </p>

                <p className="mt-1 font-[cursive] text-sm text-memory-light/60">
                  Click to choose a video
                </p>
              </div>
            )}
          </div>
        </label>
      </div>

      <p className="mt-7 text-center font-[cursive] text-base text-memory-muted">
        Keep the moments that are easier to remember when you can see them.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Memoir Pages                                                               */
/* -------------------------------------------------------------------------- */

const pages = [
  {
    type: "cover",
    content: (
      <div className="flex min-h-[650px] h-full flex-col items-center justify-center px-8 text-center">
        <span className="mb-5 text-xl text-memory-maroon/50">✦</span>

        <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-memory-muted">
          A Memoir
        </p>

        <h1 className="font-serif text-5xl leading-tight text-memory-primary md:text-6xl">
          A Life
          <br />
          Remembered
        </h1>

        <div className="my-7 flex items-center gap-3">
          <span className="h-px w-12 bg-memory-maroon/30" />
          <span className="text-sm text-memory-maroon/50">♥</span>
          <span className="h-px w-12 bg-memory-maroon/30" />
        </div>

        <p className="font-serif text-2xl italic text-memory-primary/80">
          Robert
        </p>

        <p className="mt-2 text-[10px] tracking-[0.3em] text-memory-muted">
          1942 — 2024
        </p>

        <p className="mt-10 max-w-sm font-[cursive] text-base leading-relaxed text-memory-muted">
          A collection of stories, voices, and moments that keep a life close.
        </p>
      </div>
    ),
  },

  {
    type: "chapter",
    content: (
      <div className="flex min-h-[650px] h-full flex-col items-center justify-center px-10 text-center md:px-16">
        <span className="mb-5 text-lg text-memory-maroon/40">✦</span>

        <p className="text-[10px] uppercase tracking-[0.35em] text-memory-muted">
          Chapter I
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-memory-primary md:text-5xl">
          The Early Years
        </h2>

        <div className="my-7 h-px w-14 bg-memory-maroon/30" />

        <p className="max-w-xl font-serif text-lg leading-loose text-memory-primary/80">
          Every life is made of small moments. Some are loud and unforgettable.
          Others are quiet, almost ordinary, until we realize how much they
          meant.
        </p>

        <p className="mt-7 max-w-lg font-[cursive] text-base leading-relaxed text-memory-muted">
          These are the moments we chose to keep.
        </p>
      </div>
    ),
  },

  {
    type: "written",
    content: (
      <div className="flex min-h-[650px] h-full flex-col justify-center px-8 py-10 md:px-12">
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-memory-muted">
            Written Memory
          </p>

          <h2 className="mt-3 font-serif text-3xl text-memory-primary md:text-4xl">
            The Quiet Mornings
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-memory-maroon/30" />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:px-6">
          <div className="flex flex-col justify-center">
            <p className="font-serif text-lg leading-loose text-memory-primary/85">
              Dad always woke up before the sun. He claimed it was to get a
              head start on the day, but I think he just liked the quiet before
              the house woke up.
            </p>

            <p className="mt-6 font-[cursive] text-base text-memory-maroon/70">
              — Sara, Daughter
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-memory-primary p-2 shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-memory-light/10">
                <span className="font-[cursive] text-base text-memory-light/70">
                  A cherished photograph
                </span>
              </div>

              <p className="px-3 py-3 text-center font-[cursive] text-xs text-memory-light/70">
                In the garden, summer of '94
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    type: "audio",
    content: (
      <div className="flex min-h-[650px] h-full flex-col justify-center px-8 py-10 md:px-12">
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-memory-muted">
            Voice Memory
          </p>

          <h2 className="mt-3 font-serif text-3xl text-memory-primary md:text-4xl">
            A Voice I Still Remember
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-memory-maroon/30" />
        </div>

        <VoiceMemory />
      </div>
    ),
  },

  {
    type: "media",
    content: (
      <div className="flex min-h-[650px] h-full flex-col justify-center px-8 py-10 md:px-12">
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-memory-muted">
            Media Memories
          </p>

          <h2 className="mt-3 font-serif text-3xl text-memory-primary md:text-4xl">
            Moments We Kept
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-memory-maroon/30" />
        </div>

        <MediaMemories />
      </div>
    ),
  },

  {
    type: "closing",
    content: (
      <div className="flex min-h-[650px] h-full flex-col items-center justify-center px-8 text-center">
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-12 bg-memory-maroon/30" />
          <span className="text-sm text-memory-maroon/50">♥</span>
          <span className="h-px w-12 bg-memory-maroon/30" />
        </div>

        <p className="max-w-lg font-serif text-3xl leading-relaxed text-memory-primary md:text-4xl">
          Some memories never really leave us.
        </p>

        <p className="mt-8 max-w-md font-[cursive] text-base leading-relaxed text-memory-muted">
          They live in the stories we tell, the voices we remember, and the
          moments we choose to keep.
        </p>

        <div className="mt-10">
          <span className="text-lg text-memory-maroon/40">✦</span>

          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-memory-muted">
            The End
          </p>
        </div>
      </div>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/* Final Memoir                                                               */
/* -------------------------------------------------------------------------- */

export default function FinalMemoirPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  const goNext = () => {
    if (!isLastPage) {
      setCurrentPage((page) => page + 1);
    }
  };

  const goPrevious = () => {
    if (!isFirstPage) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <MemoirLayout>
      <div className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-4xl">
          {/* Layered paper */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm border border-memory-maroon/10 bg-memory-light/60" />

          <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-sm border border-memory-maroon/10 bg-memory-light/80" />

          {/* Main page */}
          <div className="relative min-h-[650px] overflow-hidden rounded-sm border border-memory-maroon/20 bg-[#fffdf9] shadow-sm">
            {/* Inner paper border */}
            <div className="pointer-events-none absolute inset-4 border border-memory-maroon/10 md:inset-6" />

            <div className="relative min-h-[650px]">
              {pages[currentPage].content}
            </div>

            {/* Page number */}
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <span className="font-[cursive] text-xs text-memory-muted">
                {currentPage + 1} / {pages.length}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex w-full max-w-4xl items-center justify-between px-2">
          <button
            type="button"
            onClick={goPrevious}
            disabled={isFirstPage}
            className="font-[cursive] text-base text-memory-primary transition hover:text-memory-maroon disabled:cursor-not-allowed disabled:opacity-25"
          >
            ← Previous
          </button>

          <p className="font-[cursive] text-sm text-memory-muted">
            turn the page
          </p>

          <button
            type="button"
            onClick={goNext}
            disabled={isLastPage}
            className="font-[cursive] text-base text-memory-primary transition hover:text-memory-maroon disabled:cursor-not-allowed disabled:opacity-25"
          >
            Next →
          </button>
        </div>
      </div>
    </MemoirLayout>
  );
}