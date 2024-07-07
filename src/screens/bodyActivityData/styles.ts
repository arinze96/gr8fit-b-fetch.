import { StyleSheet } from "react-native";
import { GeneralPadding, width } from "../../constants/dimensions";
import { colors } from "../../theme";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  statusBar: {
    height: 60,
    backgroundColor: colors.primary.offset_night,
  },

  activityContainer: {
    width: "32%",
    height: 120,
    borderRadius: 15,
    backgroundColor: colors.primary.offset_night,
    justifyContent: "center",
    alignItems: "center",
  },

  activityTitle: {
    fontSize: 18,
    color: colors.primary[10],
    marginBottom: 10,
  },

  activityMetrics: {
    fontSize: 25,
    color: colors.primary[10],
    fontWeight: "bold",
  },

  imageBackbround: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  pageTitleContainer: { marginTop: 20 },

  pageTitle: { fontSize: 20, fontWeight: "bold" },

  dbSubmitCountContainer: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: colors.primary.offset_night,
    borderWidth: 7,
    borderColor: colors.primary.offset,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 20,
    alignItems: "center",
  },

  submitCount: { color: colors.primary[10], fontWeight: "bold", fontSize: 25 },

  submitCountTItle: {
    color: colors.gray[1000],
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
    marginLeft: 20,
  },

  activityDataContainer: {
    paddingHorizontal: GeneralPadding,
    width: width,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
});

export default styles;
