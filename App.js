import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, Alert } from 'react-native';
import AppButton from './src/components/AppButton';
import ResultCard from './src/components/ResultCard';

export default function App() {
  const [precoEtanol, setPrecoEtanol] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  const calcularVantagem = () => {
    const etanol = parseFloat(precoEtanol.replace(',', '.'));
    const gasolina = parseFloat(precoGasolina.replace(',', '.'));

    if (isNaN(etanol) || isNaN(gasolina) || etanol <= 0 || gasolina <= 0) {
      Alert.alert('Erro', 'Por favor, digite valores válidos para os combustíveis.');
      return;
    }

    const relacao = etanol / gasolina;
    const calculoPorcentagem = (relacao * 100).toFixed(1);

    if (relacao < 0.7) {
      setResultado('ETANOL');
    } else {
      setResultado('GASOLINA');
    }

    setPorcentagem(calculoPorcentagem);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>ÁLCOOL OU GASOLINA</Text>

      {/* Imagem Local do Posto */}
      <Image 
        source={require('./assets/postoitajuba.png')} 
        style={styles.image} 
        resizeMode="contain"
      />

      <Text style={styles.label}>Você sabia? O menor posto de gasolina do mundo se encontra em MG, na cidade de Itajubá.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Preço do Etanol (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 3.49"
          keyboardType="numeric"
          value={precoEtanol}
          onChangeText={setPrecoEtanol}
        />

        <Text style={styles.label}>Preço da Gasolina (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5.59"
          keyboardType="numeric"
          value={precoGasolina}
          onChangeText={setPrecoGasolina}
        />

        {/* Componente Modular do Botão */}
        <AppButton title="VERIFICAR VANTAGEM" onPress={calcularVantagem} />

        {/* Componente Modular do Card de Resultado */}
        <ResultCard resultado={resultado} porcentagem={porcentagem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d1f1f',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#ffffff',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: '#ffeac3',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginTop: 5,
    backgroundColor: '#fcfcfc',
  },
});