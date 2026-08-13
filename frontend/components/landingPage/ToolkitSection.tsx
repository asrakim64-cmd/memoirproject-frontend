"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ToolkitSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#00253e] to-[#0f172a] p-8 md:p-16 overflow-hidden">
      
      <div className="text-center mb-20">
         <motion.h3 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[#fefaf1] text-4xl md:text-5xl font-serif mb-4"
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

        {/* Column 2 Placeholder */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
           <h4 className="text-[#00253e] text-xl mb-4 font-bold">Voice or Text</h4>
           <p className="text-[#fefaf1]">Share memories however you feel most comfortable, right in the browser.</p>
        </div>
        
        {/* Column 3 Placeholder */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
           <h4 className="text-[#00253e] text-xl mb-4 font-bold">Curated Prompts</h4>
           <p className="text-[#fefaf1]">Meaningful, relationship-based questions to eliminate the blank page.</p>
        </div>
        
      </div>
    </section>
  );
}