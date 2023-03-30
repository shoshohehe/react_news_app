import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem 
        imageURL={"https://picsum.photos/id/10/300/300"}
        title="ホゲホゲ"
        author="React News"
      />
      <ListItem 
        imageURL={"https://picsum.photos/id/20/300/300"}
        title="フガフガ"
        author="React News"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
