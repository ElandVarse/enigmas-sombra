import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';

import Lightbulb from "../../assets/images/lightbulb";


const AskForATip: React.FC = () => {
  // Modal logic
  const [modalVisible, setModalVisible] = useState(false);

  const randomTips = [
    'Você sabia que pode usar useMemo pra otimizar renderizações?',
    'A prática leva à perfeição!',
    'Não esqueça de fazer commit!',
    'Erros são parte do processo.',
    'Experimente algo novo hoje.',
  ];

  const randomTip = randomTips[Math.floor(Math.random() * randomTips.length)];

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
            <Text style={styles.modalText}>{randomTip}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff' }}>Fechar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    maxWidth: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
