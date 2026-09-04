"use client";

import React from "react";

interface MemoirLayoutProps {
  children: React.ReactNode;
}

export default function MemoirLayout({ children }: MemoirLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f1eb] text-[#4a3028]">
      {/* Memoir Header */}
      <header className="relative overflow-hidden bg-memory-primary text-memory-light border-b border-[#C9A45C]/50">
        
        {/* Subtle Golden Circular Texture */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-20 h-44 w-44 rounded-full border border-[#C9A45C]/25" />

          <div className="absolute -right-16 -bottom-24 h-52 w-52 rounded-full border border-[#C9A45C]/25" />

          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A45C]/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-2.5">
          
          {/* Top Row */}
          <div className="flex items-center justify-between">
            
            {/* Left */}
            <div className="flex items-center gap-2">
              
              {/* Golden Circle Icon */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A45C]/80 text-[#C9A45C]">
                <span className="text-xs">✦</span>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.20em] text-[#C9A45C]">
                  A Life Remembered
                </p>

                <p className="text-[11px] text-memory-light/55">
                  Personal Memoir
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="text-right">
              <p className="font-serif text-xs tracking-wide text-memory-light/80">
                1942 — 2024
              </p>
            </div>
          </div>

          {/* Center Title */}
          <div className="mt-1.5 text-center">
            
            {/* Golden Decorative Divider */}
            <div className="mb-1 flex items-center justify-center gap-2">
              <span className="h-px w-7 bg-[#C9A45C]/70" />

              <span className="text-[11px] text-[#C9A45C]">
                ❦
              </span>

              <span className="h-px w-7 bg-[#C9A45C]/70" />
            </div>

            <h1 className="font-serif text-xl font-medium tracking-wide md:text-2xl">
              Robert’s Memoir
            </h1>

            <p className="mt-0 font-serif text-[11px] italic text-memory-light/60">
              A life remembered
            </p>
          </div>

          {/* Bottom Golden Divider */}
          <div className="mt-1.5 flex items-center gap-2">
            <span className="h-px flex-1 bg-[#C9A45C]/30" />

            <span className="text-[8px] uppercase tracking-[0.20em] text-[#C9A45C]/85">
              Memories preserved with love
            </span>

            <span className="h-px flex-1 bg-[#C9A45C]/30" />
          </div>
        </div>
      </header>

      {/* Book Content */}
      <main>{children}</main>
    </div>
  );
}