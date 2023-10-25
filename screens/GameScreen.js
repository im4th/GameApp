import { View, Text, StyleSheet } from "react-native";
import TitleText from "../components/TitleText";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
