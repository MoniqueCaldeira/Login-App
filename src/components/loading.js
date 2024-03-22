import { ActivityIndicator, View, StatusBar } from "react-native";
import {color} from "../theme/color";
<StatusBar backgroundColor={color.blue} style='auto' />
export function Loading(){
   return(
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#00003b"}}>
         
         
         <ActivityIndicator size="large" color="#fff" />
      </View>
   )
}