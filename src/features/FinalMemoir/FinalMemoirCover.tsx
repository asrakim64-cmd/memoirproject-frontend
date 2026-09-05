"use client";

import Link from "next/link";

export default function FinalMemoirCover() {
  return (
    <main className="min-h-screen bg-[#F1E3DF] px-4 py-8 text-[#4A3028] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Editorial Cover */}
        <section className="relative overflow-hidden border border-[#765548]/30 bg-[#FFFDF9] shadow-[0_20px_60px_rgba(74,48,40,0.15)]">
          
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C9A45C]/30" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C9A45C]/20" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F1E3DF]/60" />

          {/* Top Editorial Bar */}
          <div className="relative border-b border-[#765548]/30 bg-[#765548] px-6 py-4 text-[#FFFDF9] sm:px-10">
            <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs">
              <span>Memorial Edition</span>

              <span className="hidden sm:block">
                A Life • A Story • A Legacy
              </span>

              <span>Est. 2026</span>
            </div>
          </div>

          {/* Main Editorial Content */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

            {/* Title Area */}
            <div className="border-b border-[#C9A45C]/70 pb-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#C9A45C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#765548]">
                  In Loving Memory
                </span>
                <span className="h-px flex-1 bg-[#C9A45C]/50" />
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
                <div>
                  <p className="mb-3 font-serif text-sm italic text-[#765548]">
                    The Memorial Of
                  </p>

                  <h1 className="font-serif text-5xl leading-[0.95] text-[#4A3028] sm:text-7xl lg:text-8xl">
                    Robert
                    <br />
                    <span className="text-[#765548]">Harrison</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#4A3028]/70 sm:text-base">
                    A collection of stories, moments, words, and memories
                    preserved for the people who loved him most.
                  </p>
                </div>

                {/* Portrait Frame */}
                <div className="mx-auto w-full max-w-[220px] lg:mx-0 lg:ml-auto">
                  <div className="border border-[#C9A45C] bg-[#F1E3DF] p-3">
                    <div className="flex aspect-[4/5] items-center justify-center border border-[#765548]/30 bg-[#FFFDF9]">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A45C] text-2xl text-[#765548]">
                          R
                        </div>
                        <p className="font-serif text-sm italic text-[#765548]">
                          Remembered
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-center text-[9px] uppercase tracking-[0.25em] text-[#765548]/70">
                    Forever remembered
                  </p>
                </div>
              </div>
            </div>

            {/* Date / Tribute Strip */}
            <div className="grid border-b border-[#765548]/20 sm:grid-cols-3">
              <div className="border-b border-[#765548]/20 py-5 sm:border-b-0 sm:border-r">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#765548]/70">
                  Born
                </p>
                <p className="mt-1 font-serif text-xl">1942</p>
              </div>

              <div className="border-b border-[#765548]/20 py-5 sm:border-b-0 sm:px-6 sm:border-r">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#765548]/70">
                  Remembered
                </p>
                <p className="mt-1 font-serif text-xl">2024</p>
              </div>

              <div className="py-5 sm:px-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#765548]/70">
                  Legacy
                </p>
                <p className="mt-1 font-serif text-xl">Always</p>
              </div>
            </div>

            {/* Editorial Story Section */}
            <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr]">
              
              <article>
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#765548]">
                  His Story
                </p>

                <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                  The moments that made a life.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4A3028]/70">
                  Every life is made of ordinary days that become extraordinary
                  memories. This memoir brings those moments together — the
                  stories he told, the words he left behind, and the little
                  things his family never wants to forget.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="text-xl text-[#C9A45C]">❦</span>
                  <p className="font-serif text-base italic text-[#765548]">
                    Where memory lives, love never fades.
                  </p>
                </div>
              </article>

              {/* Side Editorial Notes */}
              <aside className="border-l border-[#C9A45C]/60 pl-6">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#765548]">
                  Inside This Edition
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="font-serif text-lg">His Words</p>
                    <p className="mt-1 text-xs leading-5 text-[#4A3028]/60">
                      Stories and memories written in his own words.
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-lg">His Voice</p>
                    <p className="mt-1 text-xs leading-5 text-[#4A3028]/60">
                      Recorded moments preserved beyond time.
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-lg">His Moments</p>
                    <p className="mt-1 text-xs leading-5 text-[#4A3028]/60">
                      Photographs and moments worth remembering.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Bottom CTA Area */}
            <div className="border-t border-[#765548]/20 pt-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-serif text-lg italic text-[#765548]">
                    A keepsake for generations to come.
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#4A3028]/50">
                    Open the complete memoir
                  </p>
                </div>

                <Link
                  href="/final-memoir/book"
                  className="inline-flex items-center gap-3 bg-[#765548] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFDF9] transition hover:bg-[#4A3028]"
                >
                  Open Your Memoir
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Publication Mark */}
          <div className="border-t border-[#765548]/20 px-6 py-4 sm:px-10">
            <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-[#765548]/60">
              <span>Memory • Love • Legacy</span>
              <span>Memorial Edition</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}