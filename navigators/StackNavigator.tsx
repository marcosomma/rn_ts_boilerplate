import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestScreen } from "../containers";
import TabNavigator from "./TabNavigator ";
import { colors } from "../styles";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawerNavigator"
        screenOptions={{
          headerTintColor: colors.secondary,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{
            title: "Test Screen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
