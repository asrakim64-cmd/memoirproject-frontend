import {
  Document,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

import MemoirPDFCover from "./MemoirPDFCover";
import MemoirPDFTableOfContents from "./MemoirPDFTableOfContents";
import { memoirPDFData } from "./memoir-pdf-data";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FBF8F1",
    padding: 54,
    fontFamily: "Times-Roman",
    color: "#351A23",
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  body: {
    fontSize: 12,
    lineHeight: 1.7,
    color: "#4A3028",
  },
});

export default function MemoirPDFDocument() {
  const { writtenMemories } = memoirPDFData;

  const tocItems = [];

  if (writtenMemories.length > 0) {
    tocItems.push({
      title: "Written Memories",
      page: 3,
    });
  }

  return (
    <Document>
      <MemoirPDFCover
        memoirTitle={memoirPDFData.memoirTitle}
        personName={memoirPDFData.personName}
        years={memoirPDFData.years}
      />

      <MemoirPDFTableOfContents items={tocItems} />

      {writtenMemories.length > 0 && (
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>
            {writtenMemories[0].title}
          </Text>

          <Text style={styles.body}>
            {writtenMemories[0].content}
          </Text>
        </Page>
      )}
    </Document>
  );
}