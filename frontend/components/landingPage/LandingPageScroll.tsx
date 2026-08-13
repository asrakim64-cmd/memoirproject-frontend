import ToolkitSection from "./ToolkitSection";
import PromptCarousel from "./PromptCarousel";
import ArtifactSection from "./ArtifactSection";

// ... inside your return statement:
<PromptCarousel />
export default function LandingPageScroll() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative min-h-screen flex items-center justify-center p-8 bg-[#fefaf1]  overflow-hidden">

        {/* 1. The Photo Artifact (Top Left) */}
        <div className="hidden md:block absolute top-16 left-30 w-48 h-64 bg-gray-200 border-[10px] border-white shadow-xl -rotate-12 transition-transform duration-500 hover:scale-105 hover:z-20">
          {/* A soft gradient placeholder to represent an old photo */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
        </div>

        {/* 2. The Video Artifact (Bottom Right) */}
        <div className="hidden md:flex absolute bottom-24 right-24 w-72 h-44 bg-gray-800 border-[8px] border-white shadow-xl -rotate-15 transition-transform duration-500 hover:scale-105 hover:z-20 items-center justify-center overflow-hidden">
          {/* Video Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00253e] to-gray-700 opacity-80"></div>
          {/* Glassmorphism Play Button Overlay */}
          <div className="relative w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg cursor-pointer hover:bg-white/30 transition-colors">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>

        {/* 3. The Voice Note Artifact (Mid-Left, tucked behind) */}
        <div className="hidden md:flex absolute bottom-20 left-1/4 w-60 h-16 bg-white rounded-full shadow-lg -rotate-12 opacity-90 border border-gray-100 transition-transform duration-500 hover:scale-105 hover:z-20 items-center px-4 gap-3 cursor-pointer">
          {/* Play Icon */}
          <div className="w-10 h-10 rounded-full bg-[#00253e] flex items-center justify-center shrink-0">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#c9a063] border-b-[5px] border-b-transparent ml-1"></div>
          </div>
        </div>

        {/* 4. The Journal Text Artifact (Top Right) */}
        <div className="hidden md:block absolute top-20 right-[40%] w-56 p-6 bg-white shadow-lg rotate-12 opacity-80 border border-gray-100 transition-transform duration-500 hover:scale-105 hover:z-20">
          <div className="w-full h-[1px] bg-gray-200 mb-3"></div>
          <div className="w-full h-[1px] bg-gray-200 mb-3"></div>
          <p className="font-serif italic text-gray-400 text-sm leading-relaxed transform -translate-y-6">
            "I still remember the summer he taught us..."
          </p>
        </div>

        {/* Replaced yellow bg with pure white at 60% opacity for a crystal-clear glass effect */}
        <div className="relative z-10 max-w-3xl backdrop-blur-md bg-white/60 p-10 md:p-14 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <h2 className="text-[#00253e] text-3xl md:text-4xl text-center font-serif leading-relaxed">
            "Every family already holds the memoir. It is just <span className="text-[#c9a063] italic">scattered across</span> the people who loved them."
          </h2>
        </div>

      </section>
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