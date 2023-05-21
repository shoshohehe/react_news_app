import { StyleSheet, SafeAreaView, Text } from "react-native";

export const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ClipScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
