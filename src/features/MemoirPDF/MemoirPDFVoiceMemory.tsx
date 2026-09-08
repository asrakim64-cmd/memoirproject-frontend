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

  voiceNote: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    minHeight: 58,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D8CFC4",
    borderRadius: 29,
    marginBottom: 28,
  },

  micCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#713C48",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  microphoneIcon: {
    fontSize: 18,
    color: "#B99555",
  },

  playButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  playIcon: {
    fontSize: 12,
    color: "#80612F",
  },

  waveform: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
  },

  waveShort: {
    width: 2,
    height: 8,
    backgroundColor: "#B99555",
  },

  waveMedium: {
    width: 2,
    height: 16,
    backgroundColor: "#B99555",
  },

  waveTall: {
    width: 2,
    height: 27,
    backgroundColor: "#B99555",
  },

  duration: {
    fontSize: 8,
    color: "#80612F",
    marginLeft: 8,
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

        <View style={styles.voiceNote}>
          <View style={styles.micCircle}>
            <Text style={styles.microphoneIcon}>♩</Text>
          </View>

          <View style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </View>

          <View style={styles.waveform}>
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveMedium} />
            <View style={styles.waveShort} />
            <View style={styles.waveTall} />
            <View style={styles.waveMedium} />
            <View style={styles.waveShort} />
            <View style={styles.waveTall} />
            <View style={styles.waveMedium} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
            <View style={styles.waveShort} />
            <View style={styles.waveMedium} />
            <View style={styles.waveTall} />
          </View>

          <Text style={styles.duration}>0:42</Text>
        </View>

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