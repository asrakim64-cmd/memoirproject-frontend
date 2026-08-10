import Link from "next/link";

import Image from "next/image";

export default function MemoirDetails() {
  return (
    <main className="min-h-screen bg-[#F8F2EF] px-6 py-16">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center">

        <div className="w-[650px] bg-white border border-[#D8CEC8] rounded-lg p-10">

          {/* Back Arrow */}
          <div className="mb-8 w-full">
            <Link
              href="/handwritten-note"
             className="text-[20px] text-[#2C2C2C] transition hover:opacity-70"
            >
              ←
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-[42px] font-semibold leading-tight text-[#2C2C2C]">
              Tell us about
              <br />
              your memoir
            </h1>

            <p className="mt-3 text-[18px] text-[#5F5A57]">
              This will be the home for your stories.
            </p>
          </div>

          {/* Family Memoir Illustration */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/family-memoir.png"
              alt="Family memoir illustration"
              width={220}
              height={180}
              className="object-contain"
           />
          </div>

          {/* Form */}
          <div className="w-full space-y-7">

            {/* Memoir Title */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#2C2C2C]">
                Memoir title *
              </label>

              <input
                type="text"
                placeholder="The Family Story"
                className="w-full rounded-lg border border-[#D8CEC7] bg-white px-5 py-4 text-[18px] text-[#2C2C2C] outline-none focus:border-[#2C2C2C]"
              />
            </div>

            {/* Person / Family Name */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#2C2C2C]">
                Person / Family name *
              </label>

              <input
                type="text"
                placeholder="Parents"
                className="w-full rounded-lg border border-[#D8CEC7] bg-white px-5 py-4 text-[18px] text-[#2C2C2C] outline-none focus:border-[#2C2C2C]"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="mb-2 block text-[18px] font-semibold text-[#2C2C2C]">
                Short description{" "}
                <span className="font-normal text-[#77716D]">
                  (optional)
                </span>
              </label>

              <textarea
                placeholder="Our family's stories, memories and moments together."
                rows={4}
                className="w-full resize-none rounded-lg border border-[#D8CEC7] bg-white px-5 py-4 text-[18px] text-[#2C2C2C] outline-none focus:border-[#2C2C2C]"
              />
            </div>

          </div>

          {/* Continue */}
          <div className="mt-10 w-full">
            <Link
              href="/review"
              className="block w-full rounded-lg bg-[#a7cdbd] px-6 py-4 text-center text-[20px] font-semibold text-white transition hover:opacity-90"
            >
              Continue
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
}