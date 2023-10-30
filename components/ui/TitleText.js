import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function TitleText({ children }) {
  return (<Text style={styles.title}>{children}</Text>);
}
export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 20,
    borderRadius: 6
  },
});
