// PDF viewer component
"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

const MemoirPDFDocument = dynamic(
  () => import("./MemoirPDFDocument"),
  {
    ssr: false,
  }
);

export default function MemoirPDFViewer() {
  return (
    <PDFViewer
      width="100%"
      height="100%"
      showToolbar
    >
      <MemoirPDFDocument />
    </PDFViewer>
  );
}