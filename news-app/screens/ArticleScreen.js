import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";

export const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return <WebView source={{ uri: article.url }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
