import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import  {styles}  from './style';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Login({navigation}) {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");

   function logar(){
      console.log(login, password);
      setPassword("");
      setLogin("");
   }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image 
         source={require("../../assets/rocket.png")}
      />

      <Input 
         iconName={'person-outline'} 
         placeholder={"exemplo@email.com"} 
         onChangeText={text => setLogin(text)} value={login}
      />

      <Input 
         iconName={'key-outline'} 
         placeholder={"senha"}  
         onChangeText={text => setPassword(text)} value={password}
         secureTextEntry={true}
      />
      
      <Button title='Entrar' onPress={()=> {navigation.navigate("Home"); logar()}}/>
      
      
      <Button color={"#aab0ff"} title='Criar Conta' onPress={()=> navigation.navigate("SingUp")}/>
      
    </View>
  );
}

