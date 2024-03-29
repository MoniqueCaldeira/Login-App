
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import SingUp from '../screens/singUp';
import Login from '../screens/login';
import Out from '../components/singOut';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Out" component={Out} />
    </Stack.Navigator>
  );
}
