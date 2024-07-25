import UserHome from "../screens/UserHome";
import UserPayment from "../screens/UserPaymentMethod";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function User() {
  return (
    <Stack.Navigator initialRouteName="UserHome">
      <Stack.Screen
        name="UserHome"
        component={UserHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserPayment"
        component={UserPayment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
