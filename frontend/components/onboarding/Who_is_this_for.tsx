'use client';

import { useState } from 'react';
import { ArrowLeft, Users, Heart, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WhoIsThisFor() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: 'parents', label: 'My parents', icon: Users },
    { id: 'grandparents', label: 'My grandparents', icon: Users },
    { id: 'family', label: 'My family', icon: Users },
    { id: 'special', label: 'Someone special', icon: Heart, iconColor: 'text-red-500' },
    // "Myself" removed as requested
    { id: 'other', label: 'Other', icon: MoreHorizontal, iconColor: 'text-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center px-6 py-8 font-sans">
      <div className="w-full max-w-md">
        {/* Headers */}
        <div className="text-center mb-8">
         
          <h1 className=" text-center text-[35px] font-bold leading-[52px] text-black mb-2">
            Who are you creating<br />this memoir for?
          </h1>
          <p className="text-stone-500 text-sm">
            This helps us personalize your experience.
          </p>
        </div>
        {/* he horizontal scroll hint */}
        <div className="flex w-full justify-end mb-2 pr-1">
          <span className="text-xs text-stone-400 font-medium animate-pulse">
            Swipe for more &rarr;
          </span>
        </div>
        {/* Selection Row (Horizontal Swipe Flow) */}
        {/* [&::-webkit-scrollbar]:hidden hides the ugly scrollbar while keeping the swipe working */}
        <div className="flex flex-row overflow-x-auto gap-4 mb-10 pb-2 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-36 h-40 p-4 rounded-2xl border transition-all duration-200 ${isSelected
                  ? 'border-[#1a3628] bg-[#f2f7f4]'
                  : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <Icon size={40} strokeWidth={1.5} className={option.iconColor || 'text-stone-700'} />
                </div>
                <span className="text-sm font-medium text-stone-800 text-center leading-tight">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* Continue Button */}
        <button
          onClick={() => router.push('/handwritten-note')}
          disabled={!selected}
          className={`bg-[#a7cdbd] text-white text-[28px] font-bold w-full py-4 rounded-lg hover:bg-[#a7cdbd] transition
 ${selected
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