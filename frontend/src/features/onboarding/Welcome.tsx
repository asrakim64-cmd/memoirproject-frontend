import Link from "next/link";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex items-center justify-center px-6">
      <section className="w-full max-w-3xl text-center">

        <div className="inline-block bg-[#F1E3DF] px-5 py-2 rounded-full mb-7">
          <p className="text-[#765548] text-sm font-semibold tracking-[0.2em] uppercase">
            Memoir
          </p>
        </div>

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight">
          Every story deserves
          <br />
          to be remembered.
        </h1>

        <p className="mt-7 text-black text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
          Let&apos;s create something meaningful,
          <br />
          one memory at a time.
        </p>

        <div className="mt-10">
          <Link
            href="/easy-first-interaction"
            className="inline-flex items-center justify-center bg-[#765548] text-white text-lg font-semibold px-10 py-4 rounded-md hover:bg-[#765548] transition"
          >
            Let&apos;s Begin
          </Link>
        </div>

      </section>
    </main>
  );
}