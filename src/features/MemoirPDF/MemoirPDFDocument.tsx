// PDF document component
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

  const tocItems = [];

  if (writtenMemories.length > 0) {
    tocItems.push({
      title: "Written Memories",
      page: 3,
    });
  }

  if (voiceMemories.length > 0) {
    tocItems.push({
      title: "Voice Memories",
      page: 3 + writtenMemories.length,
    });
  }

  if (mediaMemories.length > 0) {
    tocItems.push({
      title: "Media Memories",
      page: 3 + writtenMemories.length + voiceMemories.length,
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