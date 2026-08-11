'use client';
import Link from "next/link";
import { useState } from 'react';
import { Users, Heart, MoreHorizontal } from 'lucide-react';
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
    //Matched outer background to the other screens
    <section className="min-h-screen flex justify-center items-center py-20 bg-white font-sans">

      {/*Added the exact border, background, rounded corners, and shadow from Signup! */}
      <div className="w-[650px] max-w-full bg-white border border-[#D8CEC8] rounded-xl p-10 shadow-sm mx-4">

        {/* Headers */}
        <div className="text-center mb-8">
          {/*Made sure the back arrow sits on the left side */}
          <span className="mb-4 block text-left">
            <Link
              href="/"
              className="inline-flex gap-2 text-[16px] font-medium text-[#6B5E53] hover:text-[#2C2C2C] transition -ml-2"
            >
              <span><b>←</b></span>
            </Link>
          </span>

          <h1 className="text-center text-[35px] font-bold leading-[52px] text-black mb-2">
            Whose story are <br /> we honoring today?
          </h1>
          <p className="text-[#77716D] text-[18px]">
            Take all the time you need. We're here to help you keep their memory close.          
            </p>
        </div>

        {/* The horizontal scroll hint */}
        <div className="flex w-full justify-end mb-2 pr-1">
          <span className="text-xs text-[#77716D] font-medium animate-pulse">
            Swipe for more &rarr;
          </span>
        </div>

        {/* Selection Row (Horizontal Swipe Flow) */}
        <div className="flex flex-row overflow-x-auto gap-4 mb-10 pb-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                //Matched the hover effects and border colors to your new input fields!
                className={`flex-shrink-0 flex flex-col items-center justify-center w-36 h-40 p-4 rounded-2xl border transition-all duration-200 ${isSelected
                  ? 'border-[#a7cdbd] bg-[#f2f7f4] ring-1 ring-[#a7cdbd]'
                  : 'border-[#D8CEC8] bg-[#fafaf9] hover:border-[#a7cdbd] hover:bg-white'
                  }`}
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <Icon size={40} strokeWidth={1.5} className={option.iconColor || 'text-[#2C2C2C]'} />
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
          className={`text-[24px] font-bold w-full py-4 rounded-lg transition shadow-md
            ${selected
              ? 'bg-[#a7cdbd] text-white hover:opacity-90'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
        >
          Continue
        </button>

      </div>
    </section>
  );
}