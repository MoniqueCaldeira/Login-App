import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import  {styles}  from './style';
import Button from '../../components/button';
import Input from '../../components/input';

export default function SingUp({navigation}) {

   const [userName, setUserName] = useState("");
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image 
         source={require("../../assets/rocket.png")}
      />

      <Input 
         iconName={'person-outline'} 
         placeholder={"nome de usuário"} 
         onChangeText={text => setUserName(text)} value={userName}
      />

      <Input 
         iconName={'mail-outline'} 
         placeholder={"email"} 
         onChangeText={text => setLogin(text)} value={login}
      />

      <Input 
         iconName={'key-outline'} 
         placeholder={"senha"}  
         onChangeText={text => setPassword(text)} 
         value={password}
         secureTextEntry={true}
      />

      <Input 
         iconName={'key-outline'} 
         placeholder={"confirme a senha"}  
         onChangeText={text => setConfirmPassword(text)} 
         value={confirmPassword}
         secureTextEntry={true}
      />

      <Button color={"#aab0ff"} title='Criar Conta' onPress={()=> navigation.navigate("Login")}/>
      
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}
