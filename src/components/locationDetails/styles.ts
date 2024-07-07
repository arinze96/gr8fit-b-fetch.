import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { GeneralPadding, height } from "../../constants/dimensions";
import { colors } from "../../theme";


const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const styles = StyleSheet.create({
      btn: {
        width: "60%",
        height: 30,
        backgroundColor: colors.primary.offset_dark,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        marginBottom: 20
      },
      btn_: {
        width: "50%",
        height: 30,
        backgroundColor: "rgba(0, 59, 0, 0.2)",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
        borderRadius: 6,
        marginBottom: 20
      },
      btn__: {
        width: "100%",
        height: 30,
        backgroundColor: "rgba(0, 59, 0, 0.2)",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
        borderRadius: 6,
        marginBottom: 20
      },
      wrapper: {
        width: "100%",
        height: height,
        position: "absolute",
        justifyContent: "flex-end",
      },
      userLocationDetails: {
        width: "100%",
        height: 400,
        flexDirection: "row",
        paddingHorizontal: GeneralPadding,
        justifyContent: "space-between",
      },
       locationDetailsContainer: {
        width: "66%",
        height: 400,
        justifyContent: "flex-end",
        paddingBottom: 100,
      },

      locationDescription: { fontWeight: 'bold' }
  });

  export default styles