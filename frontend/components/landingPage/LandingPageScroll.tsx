export default function LandingPageScroll() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 
        NOTE: Place this component exactly below your existing static Hero Section.
        It assumes your global CSS has no conflicting margins.
      */}

      {/* Card 1: The Emotional Quote (Base Blue to establish tone) */}
      <section className="min-h-screen flex items-center justify-center bg-[#00253e] p-8">
        <h2 className="text-[#c9a063] text-4xl md:text-6xl text-center max-w-4xl font-serif leading-snug">
          "Every family already holds the memoir. It is just scattered across the people who loved them."
        </h2>
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