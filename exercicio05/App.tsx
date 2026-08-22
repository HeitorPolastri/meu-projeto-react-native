import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';


const DADOS = [
  { id: '1', nome: 'Neymar Jr' },
  { id: '2', nome: 'Thiago Mendes' },
  { id: '3', nome: 'Dinamite' },
];

export default function App() {
  const [carregando, setCarregando] = useState(true);
  const [modalVisto, setModalVisto] = useState(false);


  useEffect(() => {
   setTimeout(() => {
      setCarregando(false);
    }, 1000); 
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View >
      {carregando ? (
        <ActivityIndicator color="#0000ff" />
      ) : (
        <>
          <Button title="Abrir Opções" onPress={() => setModalVisto(true)} />
          
          <FlatList
            data={DADOS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.lista}
          />

          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisto}
            onRequestClose={() => setModalVisto(false)}
          >
            <View >
              <Text>Qual seu preferido?:</Text>
              <TextInput
                 placeholder="qual?"
              />
              <Button title="enviar" onPress={() => setModalVisto(false)} />
            </View>
          </Modal>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
 
  lista: {
    marginTop: 20,
  },
  item: {
    padding: 15,
  
  },
});