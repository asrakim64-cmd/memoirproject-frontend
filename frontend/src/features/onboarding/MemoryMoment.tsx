'use client';

import { ArrowLeft, ArrowRight, Heart, PartyPopper, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MemoryMoment() {
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

        {/* Celebration Heading */}
        <div className="mx-auto w-full max-w-2xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3 text-[#765548]">
            <Sparkles
              size={18}
              strokeWidth={1.5}
              className="animate-pulse"
            />

            <PartyPopper
              size={25}
              strokeWidth={1.5}
            />

            <Sparkles
              size={18}
              strokeWidth={1.5}
              className="animate-pulse"
            />
          </div>

          <h1 className="font-serif text-[36px] leading-[1.2] tracking-[-0.5px] text-[#2C2C2C] sm:text-[46px]">
            Your first memory is ready
          </h1>

          <p className="mx-auto mt-4 max-w-md text-[16px] leading-7 text-[#77716D]">
            A little piece of your story, ready to be kept close.
          </p>

        </div>

        {/* Memory Card */}
        <div className="mx-auto mt-10 w-full max-w-xl">

          <div className="relative overflow-hidden rounded-[24px] border border-[#D8CEC8] bg-[#F8F2EF] p-5 shadow-sm">

            {/* Decorative corner */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F1E3DF]" />

            <div className="relative rounded-[18px] border border-[#D8CEC8] bg-white p-7 sm:p-9">

              {/* Memory Label */}
              <div className="flex items-center justify-center gap-2 text-[#765548]">
                <Heart
                  size={15}
                  fill="#765548"
                  strokeWidth={1.5}
                />

                <span className="font-serif text-sm italic">
                  A memory to keep
                </span>

                <Heart
                  size={15}
                  fill="#765548"
                  strokeWidth={1.5}
                />
              </div>

              {/* Visual Memory Placeholder */}
              <div className="my-7 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#F1E3DF] sm:h-56">

                <div className="text-center">

                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#765548] shadow-sm">
                    <Heart
                      size={30}
                      fill="none"
                      strokeWidth={1.3}
                    />
                  </div>

                  <p className="font-serif text-lg italic text-[#765548]">
                    A moment worth remembering
                  </p>

                </div>

              </div>

              {/* Memory Text */}
              <div className="text-center">

                <p className="font-serif text-[22px] leading-8 text-[#2C2C2C]">
                  “Some memories are made of
                  <br className="hidden sm:block" />
                  the smallest moments.”
                </p>

                <div className="mx-auto mt-5 h-px w-12 bg-[#D8CEC8]" />

                <p className="mt-4 text-sm leading-6 text-[#77716D]">
                  Your memory will become part of something
                  <br className="hidden sm:block" />
                  you can return to again and again.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Small Emotional Line */}
        <div className="mt-8 text-center">
          <p className="font-serif text-sm italic text-[#77716D]">
            And this is only the beginning.
          </p>
        </div>

        {/* Continue */}
        <div className="mx-auto mt-6 w-full max-w-xl">

          <button
            onClick={() => router.push('/deeper-storytelling')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#765548] py-4 text-[18px] font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90"
          >
            Continue Memoir
            <ArrowRight size={19} strokeWidth={2} />
          </button>

        </div>

      </div>
    </main>
  );
}