import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function home() {

    navigation = useNavigation();

    function abrirConsulta(){
        navigation.navigate('consulta');
    }

  return (
    <View style={styles.container}>

      <Text style={styles.nome}>/ConsultaCep:</Text>
      <Text style={styles.titulo}>Consumindo api ViaCep.</Text>
      <Image style={styles.image} source={require('../../assets/image.png')}/>
      
      <TouchableOpacity style={styles.button} onPress={abrirConsulta}>
          <Text style={styles.textbutton}>Começar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2F5',
  },

  nome:{
    marginTop: 50,
    left: 41,
    fontWeight: "bold",
    fontSize: 16,
    color: '#020202',
    marginBottom: 37,
  },

  titulo:{
    left: 41,
    fontWeight: "bold",
    fontSize: 30,
    color: '#020202',
    letterSpacing: 1,
    width: 200,
    marginBottom: 30,
  },

  image:{
      width: 500,
      height: 500,
      alignSelf: 'center',
  },

  button:{
      backgroundColor: '#020202',
      width: 330,
      alignSelf: 'center',
      height: 54,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
  },

  textbutton:{
      color: '#F5F2F5',
      fontWeight: "bold",
      fontSize: 16,
  },
});
