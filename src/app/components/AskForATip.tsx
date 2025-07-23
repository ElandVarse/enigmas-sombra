import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

import puzzles from "../../assets/Puzzles";

import Lightbulb from "../../assets/images/lightbulb";

type AskForATipProps = {
  id: number | string;
};

const AskForATip = ({ id }: AskForATipProps) => {
  const puzzleId = id;
  const puzzle = puzzles.find((p) => p.id === puzzleId);

  // Modal logic
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.tipContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Lightbulb />
        </Pressable>
      </View>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {puzzle ? (
              <Text style={styles.modalText}>{puzzle.tip}</Text>
            ) : (
              <Text style={styles.modalText}>Dica não encontrada</Text>
            )}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff" }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AskForATip;

const styles = StyleSheet.create({
  tipContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },
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
