export type MemoirContentType =
  | "written"
  | "voice"
  | "media"
  | "family-notes";

export interface WrittenMemory {
  id: string;
  title: string;
  content: string;
}

export interface VoiceMemory {
  id: string;
  title: string;
  transcript: string;
}

export interface MediaMemory {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface FamilyNote {
  id: string;
  author: string;
  content: string;
}

export interface MemoirPDFData {
  memoirTitle: string;
  personName: string;
  years?: string;
  writtenMemories: WrittenMemory[];
  voiceMemories: VoiceMemory[];
  mediaMemories: MediaMemory[];
  familyNotes: FamilyNote[];
}

/*
 * Temporary data for PDF design/testing.
 *
 * Later this will be replaced with the actual
 * user's memoir data from the application/database.
 */
export const memoirPDFData: MemoirPDFData = {
  memoirTitle: "A Life Remembered",
  personName: "Robert Harrison",
  years: "1942 — 2024",

  writtenMemories: [
    {
      id: "written-1",
      title: "A Memory of Robert",
      content:
        "Robert had a way of making ordinary moments feel meaningful. " +
        "His kindness, quiet humor, and presence stayed with the people " +
        "around him and became part of the memories we continue to carry.",
    },
  ],

  voiceMemories: [],

  mediaMemories: [],

  familyNotes: [],
};