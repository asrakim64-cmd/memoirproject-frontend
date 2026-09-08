import { Document } from "@react-pdf/renderer";

import MemoirPDFCover from "./MemoirPDFCover";
import MemoirPDFTableOfContents from "./MemoirPDFTableOfContents";
import MemoirPDFWrittenMemory from "./MemoirPDFWrittenMemory";
import MemoirPDFVoiceMemory from "./MemoirPDFVoiceMemory";
import MemoirPDFMediaMemory from "./MemoirPDFMediaMemory";
import { memoirPDFData } from "./memoir-pdf-data";

export default function MemoirPDFDocument() {
  const { memoirTitle, personName, years, chapters } = memoirPDFData;

  // Page 1 = Cover
  // Page 2 = Table of Contents
  // Page 3 onwards = Chapters / Memories

  const tocItems: { title: string; page: number }[] = [];

  let currentPage = 3;

  chapters.forEach((chapter) => {
    tocItems.push({
      title: chapter.title,
      page: currentPage,
    });

    // For now each memory component renders as one PDF page.
    // This will be refined later when the individual memory
    // components support multiple contributors/content flow.
    currentPage += chapter.memories.length;
  });

  return (
    <Document>
      {/* Page 1 — Cover */}
      <MemoirPDFCover
        memoirTitle={memoirTitle}
        personName={personName}
        years={years}
      />

      {/* Page 2 — Table of Contents */}
      <MemoirPDFTableOfContents items={tocItems} />

      {/* Chapters */}
      {chapters.map((chapter) =>
        chapter.memories.map((memory) => {
          if (memory.type === "written") {
            return (
              <MemoirPDFWrittenMemory
                key={memory.id}
                title={chapter.title}
                content={memory.paragraphs.join("\n\n")}
              />
            );
          }

          if (memory.type === "voice") {
            return (
              <MemoirPDFVoiceMemory
                key={memory.id}
                title={chapter.title}
                transcript={memory.transcript}
              />
            );
          }

          if (memory.type === "media") {
            const firstMedia = memory.media[0];

            return (
              <MemoirPDFMediaMemory
                key={memory.id}
                title={chapter.title}
                type={firstMedia?.type ?? "image"}
                src={firstMedia?.src ?? ""}
                caption={firstMedia?.caption ?? memory.story}
              />
            );
          }

          return null;
        })
      )}
    </Document>
  );
}