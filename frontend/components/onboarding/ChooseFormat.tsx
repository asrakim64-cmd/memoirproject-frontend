'use client';
import Link from "next/link";

import { useState } from 'react';
import { ArrowLeft, Mic, Pencil, Camera, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChooseFormat() {
  const router = useRouter();
  // Using an array because the prompt says "Choose one or more"
  const [selected, setSelected] = useState<string | null>(null);

  const formats = [
    {
      id: 'voice',
      title: 'Voice',
      desc: 'Record and preserve spoken memories',
      icon: Mic
    },
    {
      id: 'writing',
      title: 'Writing',
      desc: 'Write stories in your own words',
      icon: Pencil
    },
    {
      id: 'photos',
      title: 'Photos',
      desc: 'Capture and save special moments',
      icon: Camera
    }
  ];



  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center px-6 py-8 font-sans">
      <div className="w-full max-w-md">

        {/* Headers */}
        <div className="text-center mb-8">
          <span className="mb-4">
            <Link
              href="/handwritten-note"
              className="inline-flex gap-2 text-[16px] font-medium text-[#6B5E53] hover:text-[#2C2C2C] transition -ml-105"
            >
              <span><b>←</b></span>
            </Link>
          </span>
          <h1 className="text-center text-[35px] font-bold leading-[52px] text-black mb-2">
            Choose your starting<br /> format
          </h1>
          <p className="text-stone-500 text-sm">
            How would you initially want to add to your memoir?
          </p>
        </div>

        {/* Selection Area */}
        <div className="w-full mb-12">

          {/*Added the exact swipe hint from the who_is_this_for page */}
          <div className="flex w-full justify-end mb-2 pr-1">
            <span className="text-xs text-stone-400 font-medium animate-pulse">
              Swipe for more &rarr;
            </span>
          </div>

          {/*Brought back the exact horizontal scrolling classes and gap */}
          <div className="flex flex-row overflow-x-auto gap-4 pb-2 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {formats.map((format) => {
              const Icon = format.icon;
              const isSelected = selected === format.id;

              return (
                <button
                  key={format.id}
                  onClick={() => setSelected(format.id)}

                  //flex-shrink-0 ensures they stay exactly w-36 without squishing
                  className={`flex-shrink-0 flex flex-col items-center justify-center text-center w-36 h-40 p-4 rounded-2xl border transition-all duration-200 ${isSelected
                    ? 'border-[#1a3628] bg-[#f2f7f4]'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                >
                  <div className="h-10 flex items-center justify-center mb-3">
                    <Icon size={36} strokeWidth={1.5} className="text-[#1a3628]" />
                  </div>
                  <span className="text-sm font-semibold text-stone-800 mb-1">
                    {format.title}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight">
                    {format.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Continue Button */}
        <button
          onClick={() => router.push('/')}

          // Button unlocks when exactly 1 is selected
          disabled={!selected}
          className={`bg-[#a7cdbd] text-white text-[28px] font-bold w-full py-4 rounded-lg hover:bg-[#a7cdbd] transition ${selected
            ? 'bg-[#1a3628] text-white hover:bg-[#132a1e]'
            : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}