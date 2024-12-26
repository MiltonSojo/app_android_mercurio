import { StyleSheet, Text, View, Button } from "react-native";

export default function GamePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página del Juego</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
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
});
