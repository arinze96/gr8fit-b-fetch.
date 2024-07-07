import {
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import styles from "./styles";
  import moment from "moment";
  import { Ionicons, Feather } from "@expo/vector-icons";
import { colors } from "../../theme";

  
type ActionButtonProps = {
    stopTracking: () => void;
    startTracking: () => void;
    userLocation: any;
    watchId: string;
  };

const LocationDetails = ({userLocation, watchId, stopTracking, startTracking}: ActionButtonProps) => {
  return (
    <View style={styles.wrapper}>
          <View style={styles.userLocationDetails}>
            <View style={styles.locationDetailsContainer}>
              <View style={styles.btn_}>
                <Ionicons
                  name={"earth"}
                  size={20}
                  color={"#000"}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.locationDescription}>
                  {userLocation?.continent_name}
                </Text>
              </View>
              <View style={styles.btn_}>
                <Text style={styles.locationDescription}>
                  {userLocation?.emoji_flag} {userLocation?.country_name}
                </Text>
              </View>
              <View style={styles.btn__}>
                <Ionicons
                  name={"location"}
                  size={20}
                  color={"#000"}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.locationDescription}>LONG:{userLocation?.longitude} {" "} LAT:{userLocation?.latitude}</Text>
              </View>
              <View style={styles.btn__}>
                <Feather
                  name={"clock"}
                  size={20}
                  color={"#000"}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.locationDescription}>
                  {moment(userLocation?.time_zone?.current_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </Text>
              </View>
              {watchId ? (
                <TouchableOpacity
                  style={{ ...styles.btn, marginBottom: 0 }}
                  onPress={() => {
                    stopTracking();
                  }}
                >
                  <Text
                    style={{
                      ...styles.locationDescription,
                      color: colors.primary[10],
                    }}
                  >
                    Stop Tracking
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ ...styles.btn, marginBottom: 0 }}
                  onPress={() => {
                    startTracking();
                  }}
                >
                  <Text
                    style={{
                      ...styles.locationDescription,
                      color: colors.primary[10],
                    }}
                  >
                    Start Tracking
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
  )
}

export default LocationDetails