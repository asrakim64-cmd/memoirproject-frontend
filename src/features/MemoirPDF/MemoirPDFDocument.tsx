import React from "react";
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
  // Page 3 onwards = Chapters

  const tocItems: { title: string; page: number }[] = [];

  let currentPage = 3;

  chapters.forEach((chapter) => {
    tocItems.push({
      title: chapter.title,
      page: currentPage,
    });

    // Each chapter is counted as one page for the TOC.
    currentPage += 1;
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

      {/* Memoir Chapters */}
      {chapters.map((chapter) => {
        const writtenMemories = chapter.memories.filter(
          (memory) => memory.type === "written"
        );

        const voiceMemories = chapter.memories.filter(
          (memory) => memory.type === "voice"
        );

        const mediaMemories = chapter.memories.filter(
          (memory) => memory.type === "media"
        );

        return (
          <React.Fragment key={chapter.id}>
            {/* Written Memories */}
            {writtenMemories.length > 0 && (
              <MemoirPDFWrittenMemory
                title={chapter.title}
                memories={writtenMemories}
              />
            )}

            {/* Voice Memories */}
            {voiceMemories.map((memory) => (
              <MemoirPDFVoiceMemory
                key={memory.id}
                title={chapter.title}
                transcript={memory.transcript}
              />
            ))}

            {/* Media Memories */}
            {mediaMemories.map((memory) => {
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
            })}
          </React.Fragment>
        );
      })}
    </Document>
  );
}