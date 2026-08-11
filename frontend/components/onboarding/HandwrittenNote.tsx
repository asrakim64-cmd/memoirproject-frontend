import Link from "next/link";

export default function HandwrittenNote() {
  return (
    <section className="flex flex-col items-center justify-center py-20">

      {/* Note */}
      <div
        className="relative w-[420px] bg-[#fafaf9] shadow-xl shadow-stone-300/50 -rotate-1 transition-transform hover:rotate-0 duration-500 p-8"
        style={{
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
        }}
      >

        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            borderRadius: 'inherit', 
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 43px, #64748b 43px, #64748b 44px)',
            backgroundPositionY: '56px'
          }}
        />

        <div className="relative z-10">
          <h2 className="font-[family-name:var(--font-caveat)] text-center text-[34px] font-bold text-black mb-4 -ml-2">
            Dear Hafsa !
          </h2>

          <p className="font-[family-name:var(--font-caveat)] text-[32px] text-[#2C2C2C] leading-[44px]">
            Every family has a story worth keeping, the quiet mornings,
            the faded photographs, and the voices you never want to lose.
            We built this space to hold those precious pieces safe for you
            and the ones you love.
          </p>
        </div>

      </div>

      <div className="flex gap-6 mt-12">
        <Link
          href="/who_is_this_for"
          className="bg-[#a7cdbd] text-white text-[28px] font-bold px-12 py-3 rounded-lg hover:bg-[#a7cdbd] transition"
        >
          Back
        </Link>

        <Link
          href="/chooseFormat"
          className="bg-[#a7cdbd] text-white text-[28px] font-bold px-7 py-3 rounded-lg hover:bg-[#a7cdbd] transition"
        >
          Continue
        </Link>
      </div>

    </section>
  );
}