import { useEffect } from 'react';
import { auth } from '../screens/config';

export default function Out({navigation}){
   useEffect(()=>{
      auth.signOut()
      .then(()=>{
         alert("Usuário desconectado")
         navigation.navigate('Login');
      })
   })
}