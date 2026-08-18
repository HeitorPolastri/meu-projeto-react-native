

import {Text, ScrollView,StyleSheet, Switch} from 'react-native';
 import {Card} from 'react-native-paper'
import { useState } from 'react';




export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (

    
      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.appTitulo}>Qual seu time?</Text>
        <Text style={styles.appsubTitulo}>SO TEM UMA OPÇÃO!</Text>

        <Card style={styles.card}> 
        <Text style={styles.appsubTitulo}> VASCO DA GAMA</Text>
          <Switch
        trackColor={{ false: 'black', true: 'blue' }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
        </Card>


      </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  
  scroll: {
    padding: 16,
  },
  appTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  appsubTitulo:{
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card:{
    backgroundColor: 'red',
    padding: 100,
     alignItems: 'center',
  }
 
});