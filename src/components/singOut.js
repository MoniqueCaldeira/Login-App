import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../screens/config';

export default function Out({navigation}){
   useEffect(()=>{
      signOut(auth);
      navigation.navigate('Login');
   })
}