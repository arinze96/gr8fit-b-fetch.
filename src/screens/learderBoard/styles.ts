import { StyleSheet } from "react-native";
import LeaderBoard from ".";
import { colors } from "../../theme";

const styles = StyleSheet.create({
  container: { flex: 1 },

  statusBar: {
    height: 60,
    backgroundColor: colors.primary.offset_night,
  },

  pageTitleContainer: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary.offset_night,
    justifyContent: "center",
    alignItems: "center",
  },

  pageTitle: {
    color: colors.primary[10],
    fontWeight: "bold",
    fontSize: 18,
  },

  contentContainerStyles: {
    flexGrow: 1,
  },

  leaderBoardTable: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  leaderboardHeading: {
    width: "22%",
    height: 30,
    backgroundColor: colors.gray[1000],
    borderRightWidth: 1,
    borderColor: colors.primary[10],
    justifyContent: "center",
    alignItems: "center",
  },

  leaderBoardData: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  leaderBoardTitle: { color: colors.primary[10], fontWeight: "bold" },
  
  leaderboardHeading_: {
    width: "22%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  leaderBoardTitle_: { color: colors.gray[1000] },
});

export default styles;
