'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DeeperStorytelling() {
  const router = useRouter();
  const [detail, setDetail] = useState('');

  return (
    <main className="min-h-screen bg-white px-5 py-10 font-sans">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col rounded-2xl border border-[#B8B1AD] bg-white px-8 py-10 shadow-sm">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-[#77716D] transition hover:text-[#765548]"
        >
          <ArrowLeft size={18} strokeWidth={1.7} />
          Back
        </button>

        {/* Heading */}
        <div className="mx-auto w-full max-w-2xl text-center">

          <div className="mb-5 flex justify-center text-[#765548]">
            <Heart
              size={22}
              fill="#F1E3DF"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="font-serif text-[38px] leading-[1.15] tracking-[-0.5px] text-[#2C2C2C] sm:text-[48px]">
            There&apos;s more
            <br className="hidden sm:block" />
            to this story.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-7 text-[#77716D]">
            Let&apos;s take a little time to remember the details
            <br className="hidden sm:block" />
            that made this moment yours.
          </p>

        </div>

        {/* Question + Writing Area */}
        <div className="mx-auto mt-10 w-full max-w-2xl">

          <div className="rounded-2xl border border-[#D8CEC8] bg-white shadow-sm transition-all duration-200 focus-within:border-[#765548] focus-within:shadow-md">

            <div className="border-b border-[#D8CEC8] bg-[#F8F2EF] px-5 py-5">
              <h2 className="font-serif text-[20px] text-[#2C2C2C]">
                What do you remember most about it?
              </h2>

              <p className="mt-1 text-sm text-[#77716D]">
                A feeling, a detail, a little moment... anything that stayed with you.
              </p>
            </div>

            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Write whatever comes to mind..."
              className="min-h-[230px] w-full resize-none bg-white px-5 py-5 text-[16px] leading-7 text-[#2C2C2C] outline-none placeholder:text-[#A49A94]"
            />

            <div className="flex justify-end border-t border-[#D8CEC8] px-5 py-3">
              <span className="text-xs text-[#77716D]">
                {detail.length} characters
              </span>
            </div>

          </div>

        </div>

        {/* Add Another Detail */}
        <div className="mt-7 flex justify-center">

          <button
            className="flex items-center gap-2 rounded-full border border-[#D8CEC8] bg-white px-4 py-2 text-sm text-[#77716D] transition-all duration-200 hover:border-[#765548] hover:bg-[#F1E3DF] hover:text-[#765548]"
          >
            <Plus size={16} strokeWidth={1.7} />
            Add another detail
          </button>

        </div>

        {/* Emotional Line */}
        <div className="mt-8 text-center">
          <p className="font-serif text-sm italic text-[#77716D]">
            The little details are often the ones we treasure most.
          </p>
        </div>

        {/* Continue */}
        <div className="mx-auto mt-6 w-full max-w-2xl">

          <button
            onClick={() => router.push('/invite-family-friends')}
            disabled={!detail.trim()}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[18px] font-semibold transition-all duration-200 ${
              detail.trim()
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