import { StyleSheet } from "react-native";

export const PuzzleStyle = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tipContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },
  back: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#8F7535",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#8F7535",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  puzzle: {
    borderRadius: 8,
    marginBottom: 20,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    maxWidth: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});

export default PuzzleStyle;
