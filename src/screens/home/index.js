import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
      <Button title='Sair' onPress={()=> navigation.navigate("Login")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
