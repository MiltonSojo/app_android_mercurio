import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Game"
          component={GamePage}
          options={{ title: "Juego" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{ title: "Ajustes" }}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{ title: "Acerca de" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
