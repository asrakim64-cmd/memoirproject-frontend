"use client";
import { motion } from "framer-motion";

export default function ArtifactSection() {
  return (
    <section className="py-24 flex flex-col items-center justify-center bg-[#4a222a] p-8 overflow-hidden">
      
      {/* Refined Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-[#fefaf1] text-3xl md:text-4xl  font-serif mb-4">
          A Living Archive <span className="text-[#c9a063] italic">&</span> A Lasting Artifact
        </h3>
        <p className="text-[#fefaf1]/70 font-sans text-sm uppercase tracking-[0.2em]">
          Two ways to preserve the story
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        
        {/* CARD 1: THE LIVING ARCHIVE (Alabaster / Digital Aesthetic) */}
        <motion.div 
          whileHover="hover"
          className="group flex-1 bg-[#faf8f5] p-10 rounded-3xl border-2 border-[#00253e] shadow-2xl flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a063]"
        >
          {/* DIGITAL PROTOTYPE DOODLE */}
          <div className="w-full h-48 mb-8 bg-[#00253e]/5 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
             
             {/* Mini Browser Window */}
             <motion.div 
               variants={{ hover: { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } } }}
               className="w-full max-w-[240px] bg-white rounded-t-lg rounded-b-md shadow-lg border border-gray-200 overflow-hidden"
             >
                {/* Browser Header */}
                <div className="bg-gray-100 h-5 w-full flex items-center px-2 gap-1.5 border-b border-gray-200">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                
                {/* Web Page Content */}
                <div className="p-4">
                   {/* Author Row */}
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#c9a063]/20 flex items-center justify-center">
                         <span className="text-[#c9a063] font-serif text-[10px] font-bold">DK</span>
                      </div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                   </div>
                   {/* Text Block */}
                   <div className="space-y-2 mb-4">
                      <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-1.5 w-[90%] bg-gray-100 rounded-full"></div>
                      <div className="h-1.5 w-[60%] bg-gray-100 rounded-full"></div>
                   </div>
                   {/* Interactive Bar */}
                   <div className="flex gap-3 mt-2 pt-2 border-t border-gray-50">
                      <motion.div variants={{ hover: { scale: 1.2, color: "#ef4444" } }} className="text-gray-300">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </motion.div>
                      <motion.div variants={{ hover: { scale: 1.1, color: "#00253e" } }} className="text-gray-300">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </motion.div>
                   </div>
                </div>
             </motion.div>
          </div>

          <h4 className="text-[#00253e] text-2xl mb-3 font-serif group-hover:text-[#c9a063] transition-colors">The Living Archive</h4>
          <p className="text-[#00253e]/70 text-sm leading-relaxed">
            A beautiful, interactive digital space where family members can continually read stories and leave comments.
          </p>
        </motion.div>

        {/* CARD 2: THE FIXED ARTIFACT (Warm Cream / Print Aesthetic) */}
        <motion.div 
          whileHover="hover"
          className="group flex-1 bg-[#fdf8ed] p-10 rounded-3xl border-2 border-[#f0e4d3] shadow-2xl flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a063]"
        >
          {/* PRINT PROTOTYPE DOODLE */}
          <div className="w-full h-48 mb-8 bg-[#c9a063]/10 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
             
             {/* Background Page (Stacked effect) */}
             <motion.div 
               variants={{ hover: { x: -8, y: -4, rotate: -3 } }}
               className="absolute w-3/5 h-36 bg-[#faf8f5] border border-[#e5d9c5] shadow-sm"
             ></motion.div>
             
             {/* Foreground Book Page */}
             <motion.div 
               variants={{ hover: { x: 8, y: -8, rotate: 2, scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } } }}
               className="relative z-10 w-3/5 h-36 bg-[#faf8f5] border border-[#e5d9c5] shadow-md p-4 flex flex-col items-center"
             >
                {/* Chapter Title */}
                <div className="h-1.5 w-12 bg-[#00253e] mb-4"></div>
                
                {/* Typeset Columns */}
                <div className="flex gap-3 w-full h-full">
                   <div className="flex-1 space-y-1.5 mt-1">
                      <div className="h-[2px] w-full bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-[90%] bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-[95%] bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-[80%] bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-full bg-[#00253e]/40"></div>
                   </div>
                   <div className="flex-1 space-y-1.5">
                      {/* Drop Cap representation */}
                      <div className="float-left w-3 h-3 bg-[#c9a063] mr-1 mb-1"></div>
                      <div className="h-[2px] w-full bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-[85%] bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-full bg-[#00253e]/40"></div>
                      <div className="h-[2px] w-[90%] bg-[#00253e]/40"></div>
                   </div>
                </div>
             </motion.div>
          </div>

          <h4 className="text-[#00253e] text-2xl mb-3 font-serif group-hover:text-[#c9a063] transition-colors">The Fixed Artifact</h4>
          <p className="text-[#00253e]/70 text-sm leading-relaxed">
            A beautifully formatted, downloadable PDF designed to be printed, bound, and kept forever.
          </p>
        </motion.div>

      </div>
    </section>
  );
}