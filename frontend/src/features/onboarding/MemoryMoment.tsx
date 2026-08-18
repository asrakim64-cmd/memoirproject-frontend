'use client';

import { ArrowLeft, ArrowRight, Heart, PartyPopper, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MemoryMoment() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#faf8f5] text-[#381c24] flex items-center justify-center px-6 py-16 relative z-10 font-sans selection:bg-[#381c24] selection:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-[680px] bg-white border border-[#f0e4d3] rounded-3xl px-8 md:px-12 py-10 shadow-sm"
      >

        {/* Back */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-[#78716c] hover:text-[#381c24] text-[15px] font-medium transition inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft size={18} strokeWidth={1.7} />
            Back
          </button>
        </div>

        {/* Celebration Heading */}
        <div className="text-center mb-8">
          <div className="mb-4 flex items-center justify-center gap-3 text-[#381c24]">
            <Sparkles size={18} strokeWidth={1.5} className="animate-pulse" />
            <PartyPopper size={24} strokeWidth={1.5} />
            <Sparkles size={18} strokeWidth={1.5} className="animate-pulse" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-[#381c24] mb-3">
            Your first memory is ready
          </h1>

          <p className="text-[#78716c] text-[15px] md:text-base leading-relaxed max-w-[520px] mx-auto font-serif italic">
            A little piece of your story, preserved and ready to keep close.
          </p>
        </div>

        {/* Aha Moment Preview Card (Glimpse of Final Memoir Page) */}
        <div className="mb-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-2xl border border-[#f0e4d3] bg-[#fdf8ed] p-6 shadow-xs"
          >
            {/* Decorative corner accent */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#f0e4d3]/40 pointer-events-none" />

            <div className="relative rounded-xl border border-[#f0e4d3] bg-white p-6 md:p-8 shadow-2xs">

              {/* Memory Tag */}
              <div className="flex items-center justify-center gap-2 text-[#381c24] mb-6">
                <Heart size={14} fill="#381c24" strokeWidth={1.5} />
                <span className="font-serif text-xs uppercase tracking-widest font-semibold">
                  Memoir Preview
                </span>
                <Heart size={14} fill="#381c24" strokeWidth={1.5} />
              </div>

              {/* Memory Text Quote */}
              <div className="text-center">
                <p className="font-serif text-[20px] md:text-[22px] leading-relaxed text-[#381c24] italic">
                  “Some memories are made of the smallest moments that stay with us forever.”
                </p>

                <div className="mx-auto mt-5 h-px w-12 bg-[#f0e4d3]" />

                <p className="mt-4 text-sm leading-relaxed text-[#78716c] font-serif">
                  This is how your gradual reflections come together into a timeless keepsake.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Small Emotional Line */}
        <div className="mb-8 text-center">
          <p className="font-serif text-sm italic text-[#78716c]">
            And this is only the beginning.
          </p>
        </div>

        {/* Continue */}
        <motion.button
          type="button"
          onClick={() => router.push('/invite-family-friends')}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-[#381c24] text-white hover:bg-[#4a222a] shadow-md shadow-[#381c24]/10"
        >
          Continue Memoir
          <ArrowRight size={19} strokeWidth={2} />
        </motion.button>

      </motion.div>
    </section>
  );
}