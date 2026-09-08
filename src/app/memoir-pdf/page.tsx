// PDF page entry point
"use client";

import MemoirPDFViewer from "../../features/MemoirPDF/MemoirPDFViewer";

export default function MemoirPDFPage() {
  return (
    <main className="min-h-screen bg-[#EDE6DE] p-4 sm:p-6">
      <div className="mx-auto h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-xl bg-white shadow-lg sm:h-[calc(100vh-3rem)]">
        <MemoirPDFViewer />
      </div>
    </main>
  );
}