import { router } from "expo-router";
import { Text, View, Button, StyleSheet, Platform } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Óla Mundo</Text>
      <Text style={styles.subtitle}>Faculdade de Sistema de Informação</Text>
      <Button
        title="Fazer login"
        onPress={() => {
          router.navigate("/two-screem");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 42 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
  },
});
