import React from 'react';
import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Os Melhores sabores de sorvete do segundo DS
      </Text>
      <FlatList
        data={arrayDados}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.containerSorvete}>
            <Text style={styles.textoSorvete}>{item.sorvete}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf61',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    color:'#1515',
  },
  textoSorvete: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#1515',
    borderRadius: 10,
    padding: 10,
    color:'#fff',
    fontWeight:900,
  },
  containerSorvete: {
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

const arrayDados = [
  { sorvete: 'Flocos' },
  { sorvete: 'Ovomaltine' },
  { sorvete: 'Napolitano' },
  { sorvete: 'Abacaxi ao vinho' },
  { sorvete: 'Trufado' },
  { sorvete: 'Céu Azul' },
  { sorvete: 'Maracuja' },
  { sorvete: 'Chiclete' },
  { sorvete: 'Panetone' },
  { sorvete: 'Sensação' },
  { sorvete: 'Morango' },
  { sorvete: 'Chocolate' },
  { sorvete: 'Chocomenta' },
  { sorvete: 'Limão' },
];
