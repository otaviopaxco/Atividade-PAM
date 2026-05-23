import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCard({ resultado, porcentagem }) {
  // Se não houver resultado ainda, não renderiza nada
  if (!resultado) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Abasteça com: <Text style={styles.highlight}>{resultado}</Text></Text>
      <Text style={styles.subtitle}>
        O etanol está custando {porcentagem}% da gasolina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#855000',
    borderWidth: 1,
    borderColor: '#e25734',
    padding: 20,
    borderRadius: 8,
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffe4d9',
  },
  highlight: {
    color: '#ff863f',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgb(255, 255, 255)',
    marginTop: 5,
    textAlign: 'center',
  },
});