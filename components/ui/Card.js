import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return ( <View style={styles.card}>{children}</View>);
}

export default Card;

const styles = StyleSheet.create({
    card: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      marginTop: 36,
      marginHorizontal: 24,
      backgroundColor: Colors.primary800,
      borderRadius: 8,
      elevation: 10, //Android only
      shadowColor: "black", //iOS only
      shadowOffset: { width: 0, height: 2 }, //iOS only
      shadowRadius: 6, //iOS only
      shadowOpacity: 0.25, //iOS only
    },
});