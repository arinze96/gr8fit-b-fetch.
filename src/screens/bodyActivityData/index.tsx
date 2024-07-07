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
import { database } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

const BodyActivityData = () => {
  const [steps, setSteps] = useState<any>(0.0);
  const [calories, setCalories] = useState<any>(0.0);
  const [distanceWalked, setDistanceWalked] = useState<any>(0.0);
  const [hasPermission, sethasPermission] = useState<boolean>(false);
  const [count, setCount] = useState(0);

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
    }

    const fetchData = () => {
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
        unit: HealthUnit.mile,
        date: new Date().toISOString(),
        includeManuallyAdded: false,
      };

      AppleHealthKit.getStepCount(stepsOptions, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setSteps(results.value);
        updateFirestore("steps", results.value);
      });

      AppleHealthKit.getActiveEnergyBurned(calorieOptions, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setCalories(results);
        updateFirestore("calories", results);
      });

      AppleHealthKit.getDistanceWalkingRunning(
        distanceOptions,
        (error, results) => {
          if (error) {
            console.error(error);
            return;
          }
          setDistanceWalked(results.value);
          updateFirestore("distanceWalked", results.value);
        }
      );

      setCount((prevCount) => prevCount + 1);
    };

    fetchData();
    const interval = setInterval(fetchData, 3600);
    return () => clearInterval(interval);
  }, [hasPermission]);

  const updateFirestore = (field: any, value: any) => {
    const userId = `user${Math.floor(Math.random() * 1000000)}`;
    const docRef = doc(database, "users", userId);

    setDoc(
      docRef,
      {
        [field]: value,
        updatedAt: new Date(),
      },
      { merge: true }
    );
  };

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
          style={styles.imageBackbround}
        >
          <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>
              BODY ACTIVITY DATA
            </Text>
          </View>
          <View>
          <View
              style={styles.dbSubmitCountContainer}
            >
              <Text style={styles.submitCount}>{count}</Text>
            </View>
              <Text style={styles.submitCountTItle}>DB SUBMIT COUNT</Text>
            <View
            style={styles.activityDataContainer}
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
              <Text style={styles.activityMetrics}>{distanceWalked} Km</Text>
            </View>
          </View>
          </View>
          
        </ImageBackground>
      </View>
    </>
  );
};

export default BodyActivityData;
