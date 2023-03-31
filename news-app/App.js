import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles";

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageURL={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
      />
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{items}</ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
