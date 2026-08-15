"use client";
import { motion } from "framer-motion";

export default function PromptCarousel() {
    return (
        <section className="py-24 flex flex-col items-center justify-center bg-[#faf8f5] overflow-hidden">

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#00253e] text-3xl md:text-4xl  mb-12 font-serif text-center px-4"
            >
                Find just the right <span className="text-[#c9a063] italic">questions to ask</span>
            </motion.h3>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto w-full max-w-6xl px-8 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                {/* Card 1 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-base md:text-lg text-center font-serif italic leading-relaxed">
                        "What is your earliest memory of him?"
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-base md:text-lg text-center font-serif italic leading-relaxed">
                        "What did he do that nobody else did?"
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-base md:text-lg text-center font-serif italic leading-relaxed">
                        "What is a phrase they always used to say?"
                    </p>
                </div>
                {/* Card 4 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "What was the most rebellious thing you did in your twenties?"
                    </p>
                </div>
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "If you could relive one completely ordinary day together, which would it be?"
                    </p>
                </div>

                {/* Card 6 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "What is a quiet, everyday habit of theirs that you absolutely love?"
                    </p>
                </div>

                {/* Card 7 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "Is there a specific song, smell, or meal that instantly brings them to mind?"
                    </p>
                </div>

                {/* Card 8 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "What is the best piece of advice they ever gave you, even if you didn't realize it then?"
                    </p>
                </div>

                {/* Card 9 */}
                <div className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] bg-[#fdf8ed] p-8 rounded-2xl border border-[#f0e4d3] snap-center shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-start text-left">
                    <p className="text-[#00253e] text-lg text-center font-serif italic leading-relaxed">
                        "What is a story about their own childhood that always amazed you?"
                    </p>
                </div>
            </div>
        </section>
    );
}