import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';

import conversor from './assets/conversor.png';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido,setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('30')

  const buscarHandle = async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    // setValorConvertido(URL)
    try{
      let page = await fetch(URL)
      let json = await page.json()
      console.log(json)
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      // setValorConvertido(indice)
      console.log(indice)
      let valor = parseFloat(valorOriginal)
      let resu = ((indice*valor).toFixed(2))
      setValorConvertido(resu)
      // console.log(json[`USDBRL`].high)
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  }
  const limparResultado = () =>{
    setValorConvertido('')
    setValorOriginal('33.33')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image source={conversor} style={{width: 300, height: 100, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}} /> 
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.texto}>Moeda 1</Text>
      
      <View style={styles.viewInpu}>
      <View style={styles.bordaEscolha}>
          <Picker
            selectedValue={moedaOrigem}
            onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
            style={styles.escolha}
          >
            <Picker.Item label="Real Brasileiro" value="BRL" />
            <Picker.Item label="Dolar Americano" value="USD" />
            <Picker.Item label="Euro" value="EUR" />
            <Picker.Item label="Dólar Canadense" value="CAD" />
          </Picker>
        </View>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.texto}>Moeda 2</Text>
      <View style={styles.viewInpu}>
        <View style={styles.bordaEscolha}>
          <Picker
            selectedValue={moedaDestino}
            onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
            style={styles.escolha}
          >
            <Picker.Item label="Real Brasileiro" value="BRL" />
            <Picker.Item label="Dolar Americano" value="USD" />
            <Picker.Item label="Euro" value="EUR" />
            <Picker.Item label="Dólar Canadense" value="CAD" />
          </Picker>
        </View>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.texto}>Valor para converter:  </Text>
      <View style={styles.viewInput}>
        <TextInput value={valorOriginal} onChangeText={setValorOriginal} style={styles.texto} keyboardType='numeric' returnKeyType='done'/>
      </View>
      </View>
      <View style={{justifyContent:'space-around',alignItems:'center'}}>
      <Pressable style={styles.botao} onPress={buscarHandle}><Text style={{color:"#fff", fontSize: 18,}}>Buscar valor</Text></Pressable> 
      <Pressable style={styles.botao} onPress={limparResultado}><Text style={{color:"#fff", fontSize: 18,}}>Limpar valor</Text></Pressable>
      </View>
      <Text style={{textAlign:'center', color:"#fff", marginTop: 30, fontSize: 20, backgroundColor: '#C61F52',}}>{`Resultado: ${valorConvertido}`}</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}