import { StyleSheet, Text, View, Button, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function StartPage({ navigation }) {
  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mercurio</Text>
      <View style={styles.buttonContainer}>
        <Button title="Jugar" onPress={() => navigation.navigate("Game")} />
        <Button
          title="Ajustes"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button
          title="Acerca de"
          onPress={() => navigation.navigate("About")}
        />
        <Button title="Salir" onPress={handleExit} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 50,
  },
  buttonContainer: {
    gap: 20,
    width: "80%",
  },
});
