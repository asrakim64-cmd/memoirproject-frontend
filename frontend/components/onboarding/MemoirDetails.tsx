import Link from "next/link";
import Image from "next/image"; // Brought Image back!

export default function MemoirDetails() {
  return (
    <section className="flex justify-center items-center py-20 bg-white">
      <div className="w-[650px] bg-white border border-[#D8CEC8] rounded-xl p-10 shadow-sm">
        
        {/* Back Arrow */}
        <span className="mb-1 block">
          <Link
            href="/chooseFormat"
            className="inline-flex text-[16px] font-medium text-[#6B5E53] hover:text-[#2C2C2C] transition -ml-2"
          >
            <span><b>←</b></span>
          </Link>
        </span>

        {/* Heading */}
        <div className="mb-8 text-center flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-[#2C2C2C] tracking-tight">
            Tell us about your memoir
          </h2>
          <p className="mt-3 text-[18px] text-[#77716D]">
            This will be the home for your stories.
          </p>
          
          {/*An elegant colored divider to anchor the header */}
          <div className="w-16 h-1 bg-[#a7cdbd] rounded-full mt-6"></div>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-3">
          
          <input
            type="text"
            placeholder="Memoir title *"
            className="w-full px-5 py-4 border border-black rounded-lg text-[18px] text-black placeholder:text-gray-500 outline-none"
          />
          
          <input
            type="text"
            placeholder="Person / Family name *"
            className="w-full px-5 py-4 border border-black rounded-lg text-[18px] text-black placeholder:text-gray-500 outline-none"
          />
          
          <textarea
            placeholder="Short description (optional)"
            rows={4}
            className="w-full resize-none px-5 py-4 border border-black rounded-lg text-[18px] text-black placeholder:text-gray-500 outline-none"
          />
        </div>
        {/* Continue Button */}
        <Link
          href="/signup"
          className="block w-full mt-5 py-4 rounded-lg bg-[#a7cdbd] text-white text-[22px] font-bold text-center transition hover:bg-[#91b8a7] shadow-md"
        >
          Continue
        </Link>
      </div>
    </section>
  );
}