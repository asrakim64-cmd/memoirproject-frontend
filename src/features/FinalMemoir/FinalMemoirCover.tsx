"use client";

import Link from "next/link";

export default function FinalMemoirCover() {
  return (
    <main className="min-h-screen bg-[#DED4CB] px-2 py-2 text-[#2E171F] sm:px-3 sm:py-3 lg:px-4 lg:py-4">
      <div className="mx-auto max-w-[1580px]">

        <section
          className="relative overflow-hidden border-[1.5px] border-[#351A23] bg-[#FBF8F1] shadow-[0_25px_80px_rgba(45,23,31,0.20)]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 10%, rgba(185,149,85,0.045), transparent 28%),
              radial-gradient(circle at 85% 70%, rgba(113,60,72,0.035), transparent 30%),
              linear-gradient(135deg, rgba(255,255,255,0.20), transparent 45%)
            `,
          }}
        >

          {/* =====================================================
              INNER FRAME
          ====================================================== */}

          <div className="pointer-events-none absolute inset-[7px] border border-[#B99555]/35" />

          <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l border-t border-[#B99555]" />
          <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r border-t border-[#B99555]" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#B99555]" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[#B99555]" />

          {/* =====================================================
              TOP BAR
          ====================================================== */}

          <header className="relative z-10">

            <div className="flex items-center justify-between border-b border-[#B99555]/50 bg-[#351A23] px-4 py-2 sm:px-8">

              <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#D8B66D] sm:text-[8px]">
                Special Memorial Edition
              </span>

              <span className="hidden text-[7px] uppercase tracking-[0.28em] text-[#F8F0E6]/75 md:block">
                A Life • A Story • A Legacy
              </span>

              <span className="text-[7px] uppercase tracking-[0.28em] text-[#F8F0E6] sm:text-[8px]">
                2026 Edition
              </span>

            </div>

            {/* =================================================
                MASTHEAD
            ================================================== */}

            <div className="relative border-b-[3px] border-[#351A23] px-4 py-5 sm:px-8 sm:py-6">

              {/* Left floating ornament */}

              <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 lg:flex">

                <span className="h-px w-20 bg-[#351A23]/40" />

                <span className="font-serif text-xl text-[#B99555]">
                  ❦
                </span>

              </div>

              {/* Right floating ornament */}

              <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 lg:flex">

                <span className="font-serif text-xl text-[#B99555]">
                  ❦
                </span>

                <span className="h-px w-20 bg-[#351A23]/40" />

              </div>

              <div className="text-center">

                <h1
                  className="whitespace-nowrap font-serif text-[clamp(2rem,5vw,5.2rem)] font-bold leading-none tracking-[-0.055em] text-[#351A23]"
                  style={{
                    textShadow:
                      "0 2px 0 rgba(185,149,85,0.18), 0 7px 24px rgba(53,26,35,0.08)",
                  }}
                >
                  The Memorial Times
                </h1>

                <div className="mt-2 flex items-center justify-center gap-3">

                  <span className="h-px w-10 bg-[#B99555]" />

                  <span className="font-serif text-[7px] uppercase tracking-[0.48em] text-[#80612F] sm:text-[8px]">
                    Memory • Love • Legacy
                  </span>

                  <span className="h-px w-10 bg-[#B99555]" />

                </div>

              </div>

            </div>

            {/* =================================================
                ISSUE STRIP
            ================================================== */}

            <div className="flex items-center justify-between border-b border-[#351A23]/40 px-4 py-2 sm:px-8">

              <span className="text-[6px] uppercase tracking-[0.3em] text-[#67464D] sm:text-[7px]">
                Vol. I • No. 01
              </span>

              <span className="flex items-center gap-2 text-[6px] font-semibold uppercase tracking-[0.3em] text-[#713C48] sm:text-[7px]">
                <span className="text-[#B99555]">✦</span>
                In Loving Memory
                <span className="text-[#B99555]">✦</span>
              </span>

              <span className="text-[6px] uppercase tracking-[0.3em] text-[#67464D] sm:text-[7px]">
                1942 — 2024
              </span>

            </div>

          </header>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="px-4 py-5 sm:px-7 sm:py-6 lg:px-9 lg:py-6">

            <div className="grid grid-cols-12 gap-0">

              {/* =================================================
                  LEFT EDITORIAL COLUMN
              ================================================== */}

              <article className="col-span-12 border-b border-[#351A23]/30 pb-6 sm:col-span-7 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-7 lg:pr-9">

                {/* Label */}

                <div className="flex items-center gap-2">

                  <span className="bg-[#713C48] px-3 py-1.5 text-[6px] font-bold uppercase tracking-[0.3em] text-[#FBF8F1] shadow-[0_4px_12px_rgba(53,26,35,0.13)] sm:text-[7px]">
                    The Life & Legacy
                  </span>

                  <span className="h-px flex-1 bg-[#351A23]/25" />

                  <span className="text-xs text-[#B99555]">
                    ✦
                  </span>

                </div>

                {/* =================================================
                    HERO TITLE
                ================================================== */}

                <div className="mt-5">

                  <p
                    className="font-serif text-[clamp(1rem,2vw,1.45rem)] italic tracking-wide text-[#8A6634]"
                    style={{
                      textShadow: "0 3px 12px rgba(138,102,52,0.12)",
                    }}
                  >
                    Remembering
                  </p>

                  <h2
                    className="mt-1 font-serif text-[clamp(3rem,5vw,6.2rem)] font-bold leading-[0.80] tracking-[-0.06em] text-[#351A23]"
                    style={{
                      textShadow:
                        "0 4px 22px rgba(53,26,35,0.09)",
                    }}
                  >
                    A Life
                    <br />

                    <span
                      className="font-normal italic text-[#713C48]"
                      style={{
                        textShadow:
                          "0 4px 20px rgba(113,60,72,0.12)",
                      }}
                    >
                      Remembered
                    </span>
                  </h2>

                  {/* Tiny floating gold accent */}

                  <div className="mt-2 flex items-center gap-2">

                    <span className="text-[7px] text-[#B99555]">
                      ✦
                    </span>

                    <span className="h-px w-10 bg-[#B99555]/50" />

                    <span className="text-[6px] uppercase tracking-[0.28em] text-[#80612F]">
                      A life worth remembering
                    </span>

                  </div>

                </div>

                {/* Divider */}

                <div className="my-4 flex items-center gap-2">

                  <span className="h-[2px] w-14 bg-[#351A23]" />

                  <span className="text-[8px] text-[#B99555]">
                    ◆
                  </span>

                  <span className="h-px flex-1 bg-[#B99555]/60" />

                </div>

                {/* Intro */}

                <p className="max-w-2xl font-serif text-sm leading-[1.35] text-[#351A23]/80 sm:text-base lg:text-lg">
                  The stories, words, voices and little moments that made
                  Robert&apos;s life unforgettable.
                </p>

                {/* Byline */}

                <div className="mt-3 flex items-center justify-between border-y border-[#351A23]/25 py-2">

                  <span className="text-[6px] uppercase tracking-[0.22em] text-[#704D55] sm:text-[7px]">
                    By Those Who Loved Him
                  </span>

                  <span className="text-[6px] uppercase tracking-[0.22em] text-[#704D55] sm:text-[7px]">
                    Memorial Edition
                  </span>

                </div>

                {/* =================================================
                    STORY COLUMNS
                ================================================== */}

                <div className="mt-5 grid grid-cols-2 gap-5">

                  {/* STORY */}

                  <div>

                    <p className="font-serif text-[10px] leading-[1.55] text-[#28171C]/75 sm:text-xs lg:text-sm">

                      <span className="float-left mr-1 font-serif text-6xl font-bold leading-[0.68] text-[#713C48]">
                        E
                      </span>

                      very life is made of ordinary days that quietly become
                      extraordinary memories. Robert&apos;s story lives in the
                      conversations, laughter, traditions and small gestures
                      that his family continues to carry forward.

                    </p>

                    <p className="mt-4 font-serif text-[9px] leading-[1.6] text-[#28171C]/60 sm:text-[10px] lg:text-xs">
                      This special edition gathers those fragments together —
                      preserving the pieces of a life deeply lived, deeply
                      loved, and never forgotten.
                    </p>

                    {/* Quote */}

                    <div className="relative mt-5 border-y border-[#B99555] px-3 py-4">

                      <span className="absolute -left-1 -top-4 font-serif text-3xl text-[#B99555]">
                        “
                      </span>

                      <p className="font-serif text-sm italic leading-[1.2] text-[#713C48] sm:text-base lg:text-lg">
                        Where memory lives,
                        <br />
                        love never fades.
                      </p>

                      <span className="absolute -bottom-5 right-1 font-serif text-3xl text-[#B99555]">
                        ”
                      </span>

                    </div>

                    {/* Elegant lower ornament */}

                    <div className="mt-5 flex items-center gap-2">

                      <span className="text-[8px] text-[#B99555]">
                        ✦
                      </span>

                      <span className="h-px flex-1 bg-[#351A23]/20" />

                      <span className="font-serif text-[10px] text-[#B99555]">
                        ❦
                      </span>

                      <span className="h-px flex-1 bg-[#351A23]/20" />

                      <span className="text-[8px] text-[#B99555]">
                        ✦
                      </span>

                    </div>

                  </div>

                  {/* LEGACY */}

                  <div className="border-l border-[#351A23]/25 pl-5">

                    <div className="flex items-center gap-2">

                      <span className="text-[9px] text-[#B99555]">
                        ✦
                      </span>

                      <p className="text-[6px] font-bold uppercase tracking-[0.3em] text-[#80612F] sm:text-[7px]">
                        The Legacy
                      </p>

                    </div>

                    <h3 className="mt-2 font-serif text-xl font-bold leading-[0.9] text-[#351A23] sm:text-2xl lg:text-3xl">

                      More than
                      <br />

                      <span className="font-normal italic text-[#713C48]">
                        a memory.
                      </span>

                    </h3>

                    <p className="mt-4 font-serif text-[9px] leading-[1.6] text-[#28171C]/65 sm:text-[10px] lg:text-xs">
                      A person&apos;s legacy is not measured only in years,
                      but in the people they touched, the stories they
                      created and the love they left behind.
                    </p>

                    {/* Dates */}

                    <div className="mt-5 border-t border-[#351A23]/20 pt-3">

                      <div className="flex items-center justify-between border-b border-[#351A23]/15 py-2">

                        <span className="text-[6px] uppercase tracking-[0.2em] text-[#8A6B55]">
                          Born
                        </span>

                        <span className="font-serif text-sm text-[#351A23]">
                          1942
                        </span>

                      </div>

                      <div className="flex items-center justify-between border-b border-[#351A23]/15 py-2">

                        <span className="text-[6px] uppercase tracking-[0.2em] text-[#8A6B55]">
                          Remembered
                        </span>

                        <span className="font-serif text-sm text-[#351A23]">
                          2024
                        </span>

                      </div>

                      <div className="flex items-center justify-between py-2">

                        <span className="text-[6px] uppercase tracking-[0.2em] text-[#8A6B55]">
                          Legacy
                        </span>

                        <span className="font-serif text-sm italic text-[#713C48]">
                          Always
                        </span>

                      </div>

                    </div>

                    {/* Gold legacy line */}

                    <div className="mt-4 flex items-center gap-2">

                      <span className="h-px w-7 bg-[#B99555]" />

                      <span className="text-[6px] uppercase tracking-[0.18em] text-[#713C48]">
                        Preserved for generations
                      </span>

                    </div>

                    {/* Bottom ornament */}

                    <div className="mt-5 text-center font-serif text-xs tracking-[0.4em] text-[#B99555]">
                      ✦ ❦ ✦
                    </div>

                  </div>

                </div>

              </article>

              {/* =================================================
                  RIGHT EDITORIAL COLUMN
              ================================================== */}

              <aside className="col-span-12 pt-6 sm:col-span-5 sm:pt-0 sm:pl-7 lg:pl-9">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-[#351A23]/50 pb-2">

                  <div className="flex items-center gap-2">

                    <span className="text-[9px] text-[#B99555]">
                      ✦
                    </span>

                    <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#713C48]">
                      Remembering Robert
                    </p>

                  </div>

                  <span className="font-serif text-xs italic text-[#80612F]">
                    01
                  </span>

                </div>

                {/* =================================================
                    PORTRAIT
                ================================================== */}

                <div className="mt-4 flex justify-center">

                  <div className="relative w-full max-w-[235px]">

                    {/* outer gold shadow frame */}

                    <div className="absolute -inset-1 border border-[#B99555]/35" />

                    <div className="border-[1.5px] border-[#351A23] bg-[#FBF8F1] p-2 shadow-[0_12px_35px_rgba(53,26,35,0.10)]">

                      <div className="border border-[#B99555] bg-[#EEE3D7] p-2">

                        <div className="relative flex aspect-[4/4.7] items-center justify-center overflow-hidden border border-[#351A23]/25 bg-[#FBF8F1]">

                          {/* decorative circles */}

                          <div className="absolute h-40 w-40 rounded-full border border-[#B99555]/20" />

                          <div className="absolute h-32 w-32 rounded-full border border-[#B99555]/15" />

                          <div className="absolute h-24 w-24 rounded-full border border-[#B99555]/10" />

                          {/* diagonal subtle lines */}

                          <div className="absolute left-0 top-1/2 h-px w-full bg-[#B99555]/10" />

                          <div className="absolute left-1/2 top-0 h-full w-px bg-[#B99555]/10" />

                          <div className="relative text-center">

                            <div
                              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-[#B99555] bg-[#F6EEE4] font-serif text-5xl text-[#713C48] shadow-[0_8px_25px_rgba(53,26,35,0.12)] sm:h-28 sm:w-28 sm:text-6xl"
                              style={{
                                textShadow:
                                  "0 3px 12px rgba(113,60,72,0.15)",
                              }}
                            >
                              R
                            </div>

                            <p className="mt-4 font-serif text-base italic text-[#713C48] sm:text-lg">
                              Robert Harrison
                            </p>

                            <div className="mx-auto mt-2 flex items-center justify-center gap-2">

                              <span className="h-px w-6 bg-[#B99555]" />

                              <span className="text-[7px] text-[#B99555]">
                                ✦
                              </span>

                              <span className="h-px w-6 bg-[#B99555]" />

                            </div>

                            <p className="mt-2 text-[6px] uppercase tracking-[0.3em] text-[#8A6B55]">
                              Forever Remembered
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Gold corner details */}

                    <span className="absolute -left-1 -top-1 h-7 w-7 border-l-2 border-t-2 border-[#B99555]" />
                    <span className="absolute -right-1 -top-1 h-7 w-7 border-r-2 border-t-2 border-[#B99555]" />
                    <span className="absolute -bottom-1 -left-1 h-7 w-7 border-b-2 border-l-2 border-[#B99555]" />
                    <span className="absolute -bottom-1 -right-1 h-7 w-7 border-b-2 border-r-2 border-[#B99555]" />

                  </div>

                </div>

                {/* Name */}

                <div className="mt-3 text-center">

                  <h3
                    className="font-serif text-2xl italic text-[#713C48]"
                    style={{
                      textShadow:
                        "0 4px 16px rgba(113,60,72,0.12)",
                    }}
                  >
                    Robert Harrison
                  </h3>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-[#8A6B55]">
                    1942 — 2024
                  </p>

                </div>

                {/* =================================================
                    MEMORY TYPES
                ================================================== */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#351A23]/40">

                  {/* Words */}

                  <div className="group px-2 py-3 text-center transition-transform duration-300 hover:-translate-y-0.5">

                    <span className="font-serif text-base text-[#B99555]">
                      ✎
                    </span>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.18em] text-[#8A6B55]">
                      His Words
                    </p>

                    <p className="mt-1 font-serif text-xs font-semibold text-[#351A23]">
                      Stories
                    </p>

                  </div>

                  {/* Voice */}

                  <div className="group border-x border-[#351A23]/20 px-2 py-3 text-center transition-transform duration-300 hover:-translate-y-0.5">

                    <span className="font-serif text-base text-[#B99555]">
                      ♫
                    </span>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.18em] text-[#8A6B55]">
                      His Voice
                    </p>

                    <p className="mt-1 font-serif text-xs font-semibold text-[#351A23]">
                      Memories
                    </p>

                  </div>

                  {/* Moments */}

                  <div className="group px-2 py-3 text-center transition-transform duration-300 hover:-translate-y-0.5">

                    <span className="font-serif text-base text-[#B99555]">
                      ◇
                    </span>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.18em] text-[#8A6B55]">
                      His Moments
                    </p>

                    <p className="mt-1 font-serif text-xs font-semibold text-[#351A23]">
                      Photographs
                    </p>

                  </div>

                </div>

                {/* =================================================
                    FAMILY ARCHIVE
                ================================================== */}

                <div className="mt-4 border-b border-[#351A23]/35 pb-4">

                  <div className="flex items-center gap-2">

                    <span className="text-[8px] text-[#B99555]">
                      ◆
                    </span>

                    <p className="text-[6px] font-bold uppercase tracking-[0.28em] text-[#80612F]">
                      From the Family Archive
                    </p>

                  </div>

                  <h3 className="mt-2 font-serif text-xl font-bold leading-[0.95] text-[#351A23] sm:text-2xl">

                    The little things
                    <br />

                    <span className="font-normal italic text-[#713C48]">
                      we never forget.
                    </span>

                  </h3>

                  <p className="mt-3 max-w-md font-serif text-[9px] leading-[1.55] text-[#28171C]/60 sm:text-[10px]">
                    A photograph. A familiar voice. A story told one more
                    time. These are the pieces of a life that remain long
                    after the moment has passed.
                  </p>

                  {/* Highlight quote */}

                  <div className="relative mt-4 border-l-2 border-[#B99555] pl-3">

                    <span className="absolute -left-[7px] -top-2 text-[9px] text-[#B99555]">
                      ✦
                    </span>

                    <p className="font-serif text-[10px] italic leading-[1.45] text-[#713C48] sm:text-xs">
                      Some memories are too precious to be left behind.
                    </p>

                  </div>

                </div>

                {/* Bottom editorial line */}

                <div className="mt-3 flex items-center justify-end gap-2">

                  <span className="text-[6px] uppercase tracking-[0.25em] text-[#80612F]">
                    A keepsake of a life
                  </span>

                  <span className="text-xs text-[#B99555]">
                    ✦
                  </span>

                </div>

              </aside>

            </div>

          </div>

          {/* =========================================================
              FOOTER
          ========================================================== */}

          <footer className="relative z-20 border-t-[2px] border-[#351A23] bg-[#351A23] px-4 py-3 sm:px-7">

            <div className="flex items-center justify-between gap-4">

              {/* Left */}

              <div className="hidden min-w-[170px] sm:block">

                <p className="text-[6px] uppercase tracking-[0.25em] text-[#F8F0E6]/55">
                  The Memorial Times
                </p>

                <p className="mt-1 font-serif text-[9px] italic text-[#D8B66D]">
                  Special Edition • Vol. I
                </p>

              </div>

              {/* Center */}

              <div className="flex-1 text-center">

                <p className="font-serif text-sm italic text-[#D8B66D] sm:text-base">
                  His story continues on the next page.
                </p>

                <div className="mt-1 flex items-center justify-center gap-2">

                  <span className="h-px w-8 bg-[#D8B66D]/35" />

                  <span className="text-[6px] uppercase tracking-[0.28em] text-[#F8F0E6]/50">
                    Open the complete memoir
                  </span>

                  <span className="h-px w-8 bg-[#D8B66D]/35" />

                </div>

              </div>

              {/* CTA */}

              <Link
                href="/final-memoir/book"
                className="group flex shrink-0 items-center gap-3 border border-[#D8B66D] bg-[#713C48] px-5 py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#FBF8F1] shadow-[0_7px_22px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#824A56] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)] sm:px-7 sm:py-3.5 sm:text-[9px]"
              >

                <span>Continue Reading</span>

                <span className="text-base text-[#D8B66D] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </footer>

        </section>

      </div>
    </main>
  );
}