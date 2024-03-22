import Stack from "./src/navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from "./src/components/loading";

import { 
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter"

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
 })

  if(!fontsLoaded){
    return <Loading />;
 }
 else{
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
 }
}
