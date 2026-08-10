import Link from "next/link";
import Image from "next/image";

export default function ReviewMemoir() {
  return (
    <main className="min-h-screen bg-[#F8F2EF] px-6 py-16">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center">
        
        <div className="w-[650px] rounded-lg border border-[#D8CEC8] bg-white p-10">

          {/* Back Arrow */}
          <div className="mb-8 w-full">
            <Link
              href="/memoir-details"
              className="text-[20px] text-[#2C2C2C] transition hover:opacity-70"
            >
              ←
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-[40px] font-semibold leading-tight text-[#2C2C2C]">
              Review your memoir
            </h1>

            <p className="mt-3 text-[18px] text-[#5F5A57]">
              Make sure everything looks right.
            </p>
          </div>

          {/* Review Card */}
          <div className="w-full overflow-hidden rounded-lg border border-[#D8CEC7] bg-white">

            {/* Created For */}
            <div className="flex items-center justify-between border-b border-[#E5DDD6] px-5 py-5">
              <div className="flex items-center gap-4">

                {/* Image */}
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-lg border border-[#D8CEC7] bg-white">
                  <Image
                    src="/created-for-new.png"
                    alt="Created for"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-[18px] font-semibold text-[#2C2C2C]">
                    Created for
                  </h2>

                  <p className="mt-1 text-[17px] text-[#5F5A57]">
                    My grandparents
                  </p>
                </div>
              </div>

              <button className="rounded-lg border border-[#D8CEC7] px-4 py-2 text-[16px] text-[#2C2C2C]">
                Edit
              </button>
            </div>

            {/* Memory Focus */}
            <div className="flex items-center justify-between border-b border-[#E5DDD6] px-5 py-5">
              <div className="flex items-center gap-4">

                {/* Image */}
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-lg border border-[#D8CEC7] bg-white">
                  <Image
                    src="/memory-focus.png"
                    alt="Memory focus"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-[18px] font-semibold text-[#2C2C2C]">
                    Memory focus
                  </h2>

                  <p className="mt-1 text-[17px] leading-6 text-[#5F5A57]">
                    Childhood, Family,
                    <br />
                    Milestones, Life lessons
                  </p>
                </div>
              </div>

              <button className="rounded-lg border border-[#D8CEC7] px-4 py-2 text-[16px] text-[#2C2C2C]">
                Edit
              </button>
            </div>

            {/* Storytelling */}
            <div className="flex items-center justify-between border-b border-[#E5DDD6] px-5 py-5">
              <div className="flex items-center gap-4">

                {/* Image */}
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-lg border border-[#D8CEC7] bg-white">
                  <Image
                    src="/storytelling.png"
                    alt="Storytelling"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-[18px] font-semibold text-[#2C2C2C]">
                    Storytelling
                  </h2>

                  <p className="mt-1 text-[17px] text-[#5F5A57]">
                    Voice, Writing, Photos
                  </p>
                </div>
              </div>

              <button className="rounded-lg border border-[#D8CEC7] px-4 py-2 text-[16px] text-[#2C2C2C]">
                Edit
              </button>
            </div>

            {/* Memoir Name */}
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-4">

                {/* Image */}
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-lg border border-[#D8CEC7] bg-white">
                  <Image
                    src="/memoir-name.png"
                    alt="Memoir name"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-[18px] font-semibold text-[#2C2C2C]">
                    Memoir name
                  </h2>

                  <p className="mt-1 text-[17px] text-[#5F5A57]">
                    The Family Story
                  </p>
                </div>
              </div>

              <button className="rounded-lg border border-[#D8CEC7] px-4 py-2 text-[16px] text-[#2C2C2C]">
                Edit
              </button>
            </div>

          </div>

          {/* Continue */}
          <div className="mt-8 w-full">
            <Link
              href="/signup"
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