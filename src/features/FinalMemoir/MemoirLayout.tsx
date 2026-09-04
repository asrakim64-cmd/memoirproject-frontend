import React from "react";

export default function MemoirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f3ef] font-sans text-stone-900 selection:bg-memory-maroon/20">
      {/* ------------------------------------------------------------------ */}
      {/* Memoir Header                                                       */}
      {/* ------------------------------------------------------------------ */}

      <header className="relative z-30 border-b border-memory-maroon/40 bg-memory-primary text-memory-light shadow-sm">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Memoir Identity */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-memory-light/20 bg-memory-light/10">
              <svg
                className="h-4 w-4 text-memory-light"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c-4.97 4.03-8 7.5-8 11a8 8 0 0016 0c0-3.5-3.03-6.97-8-11z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v7m-3-3l3 3 3-3"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-base tracking-wide text-memory-light md:text-lg">
                Robert&apos;s Memoir
              </h1>

              <span className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-memory-light/60">
                1942 — 2024
              </span>
            </div>
          </div>

          {/* Small Memoir Tagline */}
          <span className="hidden font-[cursive] text-sm text-memory-light/60 sm:block">
            A life remembered
          </span>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Memoir Canvas                                                       */}
      {/* ------------------------------------------------------------------ */}

      <main className="flex min-h-[calc(100vh-5rem)] w-full justify-center">
        <div className="w-full max-w-6xl px-4 py-8 sm:px-6 md:px-10 md:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}