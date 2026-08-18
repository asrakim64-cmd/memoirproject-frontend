'use client';

import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InviteFamilyFriends() {
  const router = useRouter();

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

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">

          {/* Decorative Icon */}
          <div className="mb-7 flex items-center justify-center gap-3 text-[#765548]">
            <Sparkles
              size={17}
              strokeWidth={1.5}
            />

            <Heart
              size={25}
              fill="#F1E3DF"
              strokeWidth={1.5}
            />

            <Sparkles
              size={17}
              strokeWidth={1.5}
            />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[38px] leading-[1.15] tracking-[-0.5px] text-[#2C2C2C] sm:text-[48px]">
            Some memories are
            <br />
            better shared.
          </h1>

          {/* Supporting Text */}
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-7 text-[#77716D]">
            Invite the people who were part of the story.
          </p>

          {/* Visual */}
          <div className="relative mt-12 flex h-64 w-full max-w-md items-center justify-center rounded-[28px] bg-[#F1E3DF]">

            {/* Horizontal Connection */}
            <div className="absolute h-px w-32 bg-[#D8CEC8]" />

            {/* Vertical Connection */}
            <div className="absolute h-24 w-px bg-[#D8CEC8]" />

            {/* Center Memory */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8CEC8] bg-white shadow-sm">
              <Heart
                size={30}
                fill="#F1E3DF"
                className="text-[#765548]"
                strokeWidth={1.5}
              />
            </div>

            {/* Person 1 */}
            <div className="absolute left-[18%] top-[27%] flex h-14 w-14 items-center justify-center rounded-full border border-[#D8CEC8] bg-white text-[#765548] shadow-sm">
              <Users
                size={22}
                strokeWidth={1.4}
              />
            </div>

            {/* Person 2 */}
            <div className="absolute right-[18%] top-[27%] flex h-14 w-14 items-center justify-center rounded-full border border-[#D8CEC8] bg-white text-[#765548] shadow-sm">
              <Users
                size={22}
                strokeWidth={1.4}
              />
            </div>

            {/* Person 3 */}
            <div className="absolute bottom-[18%] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-[#D8CEC8] bg-white text-[#765548] shadow-sm">
              <Users
                size={22}
                strokeWidth={1.4}
              />
            </div>

            {/* Visual Caption */}
            <p className="absolute bottom-5 text-xs font-medium tracking-wide text-[#77716D]">
              The people who make the story yours
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-10 w-full max-w-md">

            {/* Primary */}
            <button
              onClick={() => router.push('/signup')}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#765548] py-4 text-[17px] font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90"
            >
              Invite Family & Friends
              <ArrowRight
                size={19}
                strokeWidth={2}
              />
            </button>

            {/* Secondary */}
            <button
              onClick={() => router.push('/signup')}
              className="mt-4 w-full py-2 text-sm font-medium text-[#77716D] transition hover:text-[#765548]"
            >
              Maybe later
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}