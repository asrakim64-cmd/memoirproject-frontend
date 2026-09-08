// PDF written memory component
import { Page, StyleSheet, Text, View } from "@react-pdf/renderer";

interface MemoirPDFWrittenMemoryProps {
  title: string;
  content: string;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FBF8F1",
    padding: 54,
    fontFamily: "Times-Roman",
    color: "#351A23",
  },

  eyebrow: {
    fontSize: 9,
    letterSpacing: 2,
    color: "#80612F",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    color: "#351A23",
    marginBottom: 18,
  },

  divider: {
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#B99555",
    marginBottom: 26,
  },

  content: {
    fontSize: 12,
    lineHeight: 1.7,
    color: "#4A3028",
  },

  footer: {
    position: "absolute",
    bottom: 38,
    left: 54,
    right: 54,
    textAlign: "center",
    fontSize: 8,
    color: "#80612F",
    letterSpacing: 1,
  },
});

export default function MemoirPDFWrittenMemory({
  title,
  content,
}: MemoirPDFWrittenMemoryProps) {
  return (
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.eyebrow}>WRITTEN MEMORY</Text>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.divider} />

      <Text style={styles.content}>{content}</Text>

      <Text style={styles.footer}>
        MEMORIES PRESERVED WITH LOVE
      </Text>
    </Page>
  );
}