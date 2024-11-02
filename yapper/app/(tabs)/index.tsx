import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
      <View style={styles.wrapperContainer}>
          <Text>Home Screen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingTop: 50,
  }
});