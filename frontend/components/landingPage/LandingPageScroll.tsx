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

      {/* Card 2: Storytelling Toolkit (Gradient shift to Sage Green) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#00253e] to-[#a2b59f] p-8">
        <h3 className="text-[#fefaf1] text-3xl mb-12 font-serif text-center">Your Storytelling Toolkit</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Column 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
             <h4 className="text-[#00253e] text-xl mb-4 font-bold">No App Required</h4>
             <p className="text-[#fefaf1]">Contributors simply click a secure link to start sharing immediately.</p>
          </div>
          {/* Column 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
             <h4 className="text-[#00253e] text-xl mb-4 font-bold">Voice or Text</h4>
             <p className="text-[#fefaf1]">Share memories however you feel most comfortable, right in the browser.</p>
          </div>
          {/* Column 3 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
             <h4 className="text-[#00253e] text-xl mb-4 font-bold">Curated Prompts</h4>
             <p className="text-[#fefaf1]">Meaningful, relationship-based questions to eliminate the blank page.</p>
          </div>
        </div>
      </section>

      {/* Card 3: Prompt Carousel (High Contrast Deep Blue) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#00253e] p-8 overflow-hidden">
        <h3 className="text-[#c9a063] text-3xl mb-12 font-serif text-center">Find just the right questions to ask</h3>
        
        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto w-full max-w-6xl pb-8 snap-x snap-mandatory hide-scrollbar">
          <div className="min-w-[300px] md:min-w-[400px] bg-[#fefaf1] p-12 rounded-xl snap-center shrink-0 shadow-xl flex items-center justify-center aspect-video">
            <p className="text-[#00253e] text-xl text-center font-medium">"What is your earliest memory of him?"</p>
          </div>
          <div className="min-w-[300px] md:min-w-[400px] bg-[#fefaf1] p-12 rounded-xl snap-center shrink-0 shadow-xl flex items-center justify-center aspect-video">
            <p className="text-[#00253e] text-xl text-center font-medium">"What did he do that nobody else did?"</p>
          </div>
          <div className="min-w-[300px] md:min-w-[400px] bg-[#fefaf1] p-12 rounded-xl snap-center shrink-0 shadow-xl flex items-center justify-center aspect-video">
            <p className="text-[#00253e] text-xl text-center font-medium">"What is a phrase they always used to say?"</p>
          </div>
        </div>
      </section>

      {/* Card 4: Dual Artifact (Frosted Glass over Blue) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#00253e] p-8">
        <h3 className="text-[#fefaf1] text-3xl md:text-4xl mb-16 font-serif text-center">A Living Archive & A Lasting Artifact</h3>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          <div className="flex-1 bg-white/5 backdrop-blur-md p-10 rounded-2xl border-t-4 border-[#a2b59f] shadow-2xl">
            <h4 className="text-[#a2b59f] text-2xl mb-4 font-semibold">The Living Archive</h4>
            <p className="text-[#fefaf1]/80 text-lg leading-relaxed">A beautiful, interactive web page where family members can read stories and leave comments.</p>
          </div>
          <div className="flex-1 bg-white/5 backdrop-blur-md p-10 rounded-2xl border-t-4 border-[#c9a063] shadow-2xl">
            <h4 className="text-[#c9a063] text-2xl mb-4 font-semibold">The Fixed Artifact</h4>
            <p className="text-[#fefaf1]/80 text-lg leading-relaxed">A beautifully formatted, downloadable PDF designed to be printed and kept forever.</p>
          </div>
        </div>
      </section>

      {/* Card 5: Final CTA (Sage Green for calm conversion) */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#a2b59f] p-8 text-center">
        <h2 className="text-[#00253e] text-4xl md:text-6xl font-serif mb-6">Ready to preserve their legacy?</h2>
        <p className="text-[#00253e]/80 text-2xl mb-12 max-w-2xl">Start building the archive for just $3/month.</p>
        
        <button className="bg-[#c9a063] text-[#00253e] px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105 hover:bg-[#b58f55] transition-transform duration-300">
          Begin Their Story
        </button>
      </section>

    </div>
  );
}