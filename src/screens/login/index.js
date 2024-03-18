import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Alert } from 'react-native';
import { styles } from './style';
import Button from '../../components/button';
import Input from '../../components/input';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

export default function Login({ navigation }) {

   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");

   function logar(login, password) {
      signInWithEmailAndPassword(auth, login, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(auth)
            navigation.navigate("Home")
            // ...
         })
         .catch((error) => {
            console.log(error)
         });

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

         <Button title='Entrar' onPress={() => { logar(login, password) }} />


         <Button color={"#aab0ff"} title='Criar Conta' onPress={() => navigation.navigate("SingUp")} />

      </View>
   );
}

