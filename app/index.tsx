import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>*..Home Screen..*</Text>
      {/* <Link href="/about">About</Link> */}

      <Link href="/LoginScreen">
        <Button mode="contained" >
          <Text>lets Sign UP</Text>
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  }
})
