import ToolkitSection from "./ToolkitSection";
import PromptCarousel from "./PromptCarousel";
import ArtifactSection from "./ArtifactSection";
import ScatteredMemories from "./ScatteredMemories";

export default function LandingPageScroll() {
  return (
    <div className="flex flex-col w-full">
      <ScatteredMemories />
      <ToolkitSection />
      <PromptCarousel />
      <ArtifactSection />
      {/* Final CTA (Elegant Alabaster Version) */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-[#faf8f5] px-8 py-32 text-center border-t border-[#00253e]/5">
        <div className="max-w-2xl mx-auto flex flex-col items-center">

          {/* Subtle Gold Accent Line */}
          <div className="w-12 h-[2px] bg-[#c9a063] mb-8"></div>

          <h2 className="text-[#00253e] text-3xl md:text-4xl font-serif mb-4 leading-tight">
            Ready to preserve their legacy?
          </h2>

          <p className="text-[#00253e]/70 text-base md:text-lg mb-10 font-sans font-light">
            Start building the archive for just <span className="font-semibold text-[#00253e]">$3/month</span>.
          </p>

          <button className="bg-[#00253e] text-[#faf8f5] px-8 py-3.5 rounded-full text-sm md:text-base font-medium tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-[#00253e] group flex items-center gap-3">
            <span>Begin Their Story</span>
            <svg className="w-4 h-4 text-[#c9a063] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>

        </div>
      </section>

    </div>
  );
}