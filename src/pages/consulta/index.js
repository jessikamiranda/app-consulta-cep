import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

function consulta(){
  navigation = useNavigation();

    function voltar(){
        navigation.goBack();
    }

  //state para armazenar o cep
  let [cep, setCep] = useState('');
  let [cepUsuario, setCepUsuario] = useState(null);

  //função que busca o cep
  async function buscarCep(){
    if (cep == '') {
      alert("Digite um CEP válido!");
      setCep('');
      setCepUsuario(null);
    }
    try {
      const response = await api.get('/'+cep+'json/');
      console.log(response.data);
      setCepUsuario(response.data);
      Keyboard.dismiss();
    } 
    catch (erro) {
      setCepUsuario(null);
      alert("O cep não foi encontrado!");
    }
  }

  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.voltar} onPress={voltar}>
        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={24} color="#020202" />
      </TouchableOpacity>

      <Image style={styles.image} source={require('../../assets/image2.png')}/>
      
      <View style={styles.containerinput}>
        <TextInput style={styles.input} placeholder="Digite seu CEP" keyboardType='numeric' value={cep} onChangeText={ (valor) => setCep(valor)} />

        <TouchableOpacity style={styles.button}>
            <MaterialIcons style={styles.icon} name="keyboard-arrow-right" size={24} color="#F5F2F5" onPress={buscarCep}/>
        </TouchableOpacity>
      </View>

      {
      cepUsuario &&
      <View style={styles.resultado}>
        <Text style={styles.textoresultado}>Cep: </Text>
        <Text style={styles.textoresultado}>Logradouro: </Text>
        <Text style={styles.textoresultado}>Bairro: </Text>
        <Text style={styles.textoresultado}>Localidade: </Text>
        <Text style={styles.textoresultado}>UF: </Text>
      </View>
      }
    </View>
  )
}

export default consulta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2F5',
    justifyContent: 'space-between',
  },

  image:{
      width: 400,
      height: 400,
      alignSelf: 'center',
  },

  resultado:{
      flex:1,
      padding: 32,
  },

  input:{
      backgroundColor: '#FFF',
      width: 300,
      height: 50,
      borderRadius: 30,
      padding: 18,
      alignSelf: 'center',

      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 3,
      shadowRadius: 30,
      elevation: 3,
  },

  button:{
      backgroundColor: '#020202',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      alignSelf: 'center',
      marginLeft: 7,

      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 3,
      shadowRadius: 30,
      elevation: 3,
  },

  containerinput:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 50,
  },

  voltar:{
      marginTop: 50,
      marginLeft: 33,
  },

  textoresultado:{
      marginBottom: 30,
      fontWeight: "bold",
      color: '#020202',
      fontSize: 16,
  },
});
