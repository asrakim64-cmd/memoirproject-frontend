"use client";
import { motion } from "framer-motion";

export default function ToolkitSection() {
  return (
   <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#381c24] to-[#12070b] p-8 md:p-16 overflow-hidden">
      
      <div className="text-center mb-20">
         <motion.h3 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[#fefaf1] text-3xl md:text-4xl font-serif mb-4"
         >
           Capture Memories <span className="text-[#c9a063] italic">Without Friction</span>
         </motion.h3>
         <p className="text-[#fefaf1]/70 max-w-2xl mx-auto font-sans text-xs md:text-sm uppercase tracking-[0.3em]">
           The Technology Gets Out of the Way
         </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* CARD 1: NO APP REQUIRED */}
        <motion.div 
          whileHover="hover"
          className="group relative bg-[#faf8f5] p-8 rounded-3xl border border-2 border-[#00253e] text-center flex flex-col items-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a063]/40 hover:shadow-2xl hover:shadow-[#00253e]/20"
        >
           {/* HIGH-FIDELITY PROTOTYPE (The CSS Doodle) */}
           <div className="w-full h-44 mb-8 bg-[#00253e]/5 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden border border-[#00253e]/10">
              
              <motion.div 
                variants={{
                  hover: { y: -15, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }}
                className="bg-white border border-gray-100 text-[#00253e] text-[13px] px-4 py-3 rounded-2xl rounded-br-sm shadow-md max-w-[90%] text-left"
              >
                <p className="opacity-95 mb-3 leading-snug font-medium">We are collecting memories for Dad's 60th.</p>
                
                {/* The "Secure Link" representation */}
                <div className="bg-[#00253e] rounded-lg p-2 border border-[#00253e] flex items-center gap-3 transition-colors duration-300 group-hover:border-[#c9a063] group-hover:bg-[#0f172a]">
                   <div className="w-6 h-6 bg-[#faf8f5] rounded-full flex items-center justify-center shrink-0">
                     <svg className="w-3 h-3 text-[#c9a063]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                   </div>
                   <span className="font-semibold tracking-wide text-xs text-[#faf8f5]">Join the archive</span>
                </div>
              </motion.div>
           </div>

           {/* The Refined Text */}
           <h4 className="text-[#00253e] text-2xl mb-3 font-serif transition-colors duration-300 group-hover:text-[#c9a063]">
             No App Required
           </h4>
           <p className="text-[#00253e]/70 leading-relaxed text-sm transition-colors duration-300 group-hover:text-[#00253e]">
             Skip the registration phase entirely. A secure link drops family members straight into the active archive immediately.
           </p>
        </motion.div>

       {/* CARD 2: VOICE OR TEXT (Dark Frosted Glass Version) */}
        {/* CARD 2: VOICE OR TEXT (Warm Yellow / Nostalgic Version) */}
        <motion.div 
          whileHover="hover"
          className="group relative bg-[#fdf8ed] p-8 rounded-3xl border-2 border-[#f0e4d3] text-center flex flex-col items-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a063] hover:shadow-2xl hover:shadow-[#c9a063]/20"
        >
           {/* HIGH-FIDELITY PROTOTYPE (The CSS Doodle) */}
           <div className="w-full h-44 mb-8 bg-[#c9a063]/10 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden border border-[#c9a063]/20 gap-3">
              
              {/* Active Voice Recording Snippet */}
              <motion.div 
                variants={{
                  hover: { y: -2, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }}
                className="w-full bg-[#00253e] rounded-xl p-3 border border-[#00253e] flex items-center justify-between shadow-lg group-hover:border-[#c9a063] transition-colors"
              >
                 <div className="flex items-center gap-2">
                    {/* Pulsing red dot on hover */}
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                    <span className="text-xs text-[#faf8f5]/70 font-mono group-hover:text-[#faf8f5] transition-colors duration-300">02:14</span>
                 </div>
                 
                 {/* Animated Waveform */}
                 <div className="flex items-center gap-[3px]">
                    <motion.div variants={{ hover: { scaleY: [1, 1.8, 0.8, 1], transition: { repeat: Infinity, duration: 0.8 } } }} className="w-1 h-3 bg-[#c9a063] rounded-full origin-center"></motion.div>
                    <motion.div variants={{ hover: { scaleY: [1, 2.5, 1.2, 1], transition: { repeat: Infinity, duration: 0.9 } } }} className="w-1.5 h-5 bg-[#c9a063] rounded-full origin-center"></motion.div>
                    <motion.div variants={{ hover: { scaleY: [1, 1.5, 0.5, 1], transition: { repeat: Infinity, duration: 0.7 } } }} className="w-1 h-2 bg-[#c9a063] rounded-full origin-center"></motion.div>
                    <motion.div variants={{ hover: { scaleY: [1, 2, 0.9, 1], transition: { repeat: Infinity, duration: 0.85 } } }} className="w-1.5 h-4 bg-[#c9a063] rounded-full origin-center"></motion.div>
                    <motion.div variants={{ hover: { scaleY: [1, 1.4, 0.7, 1], transition: { repeat: Infinity, duration: 0.75 } } }} className="w-1 h-3 bg-[#c9a063] rounded-full origin-center"></motion.div>
                 </div>
              </motion.div>

              {/* Text Input Snippet */}
              <motion.div 
                variants={{
                  hover: { y: 2, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }}
                className="w-full bg-white rounded-xl p-3 border border-[#f0e4d3] flex items-center justify-between shadow-sm group-hover:border-[#c9a063]/50 transition-colors"
              >
                 <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] text-[#c9a063] uppercase tracking-wider font-bold">Text Mode</span>
                    <span className="text-xs text-[#00253e]/60 italic font-serif group-hover:text-[#00253e] transition-colors">"I still remember..."</span>
                 </div>
                 {/* Send Button */}
                 <div className="w-6 h-6 rounded-full bg-[#fdf8ed] border border-[#f0e4d3] flex items-center justify-center group-hover:bg-[#c9a063] transition-colors duration-300">
                   <svg className="w-3 h-3 text-[#00253e] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                 </div>
              </motion.div>

           </div>

           {/* The Refined Text */}
           <h4 className="text-[#00253e] text-2xl mb-3 font-serif transition-colors duration-300 group-hover:text-[#c9a063]">
             Voice or Text
           </h4>
           <p className="text-[#00253e]/70 leading-relaxed text-sm transition-colors duration-300 group-hover:text-[#00253e]">
             Share memories however you feel most comfortable, right in the browser.
           </p>
        </motion.div>        
        {/* CARD 3: CURATED PROMPTS (Alabaster White Version) */}
        <motion.div 
          whileHover="hover"
          className="group relative bg-[#faf8f5] p-8 rounded-3xl border-2 border-[#00253e] text-center flex flex-col items-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a063] hover:shadow-2xl hover:shadow-[#00253e]/20"
        >
           {/* HIGH-FIDELITY PROTOTYPE (The CSS Doodle) */}
           <div className="w-full h-44 mb-8 bg-[#00253e]/5 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden border border-[#00253e]/10">
              
              {/* Background Card (The Stack) */}
              <motion.div 
                variants={{
                  hover: { y: -12, rotate: -6, scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }}
                className="absolute bg-white/60 border border-[#00253e]/10 w-[80%] h-24 rounded-xl shadow-sm z-0"
              />

              {/* Foreground Card (The Active Prompt) */}
              <motion.div 
                variants={{
                  hover: { y: -4, rotate: 3, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }}
                className="relative z-10 bg-white border border-[#00253e]/15 p-4 rounded-xl shadow-md w-[90%] text-left flex flex-col gap-3 group-hover:border-[#c9a063]/50 transition-colors"
              >
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#c9a063] uppercase tracking-wider font-bold">Prompt 14</span>
                    {/* Tiny Spark/Idea Icon */}
                    <svg className="w-4 h-4 text-[#00253e]/30 group-hover:text-[#c9a063] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                 </div>
                 {/* The Question */}
                 <p className="text-[#00253e] text-[13px] font-serif italic leading-snug">
                   "What was the most rebellious thing you did in your twenties?"
                 </p>
              </motion.div>

           </div>

           {/* The Refined Text */}
           <h4 className="text-[#00253e] text-2xl mb-3 font-serif transition-colors duration-300 group-hover:text-[#c9a063]">
             Curated Prompts
           </h4>
           <p className="text-[#00253e]/70 leading-relaxed text-sm transition-colors duration-300 group-hover:text-[#00253e]">
             Meaningful, relationship-based questions to eliminate the blank page.
           </p>
        </motion.div>
      </div>
    </section>
  );
}