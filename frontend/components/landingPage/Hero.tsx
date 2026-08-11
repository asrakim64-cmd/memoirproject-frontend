import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 max-w-7xl mx-auto px-8 py-12">
 
      <div className="lg:col-span-6">

        <h1 className="text-[#1D1D1D] text-[48px] font-bold leading-[58px] max-w-[520px]">
          A shared family
          <br />
          memoir created by
          <br />
          everyone who
          <br />
          loved them
        </h1>

        <p className="mt-8 text-[28px] font-normal leading-[42px] text-[#4A4A4A] max-w-[540px]">
          Share one link to collect voice stories, memories and photos
          from family. Everything is automatically organized into
          chaptered archive and printable pdf.
        </p>

        <div className="flex gap-10 mt-9 ml-2">
          <Link
            href="/who_is_this_for"
            className="w-[360px] h-[70px] bg-[#a7cdbd] text-white text-[28px] font-bold px-10 py-2 rounded-md hover:bg-[#a7cdbd] transition inline-block ml-6"
          >
            Begin Your Memoir
          </Link>
        </div>

      </div>

       <div className="lg:col-span-6 mt-10 -ml-15">

        <div className="min-h-[400px] bg-[#fafaf9] border-2 border-dashed border-[#a7cdbd] rounded-xl flex items-center justify-center p-6 text-center shadow-sm">
          <p className="text-[20px] font-medium text-[#77716D] leading-relaxed">
            Proper preview of how the living memoir will look like at the end so user knows what value he is getting right
          </p>
        </div>

      </div>

    </section>
  );
}