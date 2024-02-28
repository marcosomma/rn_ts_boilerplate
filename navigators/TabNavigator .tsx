import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StateContext } from "../context/providers/State";
import { HomeScreen, TestScreen } from "../containers";
import { colors } from "../styles";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { state } = useContext(StateContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TestScreen") {
            iconName = focused ? "happy" : "happy-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.gray400,
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarBadge: state.home,
          tabBarBadgeStyle: { backgroundColor: colors.error },
        }}
      />
      <Tab.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          tabBarBadge: state.test,
          tabBarBadgeStyle: { backgroundColor: colors.error },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
