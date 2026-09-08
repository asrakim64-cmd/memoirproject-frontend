import { Page, StyleSheet, Text, View } from "@react-pdf/renderer";

interface MemoirPDFVoiceMemoryProps {
  title: string;
  transcript: string;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FBF8F1",
    padding: 48,
    fontFamily: "Times-Roman",
    color: "#351A23",
  },

  border: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#80612F",
    padding: 28,
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

  recordingBox: {
    borderWidth: 1,
    borderColor: "#D8CFC4",
    padding: 20,
    marginBottom: 28,
    alignItems: "center",
  },

  microphoneCircle: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: "#B99555",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  microphone: {
    fontSize: 20,
    color: "#713C48",
  },

  recordingLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: "#80612F",
    marginBottom: 16,
  },

  waveform: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 34,
    width: "100%",
  },

  waveLineShort: {
    width: 2,
    height: 10,
    backgroundColor: "#B99555",
    marginHorizontal: 3,
  },

  waveLineMedium: {
    width: 2,
    height: 20,
    backgroundColor: "#B99555",
    marginHorizontal: 3,
  },

  waveLineTall: {
    width: 2,
    height: 30,
    backgroundColor: "#B99555",
    marginHorizontal: 3,
  },

  transcriptionLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: "#80612F",
    marginBottom: 12,
  },

  transcript: {
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

export default function MemoirPDFVoiceMemory({
  title,
  transcript,
}: MemoirPDFVoiceMemoryProps) {
  return (
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.border}>
        <Text style={styles.eyebrow}>VOICE MEMORY</Text>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.divider} />

        {/* Voice Recording Visual */}
        <View style={styles.recordingBox}>
          <View style={styles.microphoneCircle}>
            <Text style={styles.microphone}>♫</Text>
          </View>

          <Text style={styles.recordingLabel}>
            VOICE RECORDING
          </Text>

          <View style={styles.waveform}>
            <View style={styles.waveLineShort} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineTall} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineShort} />
            <View style={styles.waveLineTall} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineTall} />
            <View style={styles.waveLineShort} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineTall} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineShort} />
            <View style={styles.waveLineTall} />
            <View style={styles.waveLineMedium} />
            <View style={styles.waveLineShort} />
          </View>
        </View>

        {/* Transcription */}
        <Text style={styles.transcriptionLabel}>
          TRANSCRIPTION
        </Text>

        <Text style={styles.transcript}>{transcript}</Text>

        <Text style={styles.footer}>
          MEMORIES PRESERVED WITH LOVE
        </Text>
      </View>
    </Page>
  );
}