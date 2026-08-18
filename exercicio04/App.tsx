import {
  View,
  Text,
  ScrollView,
  TextInput,
  SectionList,
  StyleSheet,
  DefaultSectionT,
  SectionListData,
} from 'react-native';



const JOGADORES: SectionListData<string, DefaultSectionT>[] = [
  { title: 'Jogadores', data: ['Cuesta', 'Spinelli', 'Lucas Piton', 'Nuno'] },
 
];



function renderNomes({ item }: any) {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
}

function renderCabecalho({ section }: { section: SectionListData<string, DefaultSectionT> }) {
  return (
    <View style={styles.cabecalhoSecao}>
      <Text>{section.title as string}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.appTitulo}>Jogadores ruins do Vasco da Gama</Text>

      <Text style={styles.secaoTitulo}>Sao muitos</Text>

      
      <TextInput
        placeholder="qual você acha que é o pior?"
      />
      

      
      <SectionList
        sections={JOGADORES}
        keyExtractor={(item) => item}
        renderSectionHeader={renderCabecalho}
        renderItem={renderNomes}
        scrollEnabled={false}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#444',
  },
  
  
  cabecalhoSecao: {
    backgroundColor: '#89d4f7',
    padding: 10,
borderRadius: 4,
  },
  
});