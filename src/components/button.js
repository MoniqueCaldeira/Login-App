import { View, StyleSheet, Text, TouchableOpacity} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from "../theme/color";

export default function Button({title,color,...rest}){
   return(
      <View>
         <TouchableOpacity 
            style={[styles.button, {backgroundColor: color ? color : '#2a3473'}]}
            {...rest}>

            <Text style={styles.text}> {title} </Text>

         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   button: {
      width:300,
      height:60,
      backgroundColor: '#2a3473',
      margin:7,
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text:{
      fontSize:16,
      fontFamily: 'Inter_600SemiBold',
      color: 'white',
   }
})