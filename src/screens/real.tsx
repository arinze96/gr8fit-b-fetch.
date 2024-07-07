import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
  HealthUnit,
} from "react-native-health";
import styles from "./styles";
import { GeneralPadding, width } from "../../constants/dimensions";
import { colors } from "../../theme";

const BodyActivityData = () => {
  const [steps, setSteps] = useState<any>(0.0);
  const [calories, setCalories] = useState<any>(0.0);
  const [distanceWalked, setDistanceWalked] = useState<any>(0.0);
  const [hasPermission, sethasPermission] = useState<boolean>(false);

  let stepsOptions: HealthInputOptions = {
    date: new Date().toISOString(),
    includeManuallyAdded: false,
  };

  let calorieOptions: HealthInputOptions = {
    startDate: new Date(2021, 0, 0).toISOString(),
    endDate: new Date().toISOString(),
    ascending: true,
    includeManuallyAdded: true,
  };

  let distanceOptions = {
    unit: HealthUnit?.mile,
    date: new Date(2016, 5, 1).toISOString(),
    includeManuallyAdded: false,
  };

  const permissions: HealthKitPermissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.StepCount,
        AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
        AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
      ],
      write: [],
    },
  };

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, (error) => {
      if (error) {
        console.log("Error, getting permissions");
        return;
      } else {
        sethasPermission(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!hasPermission) {
      return;
    } else {
      AppleHealthKit.getStepCount(stepsOptions, (error, results) => {
        if (error) {
          return;
        }
        console.log(results.value);
        setSteps(results.value);
      });

      AppleHealthKit.getActiveEnergyBurned(calorieOptions, (error, results) => {
        if (error) {
          return;
        }
        console.log(results);
        setCalories(results);
      });

      AppleHealthKit.getDistanceWalkingRunning(
        distanceOptions,
        (error, results) => {
          if (error) {
            return;
          }
          console.log(results.value);
          setDistanceWalked(results.value);
        }
      );
    }
  }, [hasPermission]);

  return (
    <>
      <View style={[styles.statusBar]}>
        <SafeAreaView>
          <StatusBar translucent barStyle={"light-content"} />
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/walking.gif")}
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              BODY ACTIVITY DATA
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: GeneralPadding,
              width: width,
              paddingBottom: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.activityContainer}>
              <Text style={styles.activityTitle}>STEPS</Text>
              <Text style={styles.activityMetrics}>{steps} Pl</Text>
            </View>

            <View style={styles.activityContainer}>
              <Text style={styles.activityTitle}>CALORIE</Text>
              <Text style={styles.activityMetrics}>{calories} kcal</Text>
            </View>

            <View style={styles.activityContainer}>
              <Text style={styles.activityTitle}>DISTANCE</Text>
              <Text style={styles.activityMetrics}>{steps} Km</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default BodyActivityData;
