// PDF media memory component
import { Page, StyleSheet, Text, View, Image } from "@react-pdf/renderer";

interface MemoirPDFMediaMemoryProps {
  title: string;
  type: "image" | "video";
  src: string;
  caption?: string;
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

  imageContainer: {
    alignItems: "center",
    marginBottom: 18,
  },

  image: {
    maxWidth: 440,
    maxHeight: 500,
    objectFit: "contain",
  },

  videoPlaceholder: {
    width: 440,
    height: 260,
    borderWidth: 1,
    borderColor: "#D8CFC4",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  videoText: {
    fontSize: 12,
    color: "#713C48",
  },

  caption: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#80612F",
    textAlign: "center",
    marginTop: 8,
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

export default function MemoirPDFMediaMemory({
  title,
  type,
  src,
  caption,
}: MemoirPDFMediaMemoryProps) {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>MEDIA MEMORY</Text>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.divider} />

      {type === "image" ? (
        <View style={styles.imageContainer}>
          <Image src={src} style={styles.image} />
        </View>
      ) : (
        <View style={styles.videoPlaceholder}>
          <Text style={styles.videoText}>Video Memory</Text>
        </View>
      )}

      {caption && <Text style={styles.caption}>{caption}</Text>}

      <Text style={styles.footer}>
        MEMORIES PRESERVED WITH LOVE
      </Text>
    </Page>
  );
}