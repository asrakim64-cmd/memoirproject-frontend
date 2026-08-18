'use client';

import { useState } from 'react';
import { Heart, Users, Sparkles, Plus, ArrowRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SmallPersonalContext() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      id: 'family',
      label: 'My family',
      description: 'The people who shaped my story.',
      icon: Users,
    },
    {
      id: 'parents',
      label: 'My parents',
      description: 'Their memories, their journey, their love.',
      icon: Heart,
    },
    {
      id: 'special',
      label: 'Someone special',
      description: 'Someone whose story means a lot to me.',
      icon: Sparkles,
    },
    {
      id: 'other',
      label: 'Someone else',
      description: 'I have someone else in mind.',
      icon: Plus,
    },
  ];

  return (
    <main className="min-h-screen bg-white px-5 py-10 font-sans">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col rounded-2xl border border-[#B8B1AD] bg-white px-8 py-10 shadow-sm">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-[#77716D] transition hover:text-[#765548]"
        >
          <ArrowLeft size={18} strokeWidth={1.7} />
          Back
        </button>

        {/* Heading */}
        <div className="mx-auto w-full max-w-2xl text-center">

          <p className="mb-4 font-serif text-[17px] italic text-[#765548]">
            Someone is always at the heart of a memory.
          </p>

          <h1 className="font-serif text-[38px] leading-[1.15] tracking-[-0.5px] text-[#2C2C2C] sm:text-[48px]">
            Who is this memory for?
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-7 text-[#77716D]">
            Tell us who is at the heart of this story.
            <br className="hidden sm:block" />
            Just a little context is enough.
          </p>

        </div>

        {/* Options */}
        <div className="mx-auto mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">

          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`group relative min-h-[150px] rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-[#765548] bg-[#F1E3DF] shadow-sm'
                    : 'border-[#D8CEC8] bg-white hover:-translate-y-0.5 hover:border-[#765548] hover:bg-[#F8F2EF]'
                }`}
              >

                {/* Selection indicator */}
                <div
                  className={`absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 ${
                    isSelected
                      ? 'border-[#765548] bg-[#765548] text-white'
                      : 'border-[#D8CEC8] bg-white text-transparent'
                  }`}
                >
                  <span className="text-xs">✓</span>
                </div>

                {/* Icon */}
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full transition ${
                    isSelected
                      ? 'bg-white text-[#765548]'
                      : 'bg-[#F1E3DF] text-[#765548] group-hover:bg-white'
                  }`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h2 className="text-[17px] font-semibold text-[#2C2C2C]">
                  {option.label}
                </h2>

                <p className="mt-1.5 max-w-[250px] text-sm leading-5 text-[#77716D]">
                  {option.description}
                </p>

              </button>
            );
          })}

        </div>

        {/* Bottom message */}
        <div className="mt-10 text-center">
          <p className="text-sm italic text-[#77716D]">
            Some stories are worth keeping close.
          </p>
        </div>

        {/* Continue */}
        <div className="mx-auto mt-7 w-full max-w-2xl">
          <button
            onClick={() => router.push('/story-prompt')}
            disabled={!selected}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[18px] font-semibold transition-all duration-200 ${
              selected
                ? 'bg-[#765548] text-white shadow-md hover:opacity-90'
                : 'cursor-not-allowed bg-[#D8CEC8] text-[#77716D]'
            }`}
          >
            Continue
            <ArrowRight size={19} strokeWidth={2} />
          </button>
        </div>

      </div>
    </main>
  );
}