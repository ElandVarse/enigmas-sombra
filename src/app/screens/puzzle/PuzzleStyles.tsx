import { StyleSheet } from "react-native";

export const PuzzleStyle = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
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
});

export default PuzzleStyle;
