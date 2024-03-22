import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Loading } from "../../components/loading"

import { auth } from '../config';
import { db } from '../config';
import { ref, set, onValue, update, remove } from 'firebase/database'

export default function Home({navigation}) {

  const [user, setUser] = useState("")

  useEffect(() =>{
    readData()
  })
  
  function readData(){
    const starCountRef = ref(db, '/users/' + auth.currentUser.uid);
      onValue(starCountRef, (snapshot) => {
         const data = snapshot.val();
         setUser(data.username)
      });
  }

  function updateData(){
    update(ref(db, '/users/' + auth.currentUser.uid),{
      username: 'Caldeira',
    }).then(()=>{
      
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function deleteData(){
    
      remove(ref(db, '/users/' + auth.currentUser.uid))
      alert("Usuário Removido")
      navigation.navigate("Login")
  }

  if (user){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>Bem Vindo {user}</Text>
        <StatusBar style="auto" />
        <Button title='Sair' onPress={()=> navigation.navigate("Out")}/>
        <Button title='Update Name' onPress={updateData}/>
        {/*<Button title='Delete User' onPress={deleteData}/>*/}
      </View>
    );
  }
  else{
    return <Loading/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
