import { ActivityIndicator, View, StatusBar } from "react-native";
import {color} from "../theme/color";

export function Loading(){
   return(
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#00003b"}}>
         <StatusBar backgroundColor={color.blue} style='auto' />
         <ActivityIndicator size="large" color="#fff" />
      </View>
   )
}