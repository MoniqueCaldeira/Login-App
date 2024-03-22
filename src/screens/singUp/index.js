import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import Button from '../../components/button';
import Input from '../../components/input';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import { db } from '../config';
import { ref, set } from 'firebase/database'

export default function SingUp({ navigation }) {
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   async function registerUser(email, password, confirmPassword, userName) {
      if (password == confirmPassword) {
         await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

               //Create database
               set(ref(db, 'users/' + auth.currentUser.uid), {
                  username: userName,
                  email: email,
                }).then(()=>{
                  
                })
                .catch((error) => {
                  console.log(error)
                })

               // Signed in 
               Alert.alert("Usuário Cadastrado com Sucesso!");
               navigation.navigate("Login")
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               // ..
            });
      } else {
         Alert.alert("As senhas não são iguais");
      }
   };

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
            onChangeText={text => setEmail(text)} value={email}
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

         <Button color={"#aab0ff"} title='Criar Conta' onPress={() => registerUser(email, password, confirmPassword, userName)}/>

         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login</Text>
         </TouchableOpacity>

      </View>
   );
}
