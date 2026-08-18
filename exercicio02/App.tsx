import { View, Text, TextInput, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>

        <View style={styles.secao}>
          <Text style={styles.titulo}>Heitor Polastri</Text>
          <Text style={styles.subtitulo}>Sou Vasco da Gama</Text>
          <TextInput
        placeholder="Qual seu time?"
      />
         
        </View>

        

        <ImageBackground
          source={{ uri: 'https://picsum.photos/seed/rn/400/150' }}
          style={styles.imagemFundo}
          resizeMode="cover"
        >
        </ImageBackground>
        <View>
        <Pressable>
      <Text>CLIQUE</Text>
    </Pressable>
        </View>

        

      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  secao: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
  },
  
  imagemFundo: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  
});