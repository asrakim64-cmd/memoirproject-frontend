import { Document } from "@react-pdf/renderer";

import MemoirPDFCover from "./MemoirPDFCover";
import MemoirPDFTableOfContents from "./MemoirPDFTableOfContents";
import MemoirPDFWrittenMemory from "./MemoirPDFWrittenMemory";
import MemoirPDFVoiceMemory from "./MemoirPDFVoiceMemory";
import MemoirPDFMediaMemory from "./MemoirPDFMediaMemory";
import { memoirPDFData } from "./memoir-pdf-data";

export default function MemoirPDFDocument() {
  const {
    memoirTitle,
    personName,
    years,
    writtenMemories,
    voiceMemories,
    mediaMemories,
  } = memoirPDFData;

  // Page 1 = Cover
  // Page 2 = Table of Contents
  // Page 3 onwards = Memory sections
  const tocItems = [];

  let currentPage = 3;

  if (writtenMemories.length > 0) {
    tocItems.push({
      title: "Written Memories",
      page: currentPage,
    });

    currentPage += writtenMemories.length;
  }

  if (voiceMemories.length > 0) {
    tocItems.push({
      title: "Voice Memories",
      page: currentPage,
    });

    currentPage += voiceMemories.length;
  }

  if (mediaMemories.length > 0) {
    tocItems.push({
      title: "Media Memories",
      page: currentPage,
    });
  }

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

      {/* Written Memories */}
      {writtenMemories.map((memory) => (
        <MemoirPDFWrittenMemory
          key={memory.id}
          title={memory.title}
          content={memory.content}
        />
      ))}

      {/* Voice Memories */}
      {voiceMemories.map((memory) => (
        <MemoirPDFVoiceMemory
          key={memory.id}
          title={memory.title}
          transcript={memory.transcript}
        />
      ))}

      {/* Media Memories */}
      {mediaMemories.map((memory) => (
        <MemoirPDFMediaMemory
          key={memory.id}
          title={memory.title}
          type={memory.type}
          src={memory.src}
          caption={memory.caption}
        />
      ))}
    </Document>
  );
}