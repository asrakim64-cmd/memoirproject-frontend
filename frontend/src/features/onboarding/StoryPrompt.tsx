'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StoryPrompt() {
  const router = useRouter();
  const [story, setStory] = useState('');

  const prompts = [
    'A moment that still makes me smile',
    'Something they used to say',
    'A place I remember',
    'A little thing I miss',
  ];

  const handlePromptClick = (prompt: string) => {
    setStory((current) => {
      if (current.trim()) {
        return `${current}\n\n${prompt}: `;
      }

      return `${prompt}: `;
    });
  };

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

          <p className="mb-4 font-serif text-[17px] italic text-[#765548]">
            A story can begin with just one moment.
          </p>

          <h1 className="font-serif text-[38px] leading-[1.15] tracking-[-0.5px] text-[#2C2C2C] sm:text-[48px]">
            Let&apos;s bring one
            <br className="hidden sm:block" />
            memory to life.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-7 text-[#77716D]">
            Start with a moment that still stays with you.
          </p>

        </div>

        {/* Writing Area */}
        <div className="mx-auto mt-10 w-full max-w-2xl">

          <div className="overflow-hidden rounded-2xl border border-[#D8CEC8] bg-white shadow-sm transition-all duration-200 focus-within:border-[#765548] focus-within:shadow-md">

            <div className="flex items-center gap-2 border-b border-[#D8CEC8] bg-[#F8F2EF] px-5 py-4">
              <Sparkles
                size={18}
                strokeWidth={1.5}
                className="text-[#765548]"
              />

              <span className="font-serif text-[16px] italic text-[#765548]">
                What comes to mind?
              </span>
            </div>

            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder={`A birthday, a conversation, a place, a laugh…

Just write whatever you remember.`}
              className="min-h-[260px] w-full resize-none bg-white px-5 py-5 text-[16px] leading-7 text-[#2C2C2C] outline-none placeholder:text-[#A49A94]"
            />

            <div className="flex justify-end border-t border-[#D8CEC8] px-5 py-3">
              <span className="text-xs text-[#77716D]">
                {story.length} characters
              </span>
            </div>

          </div>

        </div>

        {/* Inspiration */}
        <div className="mx-auto mt-7 w-full max-w-2xl">

          <p className="mb-3 text-center text-sm text-[#77716D]">
            Need a little inspiration?
          </p>

          <div className="flex flex-wrap justify-center gap-2">

            {prompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handlePromptClick(prompt)}
                className="rounded-full border border-[#D8CEC8] bg-white px-4 py-2 text-sm text-[#77716D] transition-all duration-200 hover:border-[#765548] hover:bg-[#F1E3DF] hover:text-[#765548]"
              >
                {prompt}
              </button>
            ))}

          </div>

        </div>

        {/* Closing Line */}
        <div className="mt-8 text-center">
          <p className="font-serif text-sm italic text-[#77716D]">
            There&apos;s no right way to remember.
          </p>
        </div>

        {/* Continue */}
        <div className="mx-auto mt-6 w-full max-w-2xl">

          <button
            onClick={() => router.push('/memory-moment')}
            disabled={!story.trim()}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[18px] font-semibold transition-all duration-200 ${
              story.trim()
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