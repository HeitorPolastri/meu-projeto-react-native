import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'


export default function App() {
  return (
    

        <View style={styles.secao}>
        <Text style={styles.titulo}>Usuario: Heitor Polastri</Text>
        <Text style={styles.titulo}>|Moro em muriaé e sou vascaino|</Text>
        <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.imagem}
          />
          <Button style={styles.botao}>Ação</Button>
         </View>
)          
}

const styles = StyleSheet.create({
  
  secao: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  
  imagem: {
    width: 80,
    height: 80,
 },
 titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  botao: {
    
    padding: 10,
    backgroundColor: '#567',
    marginBottom: 8,
  }
 
  
});