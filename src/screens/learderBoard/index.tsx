import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../../utils/firebase";
import styles from "./styles";
import { ScrollView } from "react-native";
import { colors } from "../../theme";

const LeaderBoard = () => {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const usersData = collection(database, "users");

    const unsubscribe = onSnapshot(usersData, (snapshot) => {
      let usersList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(usersList);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <View style={[styles.statusBar]}>
        <SafeAreaView>
          <StatusBar translucent barStyle={"light-content"} />
        </SafeAreaView>
      </View>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>ACTIVITY LEADERBOARD</Text>
      </View>
      <View style={styles.leaderBoardTable}>
        <View style={{ ...styles.leaderboardHeading, width: "12%" }}>
          <Text style={styles.leaderBoardTitle}>S/N</Text>
        </View>
        <View style={styles.leaderboardHeading}>
          <Text style={styles.leaderBoardTitle}>USER-ID</Text>
        </View>
        <View style={styles.leaderboardHeading}>
          <Text style={styles.leaderBoardTitle}>STEPS</Text>
        </View>
        <View style={styles.leaderboardHeading}>
          <Text style={styles.leaderBoardTitle}>CALORIES</Text>
        </View>
        <View style={styles.leaderboardHeading}>
          <Text style={styles.leaderBoardTitle}>DISTANCE</Text>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyles}
        >
          <>
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="small" color="#000" />
              </View>
            ) : (
              users?.map((items: any, index: number) => {
                return (
                  <View
                    key={index}
                    style={{
                      ...styles.leaderBoardData,
                      backgroundColor:
                        index % 2 == 0 ? colors.primary[10] : colors.gray[100],
                    }}
                  >
                    <View
                      style={{ ...styles.leaderboardHeading_, width: "12%" }}
                    >
                      <Text style={styles.leaderBoardTitle_}>{index}</Text>
                    </View>
                    <View style={styles.leaderboardHeading_}>
                      <Text style={styles.leaderBoardTitle_}>
                        {items?.user_id}
                      </Text>
                    </View>
                    <View style={styles.leaderboardHeading_}>
                      <Text style={styles.leaderBoardTitle_}>
                        {items?.steps}
                      </Text>
                    </View>
                    <View style={styles.leaderboardHeading_}>
                      <Text style={styles.leaderBoardTitle_}>
                        {items?.calories}
                      </Text>
                    </View>
                    <View style={styles.leaderboardHeading_}>
                      <Text style={styles.leaderBoardTitle_}>
                        {items?.distanceWalked}
                      </Text>
                    </View>
                  </View>
                );
              })
            )}
          </>
        </ScrollView>
      </View>
    </>
  );
};

export default LeaderBoard;
