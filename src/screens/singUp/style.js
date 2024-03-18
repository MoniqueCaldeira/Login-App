import { StyleSheet } from "react-native";
import { color } from "../../theme/color";

export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: color.blue
   },
   loginText:{
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: color.white,
      textDecorationLine: 'underline',
      position: 'relative',
      top:30
   }
 });
 