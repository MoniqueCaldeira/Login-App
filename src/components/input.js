import { View, StyleSheet, Text, TextInput} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from "../theme/color";

export default function Input({iconName, ...rest}){
   return(
      <View style={styles.container}> 
         <Ionicons name={iconName} color={color.icon} size={20} />
         <TextInput
            style={styles.input}
            {...rest}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container:{
      flexDirection:"row",
      gap:20,
      width: 300,
      height: 60,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "start",
      padding:15,
      margin: 10,
      borderRadius: 50,
   },
   input:{
      fontFamily: 'Inter_700Bold',
      width: "80%",
      fontSize: 14,
      
   }
 });
 