'use client';
import Link from "next/link";

import { useState } from 'react';
import { Mic, Pencil, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChooseFormat() {
  const router = useRouter();
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
    <section className="min-h-screen flex justify-center items-center py-20 bg-white font-sans">
      <div className="w-[650px] max-w-full bg-white border border-[#D8CEC8] rounded-xl p-10 shadow-sm mx-4">
        <div className="w-full max-w-md">

          <div className="text-center mb-8">
            <span className="mb-4 block text-left">
              <Link
                href="/handwritten-note"
                className="inline-flex gap-2 text-[16px] font-medium text-[#6B5E53] hover:text-[#2C2C2C] transition -ml-2"
              >
                <span><b>←</b></span>
              </Link>
            </span>
            <h1 className="font-serif text-[36px] text-[#2C2C2C] leading-[44px] mb-3">
              Share a memory in <br /> your own way
            </h1>
            <p className="text-[#77716D] text-[18px]">
              There is no right or wrong choice. Pick the one format a voice note, a photo, or a written story that feels most natural for this memory.  
              </p>
          </div>

          <div className="w-full mb-12">

            <div className="flex w-full justify-end mb-2 pr-1">
              <span className="text-xs text-stone-400 font-medium animate-pulse">
                Swipe
              </span>
            </div>

            <div className="flex flex-row overflow-x-auto gap-4 pb-2 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {formats.map((format) => {
                const Icon = format.icon;
                const isSelected = selected === format.id;

                return (
                  <button
                    key={format.id}
                    onClick={() => setSelected(format.id)}

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
          <button
            onClick={() => router.push('/memoir-details')}

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
    </section>

  );
}